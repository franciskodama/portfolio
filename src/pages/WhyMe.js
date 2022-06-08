import React, { useState } from 'react';
import '../styles/WhyMe.css';
import { Parallax } from 'react-scroll-parallax';

const WhyMe = () => {
  const [heartShown, setHeartShown] = useState(false);

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
            Maturity, organization, strategic view, and much more from 23 years
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
              "When when you have fun, you can do amazing things."
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
                    front-end developer
                  </div>
                  <span className='cv__first-title-curly'>
                    {String.fromCharCode(125)}
                  </span>
                  <div className='cv__first-square'></div>
                </div>
                <p className='cv__cia-date cv__hightlight'>
                  2021 ~ <span className='cv__today'>TODAY</span>
                </p>
                <p className='cv__tech cv__tech--mobile'>
                  React | Next.js | JavaScript | CSS3 | SASS | HTML5 | Styled
                  Components | Responsive Design | APIs | MongoDB | MongoDB
                  Compass | GraphQL | Apollo GraphQL | Keystone | Firebase | Git
                  | NPM | FIGMA
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
          {/* -------------- */}
          <Parallax
            opacity={[0, 2]}
            translateY={['100%', '-50%']}
            scale={[2, 0.8]}
          >
            <div className='cv__item'>
              <div className='cv__a-wrapper'>
                <h3 className='cv__title'>Product strategy director</h3>
                <div className='cv__square'></div>
                <p className='cv__cia-date'>
                  Circus | <span className='cv__hightlight'>2016 ~ 2020</span>
                </p>
                <ul className='cv__tech'>
                  <li>Design thinking</li>
                  <li>Agile methodology</li>
                  <li>Product Strategy</li>
                </ul>
              </div>

              <div className='cv__b-wrapper'>
                <h6 className='cv__benefit-title'>Why is it good for you?</h6>
                <h5 className='cv__benefit'>
                  I will consider what are the most valuable features for each
                  persona, respecting the product's life cycle.
                </h5>
              </div>
            </div>
          </Parallax>
          {/* -------------- */}
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
          {/* -------------- */}
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
          {/* -------------- */}
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
          {/* -------------- */}
        </section>
      </div>
    </section>
  );
};

export default WhyMe;
