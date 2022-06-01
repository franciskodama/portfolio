import React, { useState, useContext } from "react";
import "../styles/Contact.css";
import WhyCard from "../components/WhyCard";
import { AboutContext } from "../contexts/AboutContext";
import { DragDropContext, Droppable, Draggable } from "react-beautiful-dnd";
import { whyData } from "../data/Data";
import { contactData } from "../data/Data";
import { db } from "../firebase";
// import Button from "../components/Button";
// import { useForm } from "react-hook-form";
// import { yupResolver } from "@hookform/resolvers/yup";
// import * as yup from "yup";
import axios from "axios";

// ======================================

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
  // ============= LOCATION FROM ABOUT ME PAGE ========

  const { location } = useContext(AboutContext);

  // =================== SEND EMAIL ===================
  // https://www.youtube.com/watch?v=_3-By9QfFa0

  // const [sent, setSent] = useState(false);
  // const [text, setText] = useState("");

  // const handleSend = async (e) => {
  //   setSent(true);
  //   try {
  //     await axios.post("http://localhost:2525/send_mail", {
  //       text,
  //     });
  //   } catch (error) {
  //     console.error(error);
  //   }
  // };

  // =================== SEND EMAIL ===================
  // https://w3collective.com/react-contact-form/

  // const [status, setStatus] = useState("SUBMIT");
  // const handleSubmit = async (e) => {
  //   e.preventDefault();
  //   setStatus("SENDING...");
  //   const { name, email, message } = e.target.elements;

  //   const dragDropMessage = columns.drop.items.map(
  //     (element) => element.content
  //   );

  //   let details = {
  //     name: name.value,
  //     email: email.value,
  //     message: message.value,
  //     location: location.data,
  //     messageDrag: dragDropMessage,
  //   };

  //   let response = await fetch("http://localhost:4000/contact", {
  //     method: "POST",
  //     headers: {
  //       "Content-Type": "application/json;charset=utf-8",
  //     },
  //     body: JSON.stringify(details),
  //   });

  //   setStatus("SENT");
  //   let result = await response.json();

  //   setInterval(() => {
  //     setStatus("SUBMIT");
  //   }, 4000);

  //   clearInterval();

  //   console.log(result.status);
  // };

  // =================== SEND EMAIL FIREBASE ===========

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    const dragDropMessage = columns.drop.items.map(
      (element) => element.content
    );

    db.collection("contacts")
      .add({
        name: name,
        email: email,
        message: message,
        location: location.data,
        messageDrag: dragDropMessage,
      })
      .then(() => {
        alert("Message sent!");
      })
      .catch((error) => {
        alert(error.message);
      });

    setName("");
    setEmail("");
    setMessage("");
  };

  // =================== DRAG N'DROP ===================

  const [columns, setColumns] = useState(dropSpace);

  return (
    <section className="section contact" id="contact">
      <div className="container">
        <h1 className="section-title" style={{ textAlign: "left" }}>
          hello generator
        </h1>
        <p>Let me help you drop me a line! ;)</p>
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

        <form className="form-contact" onSubmit={handleSubmit}>
          <p className="form-contact__title">Additional comments:</p>
          <textarea
            className="form-contact__input form-contact__input--textarea"
            placeholder="type some additional comments"
            type="text"
            value={message}
            onChange={(e) => {
              setMessage(e.target.value);
            }}
            // name="message"
            // id="message"
            required
          ></textarea>{" "}
          <div className="form-contact__input-wrapper">
            <input
              className="form-contact__input"
              placeholder="name"
              type="text"
              value={name}
              onChange={(e) => {
                setName(e.target.value);
              }}
              // name="name"
              // id="name"
            />
            <input
              className="form-contact__input"
              placeholder="email"
              type="text"
              value={email}
              onChange={(e) => {
                setEmail(e.target.value);
              }}
              // name="email"
              // id="email"
            />
          </div>
          <div className="form-contact__buttons">
            {/* <Button
              className={"btn btn--dark-dark-bg"}
              onClick={handleClickClearMessage}
              text="clear"
              align="flex-start"
            /> */}

            <button className="btn btn--third-color" type="submit">
              submit
            </button>

            {/* 
            <button
              className="btn btn--third-color"
              style={{
                backgroundColor:
                  status === "SENT"
                    ? "var(--dark-color)"
                    : "var(--third-color)",
              }}
              type="submit"
            >
              {status}
            </button> */}

            {/* ARCTICLE SOLUTION
            <button
              className="btn btn--third-color"
              style={{
                backgroundColor:
                  status === "SENT"
                    ? "var(--dark-color)"
                    : "var(--third-color)",
              }}
              type="submit"
            >
              {status}
            </button> */}
          </div>
        </form>
      </div>

      {/* 
      DARWIN SOLUTION      
      {!sent ? (
        <form onSubmit={handleSend}>
          <input
            type="text"
            value={text}
            onChange={(e) => setText(e.target.value)}
          />

          <button type="submit">Send Email</button>
        </form>
      ) : (
        <h1>Email Sent</h1>
      )} */}

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