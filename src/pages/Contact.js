import React, { useState } from "react";
import { DragDropContext, Droppable, Draggable } from "react-beautiful-dnd";
import WhyCard from "../components/WhyCard";
import { whyData } from "../data/Data";
import "../styles/Contact.css";
import Button from "../components/Button";
import { contactData } from "../data/Data";

const dropSpace = {
  drag: {
    name: "drag from here:",
    items: contactData,
  },
  drop: {
    name: "drop here:",
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
  const [status, setStatus] = useState("Submit");

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus("Sending...");
    const { name, email, message } = e.target.elements;
    let details = {
      name: name.value,
      email: email.value,
      message: message.value,
    };
    let response = await fetch("http://localhost:5000/contact", {
      method: "POST",
      headers: {
        "Content-Type": "application/json;charset=utf-8",
      },
      body: JSON.stringify(details),
    });
    setStatus("Submit");
    let result = await response.json();
    alert(result.status);
  };

  // ======================================

  const [columns, setColumns] = useState(dropSpace);
  const [message, setMessage] = useState("");
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");

  const handleClickClearMessage = () => {
    setMessage("");
  };

  const handleClickSendMessage = () => {
    console.log(
      columns.drop.items.map((element) => element.content) +
        message +
        name +
        email
    );
  };

  return (
    <section className="section section--contact" id="contact">
      <div className="container">
        <h1 className="main-title">hello generator</h1>
        <p className="sub-title">Let me help you drop me a line! ;)</p>

        <DragDropContext
          onDragEnd={(result) => onDragEnd(result, columns, setColumns)}
        >
          {Object.entries(columns).map(([columnId, column], index) => {
            return (
              <div className="drop" key={columnId}>
                <h2 className="drop__title">{column.name}</h2>
                <div>
                  <Droppable droppableId={columnId} key={columnId}>
                    {(provided, snapshot) => {
                      return (
                        <div
                          {...provided.droppableProps}
                          ref={provided.innerRef}
                          className="drop__space"
                          style={{
                            background: snapshot.isDraggingOver
                              ? "rgba(255, 255, 255, 0.1)"
                              : "var(--dark-color)",
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
                                      className="phrase"
                                      ref={provided.innerRef}
                                      {...provided.draggableProps}
                                      {...provided.dragHandleProps}
                                      style={{
                                        backgroundColor: snapshot.isDragging
                                          ? "var(--third-color)"
                                          : "var(--dark-color)",
                                        color: "var(--bright-color)",
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

        <form className="form-contact">
          <p className="form-contact__title">Additional comments:</p>

          <textarea
            className="form-contact__input text-area"
            placeholder="type some additional comments"
            type="text"
            id="message"
            // value={message}
            // onChange={(e) => {
            //   setMessage(e.target.value);
            // }}
            required
          ></textarea>

          <div className="form-contact__input-wrapper">
            <input
              className="form-contact__input"
              placeholder="name"
              type="text"
              id="name"
              // value={name}
              // onChange={(e) => {
              //   setName(e.target.value);
              // }}
            />

            <input
              className="form-contact__input"
              placeholder="email"
              type="text"
              id="email"
              // value={email}
              // type="text"
              // onChange={(e) => {
              //   setEmail(e.target.value);
              // }}
            />
          </div>

          <div className="form-contact__buttons">
            <Button
              className={"btn btn--dark-dark-bg"}
              onClick={handleClickClearMessage}
              text="clear"
              align="flex-start"
            />

            <Button
              onClick={handleClickSendMessage}
              text="send"
              align="flex-end"
            />
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
