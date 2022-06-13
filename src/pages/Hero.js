import React, { useRef } from 'react';
import { Link } from 'react-scroll';
import '../styles/Hero.css';
import Video from '../assets/images/hero-bg.mp4';
import Scroll from '../assets/images/ico-scroll.svg';

const Hero = () => {
  const sidesWrapperRef = useRef(null);
  const sideLeftRef = useRef(null);
  const sideTopRef = useRef(null);
  const sideRightRef = useRef(null);

  const onMoveHandler = (e) => {
    let X = e.pageX;
    let Y = e.pageY;

    sideLeftRef.current.style.transform =
      'skew(0deg, 30deg) scaleY(1.33333) translate(' +
      (X / 100) * -3 +
      'px, ' +
      (Y / 100) * -3 +
      'px)';
    sideTopRef.current.style.transform =
      'skew(60deg, -30deg) scaleY(.66667) translate(' +
      (X / 100) * 3 +
      'px, ' +
      (Y / 100) * -3 +
      'px)';
    sideRightRef.current.style.transform =
      'skew(0deg, -30deg) scaleY(1.33333) translate(' +
      (X / 100) * -3 +
      'px, ' +
      (Y / 100) * -3 +
      'px)';
  };

  return (
    <section className='section hero' id='hero'>
      <video
        autoPlay
        loop
        muted
        style={{
          position: 'absolute',
          width: '100%',
          height: '100vh',
          left: '50%',
          top: 0,
          objectFit: 'cover',
          transform: 'translate(-50%, 0)',
          zIndex: '1',
        }}
      >
        <source src={Video} type='video/mp4' />
      </video>
      <div className='hero__filter'></div>
      <div className='container' ref={sidesWrapperRef}>
        {/* --------------- CUBE --------------- */}
        <div className='cube' onMouseMove={onMoveHandler}>
          <div className='cube__left' ref={sideLeftRef}>
            <h2>hey, I'm</h2>
            <h2>Francis</h2> <h2>Kodama</h2> <h2>Based in</h2> <h2>Ottawa, </h2>
            <h2>Canada.</h2>
          </div>
          <div className='cube__top' ref={sideTopRef}>
            <h2>Front-end</h2> <h2>developer </h2> <h2>-----------</h2>
            <h2>react, css</h2> <h2>next, sass</h2>
          </div>
          <div className='cube__right' ref={sideRightRef}>
            <h2>html, api</h2> <h2>mongo db</h2> <h2>graph ql</h2>
            <h2>node, git</h2> <h2>figma, XD </h2> <h2>PHOTOSHOP</h2>
          </div>
        </div>
      </div>
      <Link to='reason' spy={true} smooth={true} offset={-150} duration={2000}>
        <img src={Scroll} className='hero__scroll' alt='icon to scroll' />
      </Link>
    </section>
  );
};

export default Hero;
