import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import "../styles/About.css";
import Button from "../components/Button";
import BagEmpty from "../assets/images/bag.svg";
import Avatar from "../components/Avatar";
import Thumbnail from "../assets/images/avatar-70x70.jpg";
import Trash from "../assets/images/about-trash.svg";
import arrowRight from "../assets/images/arrow-right-black.svg";
import { isCompositeComponentWithType } from "react-dom/test-utils";
import WhyCard from "../components/WhyCard";
import { whyData } from "../data/Data";

const About = () => {
  const [location, setLocation] = useState("");
  const [addMe, setAddMe] = useState({ showMe: false });
  const [showMessage, setShowMessage] = useState({ show: false });

  const handleClickLocation = (event) => {
    setLocation(event.target.value);
    // console.log(location)
  };

  useEffect(() => {
    // console.log(location)
  });

  const handleClickAddToTeam = () => {
    setAddMe({ showMe: true });
  };

  const handleClickBag = () => {
    setShowMessage(showMessage.show ? { show: false } : { show: true });
  };

  const handleClickDelete = () => {
    setShowMessage({ show: false });
    setAddMe({ show: false });
  };

  const handleClickInterview = () => {
    setShowMessage({ show: false });
  };

  return (
    <section className="section section-about" id="about">
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

          <div
            className="bag-message"
            style={{ display: showMessage.show ? "block" : "none" }}
          >
            <h3 className="checkout-title">CHECK OUT</h3>
            <div className="purchase-container">
              <img
                className="purchase-image"
                src={Thumbnail}
                alt="thumbanail image avatar"
              />
              <div className="purchase-text-wrapper">
                <h4 className="purchase-name">Francis Kodama</h4>
                <p className="purchase-email">fk@fkodama.com</p>
                <div className="location-wrapper">
                  <p className="purchase-location-title">Location:</p>
                  <p className="purchase-location">Remote</p>
                </div>
              </div>
              <img
                onClick={handleClickDelete}
                className="icon-delete"
                src={Trash}
                alt="icon trash to delete"
              />
            </div>

            <p className="purchase-confirm-title">Confirm Purchase:</p>
            <Button
              className="btn btn--bright"
              onClick={handleClickInterview}
              text="schedule an interview"
            />
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
