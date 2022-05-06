import React, { useEffect, useRef, useState } from "react";
import { Link } from "react-scroll";
import "../styles/Navbar.css";
import "../App.css";
import Logo from "../assets/logo-fkodama.svg";
import Menu from "../assets/images/menu-hamburguer.svg";
import Close from "../assets/images/card-icon-close-white.svg";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isActive, setIsActive] = useState(false);

  const handleClickClose = () => {
    setIsOpen(!isOpen);
    setIsActive(false);
  };

  const hangleClickOpen = () => {
    setIsOpen(!isOpen);
    setIsActive(true);
  };

  const handleClickOnLink = () => {
    setIsActive(false);
    setIsOpen(false);
  };

  useEffect(() => {
    // console.log(isOpen, isActive);
  }, [isActive, isOpen]);

  return (
    <header className="section navbar">
      <div className="container">
        <Link to="hero" spy={true} smooth={true} offset={0} duration={500}>
          <img className="navbar__logo" src={Logo} />
        </Link>

        {/* -------- NAVBAR TOGGLE -------- */}

        <div className="navbar__toggle">
          <img
            className="navbar__menu"
            style={{
              display: isOpen ? "none" : "block",
              backgroundColor: "var(--dark-color)",
            }}
            onClick={hangleClickOpen}
            src={Menu}
            alt="hamburguer icon menu"
          />
          <img
            className="navbar__close"
            style={{
              display: isOpen ? "block" : "none",
            }}
            onClick={handleClickClose}
            src={Close}
            alt="close icon menu"
          />
        </div>

        {/* -------- NAVBAR EXTENDED -------- */}

        <nav
          className="navbar__extended"
          style={{ display: isActive ? "block" : "none" }}
        >
          <Link
            className="navbar__item"
            to="hero"
            spy={true}
            smooth={true}
            offset={0}
            duration={500}
            onClick={handleClickOnLink}
          >
            {" "}
            home{" "}
          </Link>
          <Link
            className="navbar__item"
            to="reason"
            spy={true}
            smooth={true}
            offset={-50}
            duration={2000}
            onClick={handleClickOnLink}
          >
            {" "}
            this{" "}
          </Link>
          <Link
            className="navbar__item"
            to="about"
            spy={true}
            smooth={true}
            offset={0}
            duration={500}
            onClick={handleClickOnLink}
          >
            {" "}
            about me{" "}
          </Link>
          <Link
            className="navbar__item"
            to="projects"
            spy={true}
            smooth={true}
            offset={0}
            duration={500}
            onClick={handleClickOnLink}
          >
            {" "}
            projects{" "}
          </Link>

          <Link
            className="navbar__item"
            to="whyme"
            spy={true}
            smooth={true}
            offset={-150}
            duration={500}
            onClick={handleClickOnLink}
          >
            {" "}
            why{" "}
          </Link>

          <Link
            className="navbar__item"
            to="api"
            spy={true}
            smooth={true}
            offset={-150}
            duration={500}
            onClick={handleClickOnLink}
          >
            {" "}
            api{" "}
          </Link>

          <Link
            className="navbar__item"
            to="code"
            spy={true}
            smooth={true}
            offset={0}
            duration={500}
            onClick={handleClickOnLink}
          >
            {" "}
            my code{" "}
          </Link>
          <Link
            className="navbar__item"
            to="contact"
            spy={true}
            smooth={true}
            offset={0}
            duration={500}
            onClick={handleClickOnLink}
          >
            {" "}
            contact{" "}
          </Link>
        </nav>

        {/* -------- NAVBAR HORIZONTAL -------- */}

        <nav className="navbar__horizontal">
          <Link
            className="navbar__item"
            to="hero"
            spy={true}
            smooth={true}
            offset={0}
            duration={500}
            onClick={handleClickOnLink}
          >
            {" "}
            home{" "}
          </Link>
          <Link
            className="navbar__item"
            to="reason"
            spy={true}
            smooth={true}
            offset={-50}
            duration={2000}
            onClick={handleClickOnLink}
          >
            {" "}
            this{" "}
          </Link>
          <Link
            className="navbar__item"
            to="about"
            spy={true}
            smooth={true}
            offset={0}
            duration={500}
            onClick={handleClickOnLink}
          >
            {" "}
            about me{" "}
          </Link>
          <Link
            className="navbar__item"
            to="projects"
            spy={true}
            smooth={true}
            offset={0}
            duration={500}
            onClick={handleClickOnLink}
          >
            {" "}
            projects{" "}
          </Link>

          <Link
            className="navbar__item"
            to="whyme"
            spy={true}
            smooth={true}
            offset={-150}
            duration={500}
            onClick={handleClickOnLink}
          >
            {" "}
            why{" "}
          </Link>

          <Link
            className="navbar__item"
            to="api"
            spy={true}
            smooth={true}
            offset={-150}
            duration={500}
            onClick={handleClickOnLink}
          >
            {" "}
            api{" "}
          </Link>
          <Link
            className="navbar__item"
            to="code"
            spy={true}
            smooth={true}
            offset={0}
            duration={500}
            onClick={handleClickOnLink}
          >
            {" "}
            my code{" "}
          </Link>
          <Link
            className="navbar__item"
            to="contact"
            spy={true}
            smooth={true}
            offset={0}
            duration={500}
            onClick={handleClickOnLink}
          >
            {" "}
            contact{" "}
          </Link>
        </nav>
      </div>
    </header>
  );
};

export default Navbar;
