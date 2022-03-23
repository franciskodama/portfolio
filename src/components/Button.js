import React from 'react'
import '../components/Button.css'

function Button({ text, backgroundColor, textColor, align, onClick }) {
  return <button onClick={onClick} className='btn' style={{ backgroundColor: backgroundColor, color: textColor, alignSelf: align }} type='button'>{text}</button> 
}

Button.defaultProps = {
  color: 'var(--third-color)',
  align: 'flex-start',
  textColor: 'var(--bright-color)'
}

// Button.propTypes = {
//   text: PropTypes.string,
//   color: PropTypes.string,
//   align: PropTypes.string,
// onClick: PropTypes.func.isRequired
// }

export default Button
