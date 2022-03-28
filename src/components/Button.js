import React from 'react'
import '../components/Button.css'

function Button({ text, align, onClick, bgColor, color, border, boxShadow }) {
  return <button
          className='btn'
          onClick={onClick}

          style={{
            backgroundColor: bgColor,
            color: color,
            alignSelf: align,
            border: border,
            boxShadow: boxShadow
          }}

          type='button'>
          {text}
        </button> 
}

Button.defaultProps = {
  backgroundColor: 'var(--third-color)',
  color: 'var(--bright-color)',
  border: 'var(--bright-color)',
  align: 'flex-start',
  text: 'Click'

}

// Button.propTypes = {
//   text: PropTypes.string,
//   color: PropTypes.string,
//   align: PropTypes.string,
// onClick: PropTypes.func.isRequired
// }

export default Button
