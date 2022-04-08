import React, { useRef, useState } from "react";
import { Link } from "react-scroll";
import "../styles/About.css";
import Button from "../components/Button";
import BagEmpty from "../assets/images/bag.svg";
import Avatar from "../components/Avatar";
import Thumbnail from "../assets/images/avatar-70x70.jpg";
import Trash from "../assets/images/about-trash.svg";
import Close from "../assets/images/card-icon-close-white.svg";
import WhyCard from "../components/WhyCard";
import { whyData } from "../data/Data";

const About = () => {
  const [location, setLocation] = useState({ data: "" });
  const [showMessageError, setShowMessageError] = useState(false);
  const [addMe, setAddMe] = useState({ showMe: false });
  const [showMessage, setShowMessage] = useState({ show: false });
  const [inBag, setInBag] = useState(false);
  const refMessageEmpty = useRef(null);
  const refMessageFull = useRef(null);

  const handleClickLocation = (e) => {
    const newLocation = { data: e.target.value };
    setLocation(newLocation);
    const error = false;
    setShowMessageError(error);
  };

  const handleClickAddToTeam = () => {
    if (location.data) {
      setShowMessage({ show: false });
      setAddMe({ showMe: true });
      setInBag(true);
    } else {
      const error = true;
      setShowMessageError(error);
    }
  };

  const handleClickBag = () => {
    if (inBag) {
      refMessageEmpty.current.style.display = "none";
      refMessageFull.current.style.display = "block";
      setShowMessage(showMessage.show ? { show: false } : { show: true });
    } else {
      refMessageEmpty.current.style.display = "flex";
      refMessageFull.current.style.display = "none";
      setShowMessage(showMessage.show ? { show: false } : { show: true });
    }
  };

  const handleClickDelete = () => {
    setShowMessage({ show: false });
    setAddMe({ show: false });
    setInBag(false);
  };

  const handleClickClose = () => {
    setShowMessage({ show: false });
  };

  const handleClickInterview = () => {
    setShowMessage({ show: false });
    console.log(`location: ${location.data}`);
  };

  return (
    <section className="section section--about" id="about">
      <div className="container">
        <div className="first-main-container">
          <Avatar />
        </div>

        <div className="second-main-container">
          <div className="visa-tag">
            <p className="work-permit">WORK PERMIT VALID</p>
            <p>to work in Canada</p>
          </div>

          <div onClick={handleClickBag} className="bag-container">
            <img className="bag-empty" src={BagEmpty} alt="Shop bag empty" />
            <p
              className="number-one"
              style={{ display: addMe.showMe ? "block" : "none" }}
            >
              1
            </p>
          </div>
          {/* ======================= MODAL ========================= */}

          <div
            className="modal"
            style={{ display: showMessage.show ? "block" : "none" }}
          >
            <div className="modal__header">
              <h3 className="modal__title">CHECK OUT</h3>
              <img
                className="modal__close"
                onClick={handleClickClose}
                src={Close}
                alt="close button"
              />
            </div>

            {/* ==================== MODAL FULL ====================== */}

            <div className="modal__full" ref={refMessageFull}>
              <div className="modal__full-wrapper">
                <img
                  className="modal__image"
                  src={Thumbnail}
                  alt="thumbanail image avatar"
                />
                <div className="modal__text-wrapper">
                  <h4 className="modal__name">Francis Kodama</h4>
                  <p className="modal__email">fk@fkodama.com</p>
                  <div className="modal__location-wrapper">
                    <p className="modal__location-title">
                      Location:{" "}
                      <span
                        style={{
                          textTransform: "uppercase",
                          fontFamily: "var(--main-font-semibold)",
                        }}
                      >
                        {location.data}
                      </span>
                    </p>
                    {/* <p className="modal__location">Remote</p> */}
                  </div>
                </div>
                <img
                  onClick={handleClickDelete}
                  className="icon-delete"
                  src={Trash}
                  alt="icon trash to delete"
                />
              </div>
              <p className="modal__button-title">Confirm Purchase:</p>
              <Link
                to="contact"
                spy={true}
                smooth={true}
                offset={-150}
                duration={500}
              >
                <Button
                  className="btn btn--bright"
                  onClick={handleClickInterview}
                  text="schedule an interview"
                />
              </Link>
            </div>

            {/* ==================== MODAL EMPTY ====================== */}

            <div className="modal__empty" ref={refMessageEmpty}>
              <div className="modal__empty-wrapper">
                <p className="modal__empty-text">Your bag is</p>
                <h3 className="modal__empty-title">EMPTY</h3>
              </div>

              <p className="modal__button-title">Do you want to come back?</p>
              <Button
                className="btn btn--bright"
                onClick={handleClickClose}
                text="Continue Shopping"
              />
            </div>

            {/* ===================== MODAL END ===================== */}
          </div>

          <div className="about-description">
            <h3 className="name">Francis Kodama</h3>
            <h2 className="job">Front-end Developer</h2>
            <h2 className="languages">
              HTML, CSS, JS, <span className="and">and</span> React.
            </h2>
            <p className="description-one">
              I'm an experienced tech services entrepreneur/consultant - product
              designer oriented, with experience in product design, UX/UI and
              business development.
            </p>
            <p className="description-two">
              Resourceful, curious, creative, and critical thinker, who loves to
              solve problems by designing enjoyable, usable and useful products.
            </p>
          </div>

          <div className="bottom-container">
            <div className="location-button-container">
              <p className="location-title">location:</p>
              <form className="location">
                <input
                  onClick={handleClickLocation}
                  className="input-radio"
                  type="radio"
                  name="location"
                  value="remote"
                />
                <label htmlFor="remote">Remote</label>
                <input
                  onClick={handleClickLocation}
                  className="input-radio"
                  type="radio"
                  name="location"
                  value="ottawa"
                />
                <label htmlFor="ottawa">Ottawa</label>
                <input
                  onClick={handleClickLocation}
                  className="input-radio"
                  type="radio"
                  name="location"
                  value="hybrid"
                />
                <label htmlFor="hybrid">Hybrid</label>
              </form>

              <Button
                className="btn btn--dark"
                onClick={handleClickAddToTeam}
                text="add to my team"
                align="flex-start"
              />

              <p
                className={
                  showMessageError ? "error-location--active" : "error-location"
                }
              >
                ...Ops, choose a location
              </p>
            </div>

            <div className="tools">
              <p className="tools-title">included:</p>
              <p>git</p>
              <p>agile</p>
              <p>jira</p>
              <p>figma</p>
              <p>adobe xd</p>
              <p>adobe photoshop</p>
              <p>adobe illustrator</p>
            </div>
          </div>
        </div>
      </div>

      <WhyCard
        titleOne={whyData.about.titleOne}
        textOne={whyData.about.textOne}
        titleTwo={whyData.about.titleTwo}
        textTwo={whyData.about.textTwo}
        titleThree={whyData.about.titleThree}
        textThree={whyData.about.textThree}
        titleFour={whyData.about.titleFour}
        textFour={whyData.about.textFour}
        observation={whyData.about.observation}
        bottom={whyData.about.bottom}
        left={whyData.about.left}
      />
    </section>
  );
};

export default About;
