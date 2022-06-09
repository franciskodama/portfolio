import React, { useEffect, useState } from 'react';
import { Parallax } from 'react-scroll-parallax';
import '../styles/CleanCode.css';
import WhyCard from '../components/WhyCard';
import { whyData } from '../data/Data';
import ZoomIn from '../assets/images/code-check.svg';
import ZoomOut from '../assets/images/code-check-return.svg';

const CleanCode = () => {
  const [showBackground, setShowBackground] = useState(false);

  const handleClick = () => {
    setShowBackground(!showBackground);
    // setInterval(createBubble, 500);
  };

  useEffect(() => {}, [showBackground]);

  // ------------------ BUBBLES ------------------

  // const createBubble = () => {
  //   const section = document.getElementById("code");
  //   const createElement = document.createElement("span");
  //   let size = Math.random() * 120;
  //   createElement.style.width = 20 + size + "px";
  //   createElement.style.height = 20 + size + "px";
  //   createElement.style.left = Math.random() * window.innerWidth + "px";
  //   section.appendChild(createElement);
  //   setTimeout(() => {
  //     createElement.remove();
  //   }, 6000);
  // };

  return (
    <section
      id='code'
      className={
        !showBackground ? 'section code' : 'section code code__background'
      }
      style={{ padding: showBackground && '35em' }}
    >
      <Parallax opacity={[0, 1.5]}>
        <h1
          className='section-title'
          style={{ display: showBackground ? 'none' : 'block' }}
        >
          Clean code
        </h1>
      </Parallax>
      <div className='container'>
        {/* <Parallax
          scale={[1.8, 0.8]}
          opacity={[0, 1.5]}
          translateX={['-100%', '50%']}
        > */}
        <ul
          className='code__quote'
          style={{ display: showBackground ? 'none' : 'block' }}
        >
          <li className='code__odd--inverse'>"clean code</li>
          <li className='code__even--inverse'>always looks like</li>
          <li className='code__odd--inverse'>it was written by</li>
          <li className='code__even--inverse'>someone who</li>
          <li className='code__odd--inverse'>cares."</li>
          <li className='code__even--inverse code--stroke'>
            ― Robert C. Martin
          </li>
          <li className='code__odd--inverse code--stroke'>
            Author of Clean Code
          </li>
        </ul>
        {/* </Parallax> */}
        {/* <Parallax opacity={[0, 2]} translateY={['-100%', '50%']}> */}
        <div className='code__icon-wrapper' onClick={handleClick}>
          <img
            className='code__icon'
            src={!showBackground ? ZoomIn : ZoomOut}
            alt='icon zoom in or out'
          />
          <p style={{ display: !showBackground ? 'block' : 'none' }}>
            CHECK MY CODE
          </p>
          <p
            className='code--bright'
            style={{
              display: showBackground ? 'block' : 'none',
            }}
          >
            RETURN
          </p>
        </div>
        {/* </Parallax> */}

        {/* <Parallax
          scale={[1.4, 0.8]}
          opacity={[0, 2]}
          translateX={['50%', '-100%']}
        > */}
        <ul
          className='code__words'
          style={{ display: showBackground ? 'none' : 'block' }}
        >
          <li className='code__even dry'>DRY</li>
          <li className='code__odd meticulousness'>meticulousness</li>
          <li className='code__even easy-read'>easy to read</li>
          <li className='code__even easy-change'>easy to change</li>
          <li className='code__odd naming'>naming</li>
          <li className='code__odd conventions'>conventions</li>
          <li className='code__even repeat'>don't repeat</li>
          <li className='code__even self'>your self</li>
          <li className='code__odd keep'>keep it</li>
          <li className='code__odd simple'>simple</li>
          <li className='code__even concise'>clear and concise</li>
          <li className='code__odd consistency'>consistency</li>
          <li className='code__even uncomplicate'>uncomplicate</li>
          <li className='code__odd bem'>BEM</li>
        </ul>
        {/* </Parallax> */}

        {/* {!showBackground ? (
          <WhyCard
            titleOne={whyData.code.titleOne}
            textOne={whyData.code.textOne}
            titleTwo={whyData.code.titleTwo}
            textTwo={whyData.code.textTwo}
            titleThree={whyData.code.titleThree}
            textThree={whyData.code.textThree}
            titleFour={whyData.code.titleFour}
            textFour={whyData.code.textFour}
            observation={whyData.code.observation}
            bottom={whyData.code.bottom}
            left={whyData.code.left}
          />
        ) : null} */}
      </div>
    </section>
  );
};

export default CleanCode;
