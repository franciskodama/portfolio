import React, { useState } from 'react';
import '../styles/WhyMe.css';
import { Parallax } from 'react-scroll-parallax';
import WhyPic01 from '../assets/images/why-pic-01.jpg';
import WhyPic02 from '../assets/images/why-pic-02.jpg';
import WhyPic03 from '../assets/images/why-pic-03.jpg';
import WhyPic04 from '../assets/images/why-pic-04.jpg';
import WhyPic05 from '../assets/images/why-pic-05.jpg';
import WhyPic06 from '../assets/images/why-pic-06.jpg';
import WhyPic07 from '../assets/images/why-pic-07.jpg';
import WhyPic08 from '../assets/images/why-pic-08.jpg';
import WhyPic09 from '../assets/images/why-pic-09.jpg';
import WhyPic10 from '../assets/images/why-pic-10.jpg';
import WhyPic11 from '../assets/images/why-pic-11.jpg';
import WhyPic12 from '../assets/images/why-pic-12.jpg';
import WhyPic13 from '../assets/images/why-pic-13.jpg';
import WhyPic14 from '../assets/images/why-pic-14.jpg';
import WhyPic15 from '../assets/images/why-pic-15.jpg';
import WhyPic16 from '../assets/images/why-pic-16.jpg';

const WhyMe = () => {
  const [heartShown, setHeartShown] = useState(false);

  const [oneShown, setOneShown] = useState(false);
  const [twoShown, setTwoShown] = useState(false);
  const [threeShown, setThreeShown] = useState(false);
  const [fourShown, setFourShown] = useState(false);
  const [fiveShown, setFiveShown] = useState(false);
  const [sixShown, setSixShown] = useState(false);
  const [sevenShown, setSevenShown] = useState(false);
  const [eightShown, setEightShown] = useState(false);
  const [nineShown, setNineShown] = useState(false);
  const [tenShown, setTenShown] = useState(false);
  const [elevenShown, setElevenShown] = useState(false);
  const [twelveShown, setTwelveShown] = useState(false);
  const [thirteenShown, setThirteenShown] = useState(false);
  const [fourteenShown, setFourteenShown] = useState(false);
  const [fifteenShown, setFifteenShown] = useState(false);
  const [sixteenShown, setSixteenShown] = useState(false);

  return (
    <section className='section whyme' id='whyme'>
      <div className='container'>
        <h1 className='section-title'>Why Me?</h1>
        <p className='whyme-subtitle'>
          The opportunity to have a fully<br></br>qualified professional in your
          team.
        </p>

        <div
          className='circle'
          style={{ display: heartShown ? 'none' : 'flex' }}
        >
          <h4 className='circle__title'>Whole package</h4>
          <p className='circle__text'>
            Maturity, organization, strategic view, and much more from 24 years
            of experience.
          </p>
        </div>

        <div
          className='circle-clicked'
          style={{ display: heartShown ? 'flex' : 'none' }}
        >
          <h4 className='circle-clicked__title'>PASSION</h4>
          <h6 className='circle-clicked__text'>
            My career in marketing <br></br> spanned more than two decades, and
            I achieved important positions <br></br>I had planned. Now is the
            time for me to pursue a career I've been passionate about since I
            was a teenager. A career that I've been working on and having a lot
            of fun with!
            <br></br>
            <br></br>
            <q className='circle-clicked__quote' rel='Joe Namath'>
              "When you have fun, you can do amazing things."
            </q>
            <p className='circle-clicked__quote--bright'>- Joe Namath</p>
          </h6>
        </div>

        <div
          className='circle-small'
          onClick={() => setHeartShown(!heartShown)}
        >
          <h4 className='circle-small__title'>Why changing carrers?</h4>
          <p className='circle-small__text'>Click here</p>
        </div>

        <section className='cv'>
          <Parallax
            opacity={[0, 2]}
            translateY={['100%', '-50%']}
            scale={[2, 0.8]}
          >
            <div className='cv__item'>
              <div className='cv__first-container'>
                <div className='cv__first-wrapper'>
                  <h3 className='cv__first-title'>Changing carreers</h3>
                  <span
                    className='cv__first-title-curly'
                    style={{ marginLeft: '0.3em', marginRight: '0.3em' }}
                  >
                    {String.fromCharCode(123)}
                  </span>
                  <div className='cv__first-title--bright'>
                    software developer
                  </div>
                  <span className='cv__first-title-curly'>
                    {String.fromCharCode(125)}
                  </span>
                  <div className='cv__first-square'></div>
                </div>
                <p className='cv__cia-date cv__hightlight'>
                  2023 ~ <span className='cv__today'>TODAY</span>
                </p>
                <p className='cv__tech cv__tech--mobile'
                style={{ width: "95%"}}
                >
                  React | Next.js | JavaScript | Typescript | CSS3 | SASS | HTML5 | 
                  Styled Components | Tailwind | APIs | Prisma | GraphQL | Retool | 
                  Airtable | Firebase | Responsive Design | Git | Yarn | NPM | 
                  Figma | Adobe Photoshop | Jira | Agile | ...And a big  smile
                </p>
              </div>
              <div className='cv__b-wrapper cv__b-wrapper--mobile'>
                <h6 className='cv__benefit-title'>
                  How does all of this benefit you?
                </h6>
                <h5 className='cv__benefit'>
                  I will work with teams, contributing and inspiring colleagues
                  in order to get the best out of us.
                </h5>
              </div>
            </div>
          </Parallax>
          <Parallax
            opacity={[0, 2]}
            translateY={['100%', '-50%']}
            scale={[2, 0.8]}
          >
            <div className='cv__item'>
              <div className='cv__a-wrapper'>
                <h3 className='cv__title'>General Director</h3>
                <div className='cv__square'></div>
                <p className='cv__cia-date'>
                  Circus | <span className='cv__hightlight'>2016 ~ 2020</span>
                </p>
                <ul className='cv__tech'>
                  <li>Leadership</li>
                  <li>Product Strategy</li>
                  <li>Agile methodology</li>
                </ul>
              </div>

              <div className='cv__b-wrapper'>
                <h6 className='cv__benefit-title'>Why is it good for you?</h6>
                <h5 className='cv__benefit'>
                  I will bring valuable experience and leadership skills to your organization.
                  {/* Product: I will consider what are the most valuable features for each persona, respecting the product's life cycle. */}
                </h5>
              </div>
            </div>
          </Parallax>
          <Parallax
            opacity={[0, 2]}
            translateY={['100%', '-50%']}
            scale={[2, 0.8]}
          >
            <div className='cv__item'>
              <div className='cv__a-wrapper'>
                <h3 className='cv__title'>
                  Planning and new business director
                </h3>
                <div className='cv__square'></div>
                <p className='cv__cia-date'>
                  Circus | <span className='cv__hightlight'>2011 ~ 2015</span>
                </p>
                <ul className='cv__tech'>
                  <li>Presentations</li>
                  <li>Leadership</li>
                  <li>Sales</li>
                </ul>
              </div>

              <div className='cv__b-wrapper'>
                <h6 className='cv__benefit-title'>Why is it good for you?</h6>
                <h5 className='cv__benefit'>
                  Through listening, <br></br>strategy, and effective
                  communication, I will present my ideas, negotiating and
                  optimizing results on multiple fronts.
                </h5>
              </div>
            </div>
          </Parallax>
          <Parallax
            opacity={[0, 2]}
            translateY={['100%', '-50%']}
            scale={[2, 0.8]}
          >
            <div className='cv__item'>
              <div className='cv__a-wrapper'>
                <h3 className='cv__title'>Client Services Director</h3>
                <div className='cv__square'></div>
                <p className='cv__cia-date'>
                  WE | <span className='cv__hightlight'>2008 ~ 2010</span>
                </p>
                <p className='cv__cia-date'>
                  Rapp Collins |{' '}
                  <span className='cv__hightlight'>2007 ~ 2008</span>
                </p>
                <ul className='cv__tech'>
                  <li>Leadership</li>
                  <li>Business & Financial</li>
                  <li>Problem Solving</li>
                </ul>
              </div>

              <div className='cv__b-wrapper'>
                <h6 className='cv__benefit-title'>Why is it good for you?</h6>
                <h5 className='cv__benefit'>
                  I will listen closely to customers to understand and discover
                  their real needs.
                </h5>
              </div>
            </div>
          </Parallax>
          <Parallax
            opacity={[0, 2]}
            translateY={['100%', '-50%']}
            scale={[2, 0.8]}
          >
            <div className='cv__item'>
              <div className='cv__a-wrapper'>
                <h3 className='cv__title'>
                  Advertising <br></br>and digital marketing manager
                </h3>
                <div className='cv__square'></div>
                <p className='cv__cia-date'>
                  Peugeot-Citroën Automobile |{' '}
                  <span className='cv__hightlight'>2000 ~ 2007</span>
                </p>
                <ul className='cv__tech'>
                  <li>Critical Thinking</li>
                  <li>Strategy & Criativity</li>
                  <li>Keen eye for design</li>
                </ul>
              </div>

              <div className='cv__b-wrapper'>
                <h6 className='cv__benefit-title'>Why is it good for you?</h6>
                <h5 className='cv__benefit'>
                  I will use my experience in campaign evaluation, critical
                  thinking, and a keen eye for design to provide my opinion so
                  the team can develop the best digital product.
                </h5>
              </div>
            </div>
          </Parallax>
        </section>

        <section className='pics'>
          <div className='pics__wrapper-vertical'>
            <img
              src={WhyPic01}
              alt='gallery element'
              className='pics__pic'
              onMouseEnter={() => setOneShown(true)}
              onMouseLeave={() => setOneShown(false)}
            />
            {oneShown ? <p className='pics__subtitle'>WE 2008</p> : null}
          </div>

          <div className='pics__wrapper-vertical'>
            <img
              src={WhyPic02}
              alt='gallery element'
              className='pics__pic'
              onMouseEnter={() => setTwoShown(true)}
              onMouseLeave={() => setTwoShown(false)}
            />
            {twoShown ? <p className='pics__subtitle'>Circus 2017</p> : null}
          </div>

          <div className='pics__wrapper'>
            <img
              src={WhyPic03}
              alt='gallery element'
              className='pics__pic'
              onMouseEnter={() => setThirteenShown(true)}
              s
              onMouseLeave={() => setThirteenShown(false)}
            />
            {thirteenShown ? (
              <p className='pics__subtitle'>Circus 2019</p>
            ) : null}
          </div>

          <div className='pics__wrapper-vertical'>
            <img
              src={WhyPic04}
              alt='gallery element'
              className='pics__pic'
              onMouseEnter={() => setFourShown(true)}
              onMouseLeave={() => setFourShown(false)}
            />
            {fourShown ? <p className='pics__subtitle'>Citroën 2007</p> : null}
          </div>

          <div className='pics__wrapper-vertical'>
            <img
              src={WhyPic05}
              alt='gallery element'
              className='pics__pic'
              onMouseEnter={() => setFiveShown(true)}
              onMouseLeave={() => setFiveShown(false)}
            />
            {fiveShown ? <p className='pics__subtitle'>WE 2008</p> : null}
          </div>

          <div className='pics__wrapper-vertical'>
            <img
              src={WhyPic06}
              alt='gallery element'
              className='pics__pic'
              onMouseEnter={() => setSixShown(true)}
              onMouseLeave={() => setSixShown(false)}
            />
            {sixShown ? <p className='pics__subtitle'>Circus 2020</p> : null}
          </div>

          <div className='pics__wrapper'>
            <img
              src={WhyPic07}
              alt='gallery element'
              className='pics__pic'
              onMouseEnter={() => setSevenShown(true)}
              onMouseLeave={() => setSevenShown(false)}
            />
            {sevenShown ? <p className='pics__subtitle'>Circus 2016</p> : null}
          </div>

          <div className='pics__wrapper-vertical'>
            <img
              src={WhyPic08}
              alt='gallery element'
              className='pics__pic'
              onMouseEnter={() => setEightShown(true)}
              onMouseLeave={() => setEightShown(false)}
            />
            {eightShown ? <p className='pics__subtitle'>Circus 2014</p> : null}
          </div>

          <div className='pics__wrapper-vertical'>
            <img
              src={WhyPic09}
              alt='gallery element'
              className='pics__pic'
              onMouseEnter={() => setNineShown(true)}
              onMouseLeave={() => setNineShown(false)}
            />
            {nineShown ? <p className='pics__subtitle'>Citroën 2006</p> : null}
          </div>

          <div className='pics__wrapper-vertical'>
            <img
              src={WhyPic10}
              alt='gallery element'
              className='pics__pic'
              onMouseEnter={() => setTenShown(true)}
              onMouseLeave={() => setTenShown(false)}
            />
            {tenShown ? <p className='pics__subtitle'>Circus 2020</p> : null}
          </div>

          <div className='pics__wrapper'>
            <img
              src={WhyPic11}
              alt='gallery element'
              className='pics__pic'
              onMouseEnter={() => setElevenShown(true)}
              onMouseLeave={() => setElevenShown(false)}
            />
            {elevenShown ? <p className='pics__subtitle'>Circus 2019</p> : null}
          </div>

          <div className='pics__wrapper'>
            <img
              src={WhyPic12}
              alt='gallery element'
              className='pics__pic'
              onMouseEnter={() => setTwelveShown(true)}
              onMouseLeave={() => setTwelveShown(false)}
            />
            {twelveShown ? (
              <p className='pics__subtitle'>Rapp Collins 2008</p>
            ) : null}
          </div>
          <div className='pics__wrapper'>
            <img
              src={WhyPic13}
              alt='gallery element'
              className='pics__pic'
              onMouseEnter={() => setThreeShown(true)}
              onMouseLeave={() => setThreeShown(false)}
            />
            {threeShown ? <p className='pics__subtitle'>Circus 2012</p> : null}
          </div>

          <div className='pics__wrapper'>
            <img
              src={WhyPic14}
              alt='gallery element'
              className='pics__pic'
              onMouseEnter={() => setFourteenShown(true)}
              onMouseLeave={() => setFourteenShown(false)}
            />
            {fourteenShown ? (
              <p className='pics__subtitle'>Rapp Collins 2007</p>
            ) : null}
          </div>

          <div className='pics__wrapper'>
            <img
              src={WhyPic15}
              alt='gallery element'
              className='pics__pic'
              onMouseEnter={() => setFifteenShown(true)}
              onMouseLeave={() => setFifteenShown(false)}
            />
            {fifteenShown ? (
              <p className='pics__subtitle'>Circus 2013</p>
            ) : null}
          </div>

          <div className='pics__wrapper'>
            <img
              src={WhyPic16}
              alt='gallery element'
              className='pics__pic'
              onMouseEnter={() => setSixteenShown(true)}
              onMouseLeave={() => setSixteenShown(false)}
            />
            {sixteenShown ? (
              <p className='pics__subtitle'>Rapp Collins 2007</p>
            ) : null}
          </div>
        </section>
      </div>
    </section>
  );
};

export default WhyMe;
