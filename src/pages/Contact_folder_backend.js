import React, { useState, useContext } from 'react';
import '../styles/Contact.css';
import { AboutContext } from '../contexts/AboutContext';
import { DragDropContext, Droppable, Draggable } from 'react-beautiful-dnd';
import { whyData } from '../data/Data';
import { contactData } from '../data/Data';
import WhyCard from '../components/WhyCard';
import Button from '../components/Button';
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import axios from 'axios';

// ======================================

let dropSpace = {
  drag: {
    name: 'drag from here:',
    items: contactData,
  },
  drop: {
    name: 'drop here:',
    items: [],
  },
};

const onDragEnd = (result, columns, setColumns) => {
  if (!result.destination) return;
  const { source, destination } = result;

  if (source.droppableId !== destination.droppableId) {
    const sourceColumn = columns[source.droppableId];
    const destColumn = columns[destination.droppableId];
    const sourceItems = [...sourceColumn.items];
    const destItems = [...destColumn.items];
    const [removed] = sourceItems.splice(source.index, 1);
    destItems.splice(destination.index, 0, removed);
    setColumns({
      ...columns,
      [source.droppableId]: {
        ...sourceColumn,
        items: sourceItems,
      },
      [destination.droppableId]: {
        ...destColumn,
        items: destItems,
      },
    });
  } else {
    const column = columns[source.droppableId];
    const copiedItems = [...column.items];
    const [removed] = copiedItems.splice(source.index, 1);
    copiedItems.splice(destination.index, 0, removed);
    setColumns({
      ...columns,
      [source.droppableId]: {
        ...column,
        items: copiedItems,
      },
    });
  }
};

const Contact = () => {
  const { location } = useContext(AboutContext);
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();

    const dragDropMessage = columns.drop.items.map(
      (element) => element.content
    );

    if (!name || !email) {
      return toast.error(`Please fill name and email`);
    }
    try {
      setLoading(true);
      const { data } = await axios.post(`api/email`, {
        name,
        email,
        message,
        location: location.data,
        messageDrag: dragDropMessage,
      });
      setLoading(false);
      toast.success(data.message);
    } catch (err) {
      setLoading(false);
      toast.error(
        err.response && err.response.data.message
          ? err.response.data.message
          : err.message
      );
    }
  };

  const handleClickClearMessage = () => {
    setName('');
    setEmail('');
    setMessage('');
    setColumns({
      drag: {
        name: 'drag from here:',
        items: contactData,
      },
      drop: {
        name: 'drop here:',
        items: [],
      },
    });
  };

  // =================== DRAG N'DROP ===================

  const [columns, setColumns] = useState(dropSpace);

  return (
    <section className='section contact' id='contact'>
      <div className='container'>
        <h1 className='section-title' style={{ textAlign: 'left' }}>
          hello generator
        </h1>
        <p>Let me help you drop me a line! ;)</p>
        <DragDropContext
          onDragEnd={(result) => onDragEnd(result, columns, setColumns)}
        >
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
                              : 'var(--dark-color)',
                          }}
                        >
                          {column.items.map((item, index) => {
                            return (
                              <Draggable
                                key={item.id}
                                draggableId={item.id}
                                index={index}
                              >
                                {(provided, snapshot) => {
                                  return (
                                    <div
                                      className='phrase'
                                      ref={provided.innerRef}
                                      {...provided.draggableProps}
                                      {...provided.dragHandleProps}
                                      style={{
                                        backgroundColor: snapshot.isDragging
                                          ? 'var(--third-color)'
                                          : 'var(--dark-color)',
                                        color: 'var(--bright-color)',
                                        ...provided.draggableProps.style,
                                      }}
                                    >
                                      {item.content}
                                    </div>
                                  );
                                }}
                              </Draggable>
                            );
                          })}
                          {provided.placeholder}
                        </div>
                      );
                    }}
                  </Droppable>
                </div>
              </div>
            );
          })}
        </DragDropContext>

        <ToastContainer position='bottom-center' limit={1} />
        <form className='form-contact' onSubmit={handleSubmit}>
          <p className='form-contact__title'>Additional comments:</p>
          <textarea
            className='form-contact__input form-contact__input--textarea'
            placeholder='type some additional comments'
            type='text'
            value={message}
            onChange={(e) => {
              setMessage(e.target.value);
            }}
            name='message'
          ></textarea>{' '}
          <div className='form-contact__input-wrapper'>
            <input
              className='form-contact__input'
              placeholder='name'
              type='text'
              value={name}
              onChange={(e) => {
                setName(e.target.value);
              }}
              name='name'
            />
            <input
              className='form-contact__input'
              placeholder='email'
              type='text'
              value={email}
              onChange={(e) => {
                setEmail(e.target.value);
              }}
              name='email'
            />
          </div>
          <div className='form-contact__buttons'>
            <Button
              className={'btn btn--dark-dark-bg'}
              onClick={handleClickClearMessage}
              text='clear'
              align='flex-start'
            />

            <button
              className='btn btn--third-color'
              disabled={loading}
              type='submit'
              style={{
                backgroundColor: loading
                  ? 'var(--dark-color)'
                  : 'var(--third-color)',
              }}
            >
              {loading ? 'Sending...' : ' Submit'}
            </button>
          </div>
        </form>
      </div>

      <WhyCard
        titleOne={whyData.contact.titleOne}
        textOne={whyData.contact.textOne}
        titleTwo={whyData.contact.titleTwo}
        textTwo={whyData.contact.textTwo}
        titleThree={whyData.contact.titleThree}
        textThree={whyData.contact.textThree}
        titleFour={whyData.contact.titleFour}
        textFour={whyData.contact.textFour}
        observation={whyData.contact.observation}
        bottom={whyData.contact.bottom}
        left={whyData.contact.left}
      />
    </section>
  );
};

export default Contact;
