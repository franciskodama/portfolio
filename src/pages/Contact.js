import React, { useState } from 'react'
import { DragDropContext, Droppable, Draggable } from 'react-beautiful-dnd'
import { v4 as uuidv4 } from 'uuid';
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
    content: 'I did not like your website.'
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
  [uuidv4()]: {
    name: 'drag from here:',
    items: data
  },
  [uuidv4()]: {
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
    console.log(columns)
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

  const handleClickClearMessage = () => {
    setMessage('')
  }

  const handleChange = (event) => {
    setMessage(event.target.value)
    console.log(message)
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
                text='send'
                align='flex-end'
              />
            </div>
          </form>


</div>
</section>
)}

export default Contact

  // const [ list, setList ] = useState(data)

  // const reorderList = (list, startIndex, endIndex) => {
  //   const result = Array.from(list)
  //   const [removed] = result.splice(startIndex, 1)
  //   result.splice(endIndex, 0, removed)
  //   return result
  // }

  // const onEnd = (result) => {
  //   setList(reorderList(list, result.source.index, result.destination.index))
  // }

//   return (
//     <section className='section section--contact' id='contact'>

//         <div className='container'>
//           <h1 className='main-title'>hello generator</h1>
//           <p className='sub-title'>Let me help you drop me a line! ;)</p>

//           <DragDropContext onDragEnd={onEnd}>  
//             <Droppable droppableId='dragdrop'>
//               {(provided, snapshot) => ( <div ref={provided.innerRef}>
//                 {list.map((item, index) => (
//                   <Draggable draggableId={item.id} key={item.id} index={index} >
//                     {(provided, snapshot) => (
//                       <div
//                       ref={provided.innerRef}
//                       {...provided.draggableProps}
//                       {...provided.dragHandleProps}
//                       >
//                         <div className='phrase'>
//                           {item.text}
//                         </div>
//                       </div>
//                      )}
//                   </Draggable>                  
//                 ))}
//                 {provided.placeholder}
//                 </div>
//               )}
//             </Droppable>
//           </DragDropContext>
//           </div>
//     </section>
//   )
// }

// export default Contact

  // const [ message, setMessage ] = useState('')

  // const handleClickClearMessage = () => {
  //   setMessage('')
  // }

{/* 
          <div className='drop'>
            <p className='drop__title'>drop here:</p>
            <div className='drop__space'>
            </div>
          </div> */}


          {/* <form className='form-contact'>
            <p className='form-contact__title'>Additional comments:</p>
            <textarea
              value=''
              className='form-contact__input'
              type='text'
              size='10'
            ></textarea>

            <div className='form-contact__buttons'>
              <Button
                className={'btn btn--dark-dark-bg'}
                onClick={handleClickClearMessage}
                text='clear'
                align='flex-start'
              />
              <Button
                text='send'
                align='flex-end'
              />
            </div>
          </form> */}



          {/* <ul className='phrase-container'>
            <li className='phrase'>I hope this message finds you well.</li>
            <li className='phrase'>Cool website, man!</li>
            <li className='phrase highlight'>do you want to work in our company?</li>
            <li className='phrase'>ops, I found a bug.</li>
            <li className='phrase'>Holly cow, what a portfolio!</li>
            <li className='phrase highlight'>Let's schedule a interview?</li>
            <li className='phrase'>Cool!!!</li>
            <li className='phrase'>I didn't like your website, and I tell you why...</li>
            <li className='phrase'>regards,</li>
            <li className='phrase'>sincerely,</li>
            <li className='phrase'>Take care!</li>
            <li className='phrase'>Thanks! :)</li>
          </ul> */}




//           import React, { useState } from 'react'
// import { DragDropContext, Droppable, Draggable } from 'react-beautiful-dnd'
// import Button from '../components/Button'
// import '../styles/Contact.css'

// const Contact = () => {

//   const [ message, setMessage ] = useState('')

//   const handleClick = (event) => {
//     event.preventDefault()
//     setMessage(previousMessage => previousMessage + event.target.value)
//   }

//   const handleChange = (event) => {
//     setMessage(previousMessage => previousMessage + event.target.value)
//     console.log(message)
//   }

//   const handleClickClearMessage = () => {
//     setMessage('')
//   }

//   return (
//     <section className='section section-contact' id='contact'>

//         <div className='container'>
//           <h1 className='title'>hello generator</h1>
//           <p className='sub-title'>Let me help you drop me a line! ;)</p>

//           <DragDropContext>  
//             <form>
//             <p className='sub-title-tray sub-title-tray-first'>drag from here:</p>
//               <input onClick={handleClick} className='phrase phrase--active' value='Hey Francis!' type='submit'/>
//               <label htmlFor='Hey Francis!'></label>

//               <input onClick={handleClick} className='phrase' value='I hope this message finds you well.' type='submit'/>
//               <label htmlFor='I hope this message finds you well.'></label>

//               <input onClick={handleClick} className='phrase' value='Cool website, man!' type='submit'/>
//               <label htmlFor='Cool website, man!'></label>

//               <input onClick={handleClick} className='phrase' value='do you want to work in our company?' type='submit'/>
//               <label htmlFor='do you want to work in our company?'></label>

//               <input onClick={handleClick} className='phrase' value='ops, I found a bug.' type='submit'/>
//               <label htmlFor='ops, I found a bug.'></label>

//               <input onClick={handleClick} className='phrase' value='Holly cow, what a portfolio!' type='submit'/>
//               <label htmlFor='Holly cow, what a portfolio!'></label>

//               <input onClick={handleClick} className='phrase' value={`Let's schedule an interview?`} type='submit'/>
//               <label htmlFor='Lets schedule a interview?'></label>

//               <input onClick={handleClick} className='phrase' value='I did not like your website.' type='submit'/>
//               <label htmlFor='I did not like your website.'></label>

//               <input onClick={handleClick} className='phrase' value='Cool!!!' type='submit'/>
//               <label htmlFor='Cool!!!'></label>

//               <input onClick={handleClick} className='phrase' value='I did not like your website, and I tell you why...' type='submit'/>
//               <label htmlFor='I did not like your website, and I tell you why...'></label>

//               <input onClick={handleClick} className='phrase' value='Regards,' type='submit'/>
//               <label htmlFor='Regards,'></label>

//               <input onClick={handleClick} className='phrase' value='Take care!' type='submit'/>
//               <label htmlFor='Take care!'></label>

//               <input onClick={handleClick} className='phrase' value='Thanks! :)' type='submit'/>
//               <label htmlFor='Thanks! :)'></label>
//             </form>
//           </DragDropContext>
//           <div className='tray-container'>
//             <p className='sub-title-tray'>drop here:</p>
//             <div className='tray'>

//             </div>
//           </div>
         

//           <form className='form-contact'>
//           <p className='sub-title-tray'>Additional comments:</p>
//             <textarea
//               value={message}
//               onChange={handleChange}
//               className='form-contact-input'
//               type='text'
//               size='10'
//             ></textarea>

//             <div className='contact-buttons'>

//             <Button
//               onClick={handleClickClearMessage}
//               text='clear'
//               bgColor='var(--dark-color)'
//               color='var(--bright-color)'
//               align='flex-start'
//               border='1px solid var(--bright-color)'
//             />

//             <Button
//               text='send'
//               bgColor='var(--third-color)'
//               color='var(--brigth-color'
//               align='flex-end'
//             />
            
//             </div>
//           </form>
//         </div>

//     </section>
//   )
// }

// export default Contact