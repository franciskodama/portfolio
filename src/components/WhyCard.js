

import React, { useRef, useState } from 'react'
import '../components/WhyCard.css'
import EyeOpen from '../assets/images/why-eye-open.svg'
import EyeClosed from '../assets/images/why-eye-closed.svg'
import Check from '../assets/images/why-icon-check.svg'
import Close from '../assets/images/card-icon-close-white.svg'

const WhyCard = ({ titleOne, textOne, titleTwo, textTwo, titleThree, textThree, titleFour, textFour, observation, top, left }) => {
  
  const [ isCardShow, setIsCardShow ] = useState(false)


  // const [ eyesOpen, setEyesOpen ] = useState(false)
  const refButton = useRef(null)
  const refButtonLabel = useRef(null)
  const refWhy = useRef(null)

    // const onMouseEnterHandler = () => {
  //   refButton.current.classList.add('why-toggle--active')
  //   refButtonLabel.current.classList.add('why-toggle__label--active')
  // }

  // const onMouseOutHandler = () => {
  //   refButton.current.classList.remove('why-toggle--active')
  //   refButtonLabel.current.classList.remove('why-toggle__label--active')
  // }



  return (
    
    <div
      className='why-container'
      style={{ top: top, left: left }}
    >

        <button
          ref={refButton}
          className='why-toggle'
          // onMouseEnter={onMouseEnterHandler}
          // onMouseLeave={onMouseOutHandler}
          onClick={() => isCardShow ? setIsCardShow(false) : setIsCardShow(true)}
        >
          <img className='eye' src={EyeOpen} alt='icon eye' />
          {/* <img className='eye' src={eyesOpen ? EyeClosed : EyeOpen} alt='icon eye' /> */}
          <span
            className="why-toggle__label"
            ref={refButtonLabel}
            >Click me
          </span>
        </button>

        
        <ul className='why' ref={refWhy} style={{ display: isCardShow ? 'block' : 'none' }}>
          <img
            className='why__close'
            onClick={() => setIsCardShow(false)}
            src={Close}
            alt="close button icon"
          />

          <li className='why__item'>
            <h2 className='why__title why__title--flag'>{titleOne}</h2>
            <p className='why__desc'>{textOne}</p>
          </li>

          <li className='why__item'>
            <h2 className='why__title why__title--bolt'>{titleTwo}</h2>
            <p className='why__desc'>{textTwo}</p>
          </li>

          <li className='why__item'>
            <h2 className='why__title why__title--brush'>{titleThree}</h2>
            <p className='why__desc'>{textThree}</p>
          </li>

          <li className='why__item'>
            <h2 className='why__title why__title--robot'>{titleFour}</h2>
            <p className='why__desc'>{textFour}</p>
          </li>

          <li className='why__footer'>
            <img className='why__icon' src={Check} alt='icon check'/>
            <p className='why__text'>{observation}</p>
          </li>

        </ul>
    </div>
  )
}

export default WhyCard

