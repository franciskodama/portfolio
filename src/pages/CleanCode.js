import React, { useEffect, useState } from 'react';
import { Parallax } from 'react-scroll-parallax';
import '../styles/CleanCode.css';
// import WhyCard from '../components/WhyCard';
// import { whyData } from '../data/Data';
import ZoomIn from '../assets/images/code-check.svg';
import ZoomOut from '../assets/images/code-check-return.svg';

const CleanCode = () => {
  const [showBackground, setShowBackground] = useState(false);

  const handleClick = () => {
    setShowBackground(!showBackground);
  };

  useEffect(() => {}, [showBackground]);

  return (
    <section
      id='code'
      className={
        !showBackground ? 'section code' : 'section code code__background'
      }
      style={{ padding: showBackground && '35em' }}
    >
      <Parallax opacity={[0, 2]}>
        <h1
          className='section-title'
          style={{ display: showBackground ? 'none' : 'block' }}
        >
          My code
        </h1>
        <p
          className='code__subtitle'
          style={{ display: showBackground ? 'none' : 'block' }}
        >
          It must be read like a story
        </p>
      </Parallax>
      <div className='container'>
        {/* <Parallax
          scale={[1.8, 0.8]}
          opacity={[0, 1.5]}
          translateX={['-100%', '50%']}
        > */}

        <Parallax opacity={[0, 2]}>
          <div
            className='quote'
            style={{ display: showBackground ? 'none' : 'flex' }}
          >
            <q className='quote__text'>
              “Clean code always looks like it was written by someone who
              cares.”
            </q>
            <p className='quote__author-name'>
              <span style={{ color: 'red' }}>― </span>Robert C. Martin
            </p>
            <p className='quote__author'>Author of Clean Code</p>
          </div>
        </Parallax>

        {/* <ul
          className='quote'
          style={{ display: showBackground ? 'none' : 'block' }}
        >
          <li className='quote__bright quote--clean'>clean code</li>
          <li className='quote__dark quote--always'>always</li>
          <li className='quote__dark quote--looks'>looks like</li>
          <li className='quote__bright quote--it-was'>it was written by</li>
          <li className='quote__dark quote--someone'>someone</li>
          <li className='quote__bright quote--who'>who</li>
          <li className='quote__bright quote--cares'>cares."</li>
          <li className='quote__bright quote--stroke'>― Robert C. Martin</li>
          <li className='quote__bright quote--stroke'>Author of Clean Code</li>
        </ul> */}
        {/* </Parallax> */}
        {/* <Parallax opacity={[0, 2]} translateY={['-100%', '50%']}> */}
        <div className='code__button' onClick={handleClick}>
          <img
            src={!showBackground ? ZoomIn : ZoomOut}
            alt='icon zoom in or out'
          />
          <p
            style={{
              display: !showBackground ? 'block' : 'none',
              width: '8ch',
            }}
          >
            CHECK MY CODE
          </p>
          <p
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
          className='words'
          style={{ display: showBackground ? 'none' : 'block' }}
        >
          <li className='words__dark words--dry'>DRY</li>
          <li className='words__bright words--meticulousness'>
            meticulousness
          </li>
          <li className='words__dark words--easy-read'>easy to read</li>
          <li className='words__dark words--easy-change'>easy to change</li>
          <li className='words__bright words--naming'>naming</li>
          <li className='words__bright words--conventions'>conventions</li>
          <li className='words__dark words--repeat'>don't repeat</li>
          <li className='words__dark words--self'>your self</li>
          <li className='words__bright words--keep'>keep it</li>
          <li className='words__bright words--simple'>simple</li>
          <li className='words__dark words--concise'>clear and concise</li>
          <li className='words__bright words--consistency'>consistency</li>
          <li className='words__dark words--uncomplicate'>uncomplicate</li>
          <li className='words__bright words--bem'>BEM</li>
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
