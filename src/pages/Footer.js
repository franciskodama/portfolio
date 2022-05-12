import React from "react";
import "../styles/Footer.scss";

import { Link } from "react-scroll";
import LogoFooter from "../assets/images/logo-fkodama-footer.svg";
import Linkedin from "../assets/images/ico-linkedin-white.svg";
import Insta from "../assets/images/ico-instagram-white.svg";
import Git from "../assets/images/ico-github-white.svg";
import Resume from "../assets/2022-francis-kodama-resume.pdf";

import "../styles/Footer.css";

const Footer = () => {
  return (
    <section className="section footer">
      {" "}
      <div className="footer__grid">
        {" "}
        <h2 className="footer__title">
          {" "}
          ABOUT<span>ME</span>{" "}
        </h2>{" "}
        <h2 className="footer__title">
          {" "}
          GET<span>BACK</span>{" "}
        </h2>{" "}
        <h2 className="footer__title">
          {" "}
          GET<span>IN TOUCH</span>{" "}
        </h2>{" "}
        <h2 className="footer__title">
          {" "}
          GET<span>CONNECTED</span>{" "}
        </h2>{" "}
        <p className="footer__aboutme">
          {" "}
          A web developer with a great deal of experience in marketing, a
          natural leader, curious, and constantly provoked by new challenges.{" "}
        </p>{" "}
        <div className="footer__menu">
          {" "}
          <Link
            className="footer__menu-item"
            to="hero"
            spy={true}
            smooth={true}
            offset={0}
            duration={500}
          >
            {" "}
            home{" "}
          </Link>{" "}
          <Link
            className="footer__menu-item"
            to="about"
            spy={true}
            smooth={true}
            offset={0}
            duration={500}
          >
            {" "}
            about{" "}
          </Link>{" "}
          <Link
            className="footer__menu-item"
            to="projects"
            spy={true}
            smooth={true}
            offset={0}
            duration={500}
          >
            {" "}
            projects{" "}
          </Link>{" "}
          <Link
            className="footer__menu-item"
            to="api"
            spy={true}
            smooth={true}
            offset={-150}
            duration={500}
          >
            {" "}
            api{" "}
          </Link>{" "}
          <Link
            className="footer__menu-item"
            to="code"
            spy={true}
            smooth={true}
            offset={0}
            duration={500}
          >
            {" "}
            clean code{" "}
          </Link>{" "}
          <Link
            className="footer__menu-item"
            to="contact"
            spy={true}
            smooth={true}
            offset={-150}
            duration={500}
          >
            {" "}
            contact{" "}
          </Link>{" "}
        </div>{" "}
        <div className="footer__contact">
          {" "}
          <p className="footer__email">fk@fkodama.com</p>{" "}
          <Link
            className="footer__send"
            to="contact"
            spy={true}
            smooth={true}
            offset={0}
            duration={500}
          >
            {" "}
            send message{" "}
          </Link>{" "}
        </div>{" "}
        <div className="footer__icons">
          {" "}
          <a
            className="footer__icon-item"
            href="https://github.com/franciskodama"
            target="_blank"
          >
            {" "}
            <img src={Git} alt="logo Github" />{" "}
          </a>{" "}
          <a
            className="footer__icon-item"
            href="https://www.linkedin.com/in/kodama/"
            target="_blank"
          >
            {" "}
            <img src={Linkedin} alt="logo Linkedin" />{" "}
          </a>{" "}
          <a
            className="footer__icon-item"
            href="https://www.instagram.com/franciskodama/"
            target="_blank"
          >
            {" "}
            <img src={Insta} alt="logo Instagram" />{" "}
          </a>{" "}
        </div>{" "}
        <img className="footer__logo" src={LogoFooter} alt="logo fkodama" />{" "}
        <div className="footer__design">
          {" "}
          <p>Designed and built by</p>{" "}
          <p className="footer--bold">Francis Kodama</p> <p>Copyright 2022</p>{" "}
        </div>{" "}
        <a className="footer__resume" href={Resume} target="_blank">
          {" "}
          <h2 className="footer__resume-title">RESUME</h2> <p>Download</p>{" "}
          <p className="footer--bold">Resumé</p>{" "}
        </a>{" "}
        <p className="footer__location">
          {" "}
          Ottawa, ON - <span className="footer-bold">Canada</span>{" "}
        </p>{" "}
      </div>{" "}
    </section>
  );
};

export default Footer;
