import React from 'react'
import Video from '../assets/images/hero-bg.mp4'
import '../styles/Hero.css'
import '../App.css'

const Hero = () => {
    








// const grid = document.querySelector('.grid')
// const resultsDisplay = document.querySelector('.results')
// let currentShooterIndex = 202
// let width = 15
// let direction = 1
// let invadersId
// let goingRight = true
// let aliensRemoved = []
// let results = 0


// const startButton = document.getElementById('start');
// const shootButton = document.querySelector('.btn-shoot');
// const rightButton = document.querySelector('.btn-right');
// const leftButton = document.querySelector('.btn-left');


// document.addEventListener('keydown', shoot)
// startButton.addEventListener('click', startGame);
// shootButton.addEventListener('click', shoot);
// rightButton.addEventListener('click', moveShooterRight);
// leftButton.addEventListener('click', moveShooterLeft);



// for (let i = 0; i < 255; i++) {
//     const square = document.createElement('div')
//     grid.appendChild(square)
// }
// const squares = Array.from(document.querySelectorAll('.grid div'))


// const alienInvaders = [
//     0,1,2,3,4,5,6,7,8,9,
//     15,16,17,18,19,20,21,22,23,24,
//     30,31,32,33,34,35,36,37,38,39
// ]

// function draw() {  
//     for (let i = 0; i < alienInvaders.length; i++) {
//         if(!aliensRemoved.includes(i)) {
//             squares[alienInvaders[i]].classList.add('invader')
//         }
//     }
// }
// draw()

// function remove() {
//     for (let i = 0; i < alienInvaders.length; i++) {
//         squares[alienInvaders[i]].classList.remove('invader')
//     }
// }



// squares[currentShooterIndex].classList.add('shooter')

// function moveShooter(e) {
//     squares[currentShooterIndex].classList.remove('shooter')
//     switch(e.key) {
//         case 'ArrowLeft':
//             if(currentShooterIndex % width !== 0) currentShooterIndex -=1
//             break
//         case 'ArrowRight':
//             if(currentShooterIndex % width < width -1) currentShooterIndex +=1
//             break
//     }
//     squares[currentShooterIndex].classList.add('shooter')
// } 

// function moveShooterRight() {
//     squares[currentShooterIndex].classList.remove('shooter')
//     if(currentShooterIndex % width < width -1) currentShooterIndex +=1
//     squares[currentShooterIndex].classList.add('shooter')
// }

// function moveShooterLeft() {
//     squares[currentShooterIndex].classList.remove('shooter')
//     if(currentShooterIndex % width !== 0) currentShooterIndex -=1
//     squares[currentShooterIndex].classList.add('shooter')
// }




// function moveInvaders() {
//     const leftEdge = alienInvaders[0] % width === 0
//     const rightEdge = alienInvaders[alienInvaders.length - 1] % width === width -1
//     remove()

//     if (rightEdge && goingRight) {
//         for (let i = 0; i < alienInvaders.length; i++) {
//             alienInvaders[i] += width +1
//             direction = -1 
//             goingRight = false
//         }
//     }

//     if (leftEdge && !goingRight) {
//         for (let i = 0; i < alienInvaders.length; i++) {
//             alienInvaders[i] += width -1
//             direction = 1
//             goingRight = true
//         }
//     }

//     for (let i = 0; i < alienInvaders.length; i++) {
//         alienInvaders[i] += direction
//     }    
//     draw()

//     if (squares[currentShooterIndex].classList.contains('invader', 'shooter')) {
//         resultsDisplay.innerHTML = 'GAME OVER'
//         clearInterval(invadersId)
//     }

//     for  (let i = 0; i < alienInvaders.length; i++) {
//         if(alienInvaders[i] > squares.length) {
//             resultsDisplay.innerHTML = 'GAME OVER'
//             clearInterval(invadersId)
//         }
//     }
    
//     if (aliensRemoved.length === alienInvaders.length) {
//         resultsDisplay.innerHTML = 'YOU WIN'
//         clearInterval(invadersId)
//     } 
// }

 

// function shoot(e) {
//     let laserId
//     let currentLaserIndex = currentShooterIndex
//     function moveLaser() {
//         squares[currentLaserIndex].classList.remove("laser")
//         currentLaserIndex -= width
//         squares[currentLaserIndex].classList.add('laser')

//         if (squares[currentLaserIndex].classList.contains('invader')) {
//             squares[currentLaserIndex].classList.remove('laser')
//             squares[currentLaserIndex].classList.remove('invader')
//             squares[currentLaserIndex].classList.add('boom')
        
//             setTimeout(()=> squares[currentLaserIndex].classList.remove('boom'), 300)
//             clearInterval(laserId)

//            const alienRemoved = alienInvaders.indexOf(currentLaserIndex)
//            aliensRemoved.push(alienRemoved)
//            results++
//            resultsDisplay.innerHTML = results
//         } 

//     }
//     switch(e.keyCode) {  
//         case 32:  
//         laserId = setInterval(moveLaser, 100)
//     }
// }     
// invadersId = setInterval(moveInvaders, 300) 


// function startGame() {
//     draw()
// }








    return (
        <section className='section section--hero' id='hero'>
            <div className='container'>
                
                <div className='hero-info'>
                        <p>Hi, I'm Francis Kodama.</p>
                    <div className='typing-effect'>
                        <h1 className='hightlight'>Front-end developer </h1>
                    </div>
                    <h2 className='highlight-special'>html, css, js, React,</h2>
                    <h2 className='hightlight' >GIT, npm, FIGMA.</h2>
                    <p>Based in Ottawa, ON - Canada.</p>
                </div>





                <section className="score-display">
                    <div className="limit-content">
                        <h2>Score <span className="results"></span></h2>
                    </div>
                </section>

                <div className="grid-game"></div>

                <section className="button-parent">
                    <div className="button-start">
                        <button id="start">Start Restart</button>
                    </div>
                    <div className="button-move-shoot">
                        <button className="btn-left"><i className="fas fa-caret-left"></i></button>
                        <button className="btn-right"><i className="fas fa-caret-right"></i></button>
                        <button className="btn-shoot"><i className="fas fa-caret-up"></i></button>
                    </div>
                </section>

                <section>
                    <h3 id="over">game <i className="far fa-dizzy fa-sm"></i>ver</h3>
                </section>





















                <div className="filter">
                    <video autoPlay loop muted
                        style={{
                            position: 'absolute',
                            width: '100%',
                            height: '49em',
                            left: '50%',
                            top: 0,
                            objectFit: 'cover',
                            transform: 'translate(-50%, 0)',
                            zIndex: '-100'
                        }}
                    >
                        <source src={Video} type='video/mp4'/>
                    </video>
                </div>




                {/* <div className='wave-one'>
                    <svg data-name='Layer 1' xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1200 120' preserveAspectRatio='none'>
                        <path d='M0,0V46.29c47.79,22.2,103.59,32.17,158,28,70.36-5.37,136.33-33.31,206.8-37.5C438.64,32.43,512.34,53.67,583,72.05c69.27,18,138.3,24.88,209.4,13.08,36.15-6,69.85-17.84,104.45-29.34C989.49,25,1113-14.29,1200,52.47V0Z' opacity='.25' className='shape-fill'></path>
                        <path d='M0,0V15.81C13,36.92,27.64,56.86,47.69,72.05,99.41,111.27,165,111,224.58,91.58c31.15-10.15,60.09-26.07,89.67-39.8,40.92-19,84.73-46,130.83-49.67,36.26-2.85,70.9,9.42,98.6,31.56,31.77,25.39,62.32,62,103.63,73,40.44,10.79,81.35-6.69,119.13-24.28s75.16-39,116.92-43.05c59.73-5.85,113.28,22.88,168.9,38.84,30.2,8.66,59,6.17,87.09-7.5,22.43-10.89,48-26.93,60.65-49.24V0Z' opacity='.5' className='shape-fill'></path>
                        <path d='M0,0V5.63C149.93,59,314.09,71.32,475.83,42.57c43-7.64,84.23-20.12,127.61-26.46,59-8.63,112.48,12.24,165.56,35.4C827.93,77.22,886,95.24,951.2,90c86.53-7,172.46-45.71,248.8-84.81V0Z' className='shape-fill'></path>
                    </svg>
                </div>
                <div className='wave-two'>
                    <svg data-name='Layer 1' xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1200 120' preserveAspectRatio='none'>
                        <path d='M0,0V46.29c47.79,22.2,103.59,32.17,158,28,70.36-5.37,136.33-33.31,206.8-37.5C438.64,32.43,512.34,53.67,583,72.05c69.27,18,138.3,24.88,209.4,13.08,36.15-6,69.85-17.84,104.45-29.34C989.49,25,1113-14.29,1200,52.47V0Z' opacity='.25' className='shape-fill'></path>
                        <path d='M0,0V15.81C13,36.92,27.64,56.86,47.69,72.05,99.41,111.27,165,111,224.58,91.58c31.15-10.15,60.09-26.07,89.67-39.8,40.92-19,84.73-46,130.83-49.67,36.26-2.85,70.9,9.42,98.6,31.56,31.77,25.39,62.32,62,103.63,73,40.44,10.79,81.35-6.69,119.13-24.28s75.16-39,116.92-43.05c59.73-5.85,113.28,22.88,168.9,38.84,30.2,8.66,59,6.17,87.09-7.5,22.43-10.89,48-26.93,60.65-49.24V0Z' opacity='.5' className='shape-fill'></path>
                        <path d='M0,0V5.63C149.93,59,314.09,71.32,475.83,42.57c43-7.64,84.23-20.12,127.61-26.46,59-8.63,112.48,12.24,165.56,35.4C827.93,77.22,886,95.24,951.2,90c86.53-7,172.46-45.71,248.8-84.81V0Z' className='shape-fill'></path>
                    </svg>
                </div> */}

            </div>
        </section>
    )
}

export default Hero

