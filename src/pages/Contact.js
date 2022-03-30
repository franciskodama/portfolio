import React, { useState } from 'react'
import { DragDropContext, Droppable, Draggable } from 'react-beautiful-dnd'
import '../styles/Contact.css'
import Button from '../components/Button'

const data = [
  {
    id: '1',
    content: 'Hey Francis!'
  },
  {
    id: '2',
    content: 'I hope this message finds you well.'
  },
  {
    id: '3',
    content: 'Cool website, man!'
  },
  {
    id: '4',
    content: 'Do you want to work in our company?'
  },
  {
    id: '5',
    content: 'ops, I found a bug.'
  },
  {
    id: '6',
    content: 'Holly cow, what a portfolio!'
  },
  {
    id: '7',
    content: `Let's schedule an interview?`
  },
  {
    id: '8',
    content: 'I am looking for a professional like you.'
  },
  {
    id: '9',
    content: 'Cool!!!'
  },
  {
    id: '10',
    content: 'I did not like your website, and I will tell you why...'
  },
  {
    id: '11',
    content: 'See you soon!'
  },
  {
    id: '12',
    content: 'Take care!'
  },
  {
    id: '13',
    content: 'Thanks! :)'
  }
]

const dropSpace = {
  drag: {
    name: 'drag from here:',
    items: data
  },
  drop: {
    name: 'drop here:',
    items: []
  }
}

const onDragEnd = (result, columns, setColumns) => {
  if (!result.destination) return
  const { source, destination } = result

  if (source.droppableId !== destination.droppableId) {
    const sourceColumn = columns[source.droppableId]
    const destColumn = columns[destination.droppableId]
    const sourceItems = [...sourceColumn.items]
    const destItems = [...destColumn.items]
    const [removed] = sourceItems.splice(source.index, 1)
    destItems.splice(destination.index, 0, removed)
    setColumns({
      ...columns,
      [source.droppableId]: {
        ...sourceColumn,
        items: sourceItems
      },
      [destination.droppableId]: {
        ...destColumn,
        items: destItems
      }
    })
  } else {
    const column = columns[source.droppableId]
    const copiedItems = [...column.items]
    const [removed] = copiedItems.splice(source.index, 1)
    copiedItems.splice(destination.index, 0, removed)
    setColumns({
      ...columns,
      [source.droppableId]: {
        ...column,
        items: copiedItems
      }
    })
  }
}


const Contact = () => {
  
  const [columns, setColumns] = useState(dropSpace);
  const [ message, setMessage ] = useState('')



  const handleChange = (event) => {
    setMessage(event.target.value)
  }

  const handleClickClearMessage = () => {
    setMessage('')
  }

  const handleClickSendMessage = () => {
    console.log(columns.drop.items.map((element) => element.content) + message)
  }

  return (
    <section className='section section--contact' id='contact'>
      <div className='container'>
        <h1 className='main-title'>hello generator</h1>
        <p className='sub-title'>Let me help you drop me a line! ;)</p>

      <DragDropContext onDragEnd={result => onDragEnd(result, columns, setColumns)}>
        {Object.entries(columns).map(([columnId, column], index) => {
          return (
            <div className='drop' key={columnId}>
              <h2 className='drop__title'>{column.name}</h2>
              <div>
                <Droppable droppableId={columnId} key={columnId}>
                  {(provided, snapshot) => {
                    return (
                      <div
                        {...provided.droppableProps}
                        ref={provided.innerRef}
                        className='drop__space'
                        style={{
                          background: snapshot.isDraggingOver
                            ? 'rgba(255, 255, 255, 0.1)'
                            : 'var(--dark-color)'
                        }}
                      >
                        {column.items.map((item, index) => {
                          return (
                            <Draggable key={item.id} draggableId={item.id} index={index} >
                              {(provided, snapshot) => {
                                return (
                                  <div className='phrase'
                                    ref={provided.innerRef}
                                    {...provided.draggableProps}
                                    {...provided.dragHandleProps}
                                    style={{
                                      backgroundColor: snapshot.isDragging
                                        ? 'var(--third-color)'
                                        : 'var(--dark-color)',
                                      color: 'var(--bright-color)',
                                      ...provided.draggableProps.style
                                    }}
                                  >
                                    {item.content}
                                  </div>
                                )
                              }}
                            </Draggable>
                          )
                        })}
                        {provided.placeholder}
                      </div>
                    )
                  }}
                </Droppable>
              </div>
            </div>
          )
        })}
      </DragDropContext>

    <form className='form-contact'>
      <p className='form-contact__title'>Additional comments:</p>
      <textarea
        className='form-contact__input'
        placeholder='type some additional comments and sign your name.'
        value={message}
        onChange={handleChange}
        type='text'
      ></textarea>

      <div className='form-contact__buttons'>
        <Button
          className={'btn btn--dark-dark-bg'}
          onClick={handleClickClearMessage}
          text='clear'
          align='flex-start'
        />
        <Button
        onClick={handleClickSendMessage}
          text='send'
          align='flex-end'
        />
      </div>
    </form>
  </div>
</section>
)}

export default Contact
