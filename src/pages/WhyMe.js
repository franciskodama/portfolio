import React from 'react';
import '../styles/WhyMe.css';

const WhyMe = () => {
  return (
    <section className='section section--whyme' id='whyme'>
      <div className='container'>
        <div className='why__line'></div>
      </div>
    </section>
  );
};

export default WhyMe;

// const WhyMe = () => {

//   return (
//     <section
//       className='section section--whyme'
//       id='whyme'
//       style={{ transform: `translateY(${offsetY * 0.5}px)` }}
//     >
//       <div className='container'>
//         ------------------ LINE SCROLL ------------------

//         <div className='why__line'>
//           <svg
//             viewBox='0 0 978 2090'
//             fill='none'
//             preserveAspectRatio='xMidYMax meet'
//           >
//             <path
//               d='M559 0V446H727V562H861H975V676H53V778H355V720H959V1044H209V934H701V844H3V1276H559V1470H875V1630H559V1750H261V1886H559V2090'
//               stroke='#FF0000'
//               stroke-width='5'
//             />
//           </svg>
//         </div>

//         <section className='one'>
//           <h1 className='scroll' data-rate='.4' data-direction='vertical'>
//             ocean stuff
//           </h1>
//         </section>

//         <section className='two'>
//           <h1 className='scroll' data-rate='.2' data-direction='vertical'>
//             omg scroll
//           </h1>
//         </section>

//         ------------------ PARALLAX ------------------
//         <div className='whyme__background'>
//           <div
//             className='whyme__elements'
//             style={{ transform: `translateY(${offsetY * 0.7}px)` }}
//           ></div>
//           <div
//             className='whyme__content'
//             style={{ transform: `translateY(${offsetY * 0.4}px)` }}
//           ></div>

//           <ul
//             className='whyme__title'
//             ref={whyMeRef}
//             onClick={() => setFirstClick(true)}
//             style={{ transform: `translateY(${offsetY * 0.9}px)` }}
//           >
//             <li className='whyme__letter'>W</li>
//             <li className='whyme__letter'>H</li>
//             <li className='whyme__letter'>Y</li>
//             <li className='whyme__letter'>M</li>
//             <li className='whyme__letter'>E</li>
//             <li className='whyme__letter'>?</li>
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

// let path = document.querySelector('path');
// let pathLength = path.getTotalLength();

// path.style.strokeDasharray = pathLength + ' ' + pathLength;
// path.style.strokeDasharray = pathLength;
// window.addEventListener('scroll', () => {
//   var scrollPercentage =
//     (document.documentElement.scrollTop + document.body.scrollTop) /
//     (document.documentElement.scrollHeight -
//       document.documentElement.clientHeight);
//   var drawLength = pathLength * scrollPercentage;
//   path.style.strokeDashoffset = pathLength - drawLength;
// });
