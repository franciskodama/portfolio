import React, { useState } from 'react'
import Button from '../components/Button'
import '../styles/Reason.css'

function Reason() {
    
    const [ myArray, setMyArray ] = useState ([])

    function handleChange(e) {
        const arrFromUser = Array.from(e.target.value)
        createGrid(arrFromUser)
    }

    // ------------------------------------------------------

    const originalMessageBright = 'this.portfolio.has.been.built.to.showcase.my.variety.of.skills.from.creativity.to.code.'
    const originalMessageDark = 'click.on.the.waves.for.an.explanation.of.each.page'
    const arrOfLettersBright = Array.from(originalMessageBright)
    const arrOfLettersDark = Array.from(originalMessageDark)

    function createGrid(arrFromUser) {
        const arrOfDiv = []
        if (myArray != arrFromUser) {
            for(let letterBright of arrOfLettersBright) {        
                arrOfDiv.push(<div className='letter-bright'>{letterBright}</div>)
            }
            for(let letterDark of arrOfLettersDark) {        
                arrOfDiv.push(<div className='letter-dark'>{letterDark}</div>)
            }
            return arrOfDiv
        } else {
            for(let letter of arrFromUser) {        
                arrOfDiv.push(<div className='letter-dark'>{letter}</div>)
            }
            return arrOfDiv
        }
    }
    
    // ------------------------------------------------------
    
    return (
        <section className='section section-reason'>
            <div className='grid'>
                {createGrid()}
            </div>

            <form>
               <input className='input-reason' onChange={handleChange} type='text' placeholder='type something here...'/>
               <Button text='reload original message' />
            </form>

        </section>      
    )
}

export default Reason







// function Reason() {
//     const originalMessageWhite = 'This.portfolio.has.been.built.to.showcase.my.variety.of.skills.from.creativity.to.design.to.code.'
//     const originalMessageRed = 'Mouseover.on.the.waves.for.an.explanation.of.each.item'
//     const arrOfLettersWhite = Array.from(originalMessageWhite)
//     const arrOfLettersRed = Array.from(originalMessageRed)

//     const createGridWhite = () => {
//         const arrOfDiv = []
//         for(let letter of arrOfLettersWhite) {        
//             arrOfDiv.push(<div className='letter'>{letter}</div>)
//         }
//         return arrOfDiv
//     }

//     const createGridRed = () => {
//         const arrOfDiv = []
//         for(let letter of arrOfLettersRed) {        
//             arrOfDiv.push(<div className='letter-red'>{letter}</div>)
//         }
//         return arrOfDiv
//     }   
 
//     return (
//         <div className='section section-reason'>
//             <div className='grid'>
//                 {createGridWhite()}
//                 {createGridRed()}
//             </div>

//             <form action=''>
//                <input type='text' placeholder='type something here...'/>
//                <button className='btn-cta'type='submit'>reload original message</button>
//             </form>

//         </div>      
//     )
// }

// export default Reason






