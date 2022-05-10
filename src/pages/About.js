import React, { useEffect, useRef, useState, useContext } from "react";
import { AboutContext } from "../contexts/AboutContext";
import { Parallax } from "react-scroll-parallax";
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
import gsap from "gsap";

const About = () => {
  const { location, setLocation } = useContext(AboutContext);

  const [showMessageError, setShowMessageError] = useState(false);
  const [addMe, setAddMe] = useState({ showMe: false });
  const [showMessage, setShowMessage] = useState({ show: false });
  const [inBag, setInBag] = useState(false);
  const refMessageEmpty = useRef(null);
  const refMessageFull = useRef(null);
  const modalRef = useRef();

  useEffect(() => {
    gsap.from(modalRef.current, {
      opacity: 0,
      duration: 0.5,
      scale: 0.9,
    });
  });

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
    refMessageEmpty.current.style.display = "flex";
    refMessageFull.current.style.display = "none";
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

  // ========================== ANIMATION ==========================

  const revealAbout = () => {
    const reveals = document.querySelectorAll(".about__container-reveal");

    for (var i = 0; i < reveals.length; i++) {
      let windowHeight = window.innerHeight;
      let elementTop = reveals[i].getBoundingClientRect().top;
      let elementVisible = 150;
      if (elementTop < windowHeight - elementVisible) {
        reveals[i].classList.add("about__container-reveal--active");
      } else {
        reveals[i].classList.remove("about__container-reveal--active");
      }
    }
  };

  window.addEventListener("scroll", revealAbout);
  revealAbout();

  return (
    <section className="section about" id="about">
      <div className="container">
        <div className="about__container-reveal"></div>
        <div className="about__avatar-container">
          <Avatar />
        </div>

        <div className="about__info-container">
          <div className="work-permit">
            <p className="work-permit__text">WORK PERMIT VALID</p>
            <p>to work in Canada</p>
          </div>

          <div onClick={handleClickBag} className="bag" id="bag">
            <img src={BagEmpty} alt="Shop bag empty" />
            <p
              className="bag__number-one"
              style={{ display: addMe.showMe ? "block" : "none" }}
            >
              1
            </p>
          </div>
          {/* ======================= MODAL ========================= */}

          <div
            className="modal"
            ref={modalRef}
            style={{ display: showMessage.show ? "block" : "none" }}
          >
            <div className="modal__header">
              <h3 className="modal__title">CHECKOUT</h3>
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
                  className="modal__delete"
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

              <p className="modal__button-title">Would you like to return?</p>
              <Button
                className="btn btn--bright"
                onClick={handleClickClose}
                text="Continue Shopping"
              />
            </div>

            {/* ===================== MODAL END ===================== */}
          </div>

          <div className="about__container">
            <h3 className="about__name">Francis Kodama</h3>
            <h2 className="about__job">Front-end Developer</h2>
            <h2 className="about__languages">
              React, JS, CSS, <span className="about__and">and</span> HTML
            </h2>
            <p className="about__description">
              I'm an experienced tech services provider with a strong
              understanding of industry trends, as well as of the entire web
              development process, including development, UX/UI design, product
              management, and client services.
            </p>
            <p className="about__description">
              Resourceful, curious, creative, and critical thinker, who loves to
              solve problems by designing and coding enjoyable and useful
              products.
            </p>
          </div>

          <div className="bottom-container">
            <div className="location">
              <p className="location__title">location:</p>
              <form className="location__form">
                <input
                  onClick={handleClickLocation}
                  className="location__input"
                  type="radio"
                  name="location"
                  value="remote"
                />
                <label htmlFor="remote">Remote</label>
                <input
                  onClick={handleClickLocation}
                  className="location__input"
                  type="radio"
                  name="location"
                  value="ottawa"
                />
                <label htmlFor="ottawa">Ottawa</label>
                <input
                  onClick={handleClickLocation}
                  className="location__input"
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
                  showMessageError
                    ? "location__error--active"
                    : "location__error"
                }
              >
                ...Ops, choose a location
              </p>
            </div>

            <div className="about__skills">
              <p className="about__skills-title">included:</p>
              <p>git</p>
              <p>jira</p>
              <p>agile</p>
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
