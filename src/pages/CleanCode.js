import React, { useEffect, useRef, useState } from 'react'
import gsap from "gsap";
import '../styles/CleanCode.css'
import background from '../assets/images/xray.jpg'
import Circle from '../assets/images/mask-circle.png'

const CleanCode = () => {

  // const [ showBackground, setShowBackground ] = useState({show: false})

  // const handleClick = () => {
  //   setShowBackground(showBackground.show ? {show: false} : {show: true})
  //   if(showBackground.show) {
  //     document.getElementById('code__xray').style.display = 'block'
  //   } else {
  //     document.getElementById('code__xray').style.display = 'none'
  //   }
  // }


  // console.clear();
  // let container = document.querySelector(".container");
  // let mask = document.querySelector(".mask");
  // let maskContent = document.querySelector(".mask-content");
  
  // window.addEventListener("load", init);
  
  // function init() {
    
  //   gsap.set(maskContent, {
  //     width: container.offsetWidth,
  //     height: container.offsetHeight
  //   });
    
  //   container.addEventListener("mousemove", onMove);
  // }
  
  // function onMove(e) {
    
  //   let x = e.pageX - 100;
  //   let y = e.pageY - 100;
  
  //   gsap.set(mask, {
  //     x: x,
  //     y: y
  //   });
  
  //   gsap.set(maskContent, {
  //     x: -x,
  //     y: -y
  //   });
  // }

  const [ position, setPosition ] = useState({x: 0, y: 0 })
  // const [ display, setDisplay ] = useState(false)

  const refArea = useRef()
  const refCircle = useRef()
  const maskStyle = {
    '--maskX': `${position.x}%`,
    '--maskY': `${position.y}%`
  }

  const onMouseMove = (e) => {
    const width = refArea.current.clientWidth
    const height = refArea.current.clientHeight
    const oX = (e.nativeEvent.offsetX/width) * 100
    const oY = (e.nativeEvent.offsetY/height) * 100
    setPosition({ x: oX, y: oY })
    // setDisplay(true) 
    console.log(`X = ${Math.floor(oX)}`, `Y = ${Math.floor(oY)}`);
  }

  const onMouseOut = (e) => {
    setPosition({ x: 0, y: 0 })
    // setDisplay(false)
    // displayCircle()
  }

  // const displayCircle = () => {
  //   refCircle.style.display = "none"
  // }


  return (
    <section className="section section--code" id='code'>
      <div className="container">
     
        <div className="mousearea" ref={refArea}
          onMouseMove={onMouseMove}     
          onMouseOut={onMouseOut}     
        
        >
          <img className='circle' ref={refCircle} src={Circle} style={maskStyle} alt="" />


        </div>











{/* 

  <div class="text-content">
    <h1>Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua.</h1>
  </div>
  
  <div class="mask-container">
    <div class="mask">
      <div class="mask-content">
        <h1>Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua.</h1>
      </div>
    </div>    
  </div> */}





      {/* <div className="code" onClick={handleClick}> */}
        {/* <div
            id="code__xray"   
            style={{
              backgroundImage: `url(${background})`,
              backgroundRepeat: 'no-repeat',
              backgroundSize: 'cover',
            }}>
        </div> */}

        {/* <div className="code__quote-wrapper">
          <blockquote className="code--quote">“Clean code always looks like it was written by <br></br><span className='red' >someone who cares.”</span></blockquote>
          <h4 className="code--robert">― Robert C. Martin</h4>
          <h4 className="code--author">Author of Clean Code</h4>
        </div>

        <div className="code--words">meticulousness</div>
        <div className="code--words">easy to read, easey to change</div>
        <div className="code--words">keep it simple</div>
        <div className="code--words">don't repeat your self</div>
        <div className="code--words">naming conventions</div>
        <div className="code--words">clear and concise</div>
        <div className="code--words">consistent</div>
        <div className="code--words">uncomplicate</div>
        <div className="code--words">BEM (Block-Element-Modifier)</div> */}
      
      
      </div>
      
      {/* </div> */}
    </section>

  )
}

export default CleanCode