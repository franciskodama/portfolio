import React from 'react'
import '../components/Button.css'

function Button({ text, color, align, onClick }) {
  return <button onClick={onClick} className='btn' style={{ backgroundColor: color, alignSelf: align }} type='button'>{text}</button> 
}

Button.defaultProps = {
  color: 'var(--third-color)',
  align: 'flex-start'
}

// Button.propTypes = {
//   text: PropTypes.string,
//   color: PropTypes.string,
//   align: PropTypes.string,
// onClick: PropTypes.func.isRequired
// }

export default Button
