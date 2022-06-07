import React, { useState } from 'react';
import '../styles/WhyMe.css';

const WhyMe = () => {
  const [heartShown, setHeartShown] = useState(false);

  return (
    <section className='section whyme' id='whyme'>
      <div className='container'>
        <h1 className='section-title'>Why Me?</h1>
        <p className='whyme-subtitle'>
          The opportunity to have a fully<br></br>qualified professional in your
          team
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
          <p className='circle-clicked__text'>
            For more than two decades, I worked in marketing, progressed to
            important positions. And now, I turn my attention to a career that
            I'm passionate about since I was a teenager. A career that I will
            work for fun!<br></br>
            <br></br>"When you have confidence, you can have a lot of fun. And
            when you have fun, you can do amazing things."<br></br>
            -Joe Namath.
          </p>
        </div>

        <div
          className='circle-small'
          onClick={() => setHeartShown(!heartShown)}
        >
          <h4 className='circle-small__title'>Why changing carrers?</h4>
          <p className='circle-small__text'>Click here</p>
        </div>

        <div className='one-a__wrapper'>
          <div className='one-a__title'>Changing carreers</div>
          <span className='one-a__title-curly' style={{ marginLeft: '0.3em' }}>
            {String.fromCharCode(123)}
          </span>
          <div className='one-a__title--bright'>front-end developer</div>
          <span className='one-a__title-curly'>{String.fromCharCode(125)}</span>
        </div>
        <div className='one-b__wrapper'></div>
      </div>
    </section>
  );
};

export default WhyMe;

// const WhyMe = () => {

//   return (
//     <section
//       className="section section--whyme"
//       id="whyme"
//       style={{ transform: `translateY(${offsetY * 0.5}px)` }}
//     >
//       <div className="container">
//         ------------------ LINE SCROLL ------------------

//         <div className="why__line">
//           <svg
//             viewBox="0 0 978 2090"
//             fill="none"
//             preserveAspectRatio="xMidYMax meet"
//           >
//             <path
//               d="M559 0V446H727V562H861H975V676H53V778H355V720H959V1044H209V934H701V844H3V1276H559V1470H875V1630H559V1750H261V1886H559V2090"
//               stroke="#FF0000"
//               stroke-width="5"
//             />
//           </svg>
//         </div>

//         <section className="one">
//           <h1 className="scroll" data-rate=".4" data-direction="vertical">
//             ocean stuff
//           </h1>
//         </section>

//         <section className="two">
//           <h1 className="scroll" data-rate=".2" data-direction="vertical">
//             omg scroll
//           </h1>
//         </section>

//         ------------------ PARALLAX ------------------
//         <div className="whyme__background">
//           <div
//             className="whyme__elements"
//             style={{ transform: `translateY(${offsetY * 0.7}px)` }}
//           ></div>
//           <div
//             className="whyme__content"
//             style={{ transform: `translateY(${offsetY * 0.4}px)` }}
//           ></div>

//           <ul
//             className="whyme__title"
//             ref={whyMeRef}
//             onClick={() => setFirstClick(true)}
//             style={{ transform: `translateY(${offsetY * 0.9}px)` }}
//           >
//             <li className="whyme__letter">W</li>
//             <li className="whyme__letter">H</li>
//             <li className="whyme__letter">Y</li>
//             <li className="whyme__letter">M</li>
//             <li className="whyme__letter">E</li>
//             <li className="whyme__letter">?</li>
//           </ul>

//           <h3 className="whyme__words valuable">valuable for</h3>
//         <h3 className="whyme_words valuable-for">you</h3>
//         <h3 className="whyme_words valuable-for">the company</h3>
//         <h3 className="whyme_words valuable-for">your user</h3>
//         <div className="test-wrapper">
//           <p className="whyme_words test test-1">T</p>
//           <p className="whyme_words test test-2">E</p>
//           <p className="whyme_words test test-3">S</p>
//           <p className="whyme_words test test-4">T</p>
//           <p className="whyme_words test-second test-m">C</p>
//           <p className="whyme_words test-second test-o">M</p>
//           <p className="whyme_words test-second test-r">E</p>
//         </div>
//         </div>
//       </div>
//     </section>
//   );
// };

// export default WhyMe;

// -----------------------------------

// import { gsap } from "gsap";
// import { ScrollTrigger } from "gsap/ScrollTrigger";
// gsap.registerPlugin(ScrollTrigger);

// -----------------------------------

// const [firstclick, setFirstClick] = useState(false);

// const whyMeRef = useRef();
// const q = gsap.utils.selector(whyMeRef);

// useEffect(() => {
//   gsap.from(q(".whyme__letter"), {
//     scrollTrigger: {
//       trigger: q(".whyme__letter"),
//       toggleActions: "restart pause reverse pause",
//       start: "top bottom",
//       end: "top bottom",
//       scrub: true,
//     },
//     x: "3000px",
//     duration: 4,
//   });
// });

// ------------------ PARALLAX ------------------

// const [offsetY, setOffSetY] = useState(0);
// const handleScroll = () => setOffSetY(window.pageYOffset);

// useEffect(() => {
//   window.addEventListener("scroll", handleScroll);
//   console.log(offsetY);
//   return () => window.removeEventListener("scroll", handleScroll);
// }, []);

// ------------------ END PARALLAX ------------------

// let path = document.querySelector("path");
// let pathLength = path.getTotalLength();

// path.style.strokeDasharray = pathLength + " " + pathLength;
// path.style.strokeDasharray = pathLength;
// window.addEventListener("scroll", () => {
//   var scrollPercentage =
//     (document.documentElement.scrollTop + document.body.scrollTop) /
//     (document.documentElement.scrollHeight -
//       document.documentElement.clientHeight);
//   var drawLength = pathLength * scrollPercentage;
//   path.style.strokeDashoffset = pathLength - drawLength;
// });
