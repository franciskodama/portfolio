import React from 'react'
import '../components/Button.css'

const Button = ({ text, align, onClick, className }) => {
  
  return <button
          className={ className }
          onClick={ onClick }
          style={{ alignSelf: align }}
          type='button'>
          {text}
        </button> 
}

Button.defaultProps = {
  align: 'flex-start',
  text: 'Click',
  className: 'btn btn--third-color'
}

// Button.propTypes = {
//   text: PropTypes.string,
//   color: PropTypes.string,
//   align: PropTypes.string,
// onClick: PropTypes.func.isRequired
// }

export default Button



// const Button = ({ text, align, onClick, bgColor, color, border, boxShadow }) => {
  
//   return <button
//           className='btn'
//           onClick={onClick}

//           style={{
//             backgroundColor: bgColor,
//             color: color,
//             alignSelf: align,
//             border: border,
//             boxShadow: boxShadow
//           }}

//           type='button'>
//           {text}
//         </button> 
// }
