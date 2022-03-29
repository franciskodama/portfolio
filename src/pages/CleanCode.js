import React, { useState } from 'react'
import '../styles/CleanCode.css'
import background from '../assets/images/xray.jpg'

const CleanCode = () => {

  const [ showBackground, setShowBackground ] = useState({show: false})

  const handleClick = () => {
    setShowBackground(showBackground.show ? {show: false} : {show: true})
    if(showBackground.show) {
      document.getElementById('xray-image').style.display = 'block'
    } else {
      document.getElementById('xray-image').style.display = 'none'
    }
  }

  return (
    <section className="section section-code" id='code'>
        <div className="container">
        
        <div onClick={handleClick} className="clickable-area">
          <div
              id="xray-image"   
              style={{
                backgroundImage: `url(${background})`,
                backgroundRepeat: 'no-repeat',
                // backgroundPosition: 'center',
                backgroundSize: 'cover',
              }}>
          </div>

          <div className="quote--wrapper">
            <blockquote className="code--quote">“Clean code always looks like it was written by <br></br><span className='red' >someone who cares.”</span></blockquote>
            <h4 className="code--robert">― Robert C. Martin</h4>
            <h4 className="code--author">Author of Clean Code</h4>
          </div>

          <div className="flying--words">meticulousness</div>
          <div className="flying--words">easy to read, easey to change</div>
          <div className="flying--words">keep it simple</div>
          <div className="flying--words">don't repeat your self</div>
          <div className="flying--words">naming conventions</div>
          <div className="flying--words">clear and concise</div>
          <div className="flying--words">consistent</div>
          <div className="flying--words">uncomplicate</div>
          <div className="flying--words">BEM (Block-Element-Modifier)</div>
       
        
        </div>
        
        </div>
    </section>

  )
}

export default CleanCode