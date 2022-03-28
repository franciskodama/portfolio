import React, { useState } from 'react'
import Button from '../components/Button'
import WhyCard from '../components/WhyCard'
import '../styles/Reason.css'

function Reason() {
    
    const originalMessageBright = 'this portfolio has been built to showcase my variety of skills from creativity to code '
    const originalMessageDark = 'click on the waves for an explanation of each page'
    const arrOfLettersBright = Array.from(originalMessageBright)
    const arrOfLettersDark = Array.from(originalMessageDark)

    let arrOfDiv = []
    let arrOfDivUser = []

    function createGrid() {
        for(let i = 0; i < arrOfLettersBright.length; i++) {        
            arrOfDiv.push(<div key={i} className='letter-bright'>{arrOfLettersBright[i]}</div>)
        }
        for(let i = 0; i < arrOfLettersDark.length; i++) {        
            arrOfDiv.push(<div key={i+100} className='letter-dark'>{arrOfLettersDark[i]}</div>)
        }
        return arrOfDiv
    }

    const [ currentArray, setCurrentArray ] = useState ([])

    function handleChange(e) {
        const letter = e.target.value
        const divArray = []
        divArray.push(<div className='letter-bright'>{letter}</div>)
        setCurrentArray(currentArray => [...currentArray, divArray])

        console.log(currentArray)   
        return currentArray
    }

   
    // ------------------------------------------------------
    
    return (
        <section className='section section-reason'>
            <div className='grid'>
                {createGrid()}
            </div>

            <div>{currentArray}</div>

            <form>
               <input
                className='input-reason'
                onChange={handleChange}
                type='text'
                placeholder='type something here...'/>

               <Button text='reload original message' backgroundColor='var(--third-color)'/>

                <WhyCard />

            </form>

        </section>      
    )
}

export default Reason


