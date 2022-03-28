import React, { useState } from 'react'
import Button from '../components/Button'
import WhyCard from '../components/WhyCard'
import '../styles/Reason.css'

const Reason = () => {
    
    const originalMessageBright = 'this portfolio has been built to showcase my variety of skills from creativity to code '
    const originalMessageDark = 'click on the waves for an explanation of each page'
    const arrOfLettersBright = Array.from(originalMessageBright)
    const arrOfLettersDark = Array.from(originalMessageDark)

    let arrOfDiv = []
    let arrOfDivUser = []

    const createGrid = () => {
        for(let i = 0; i < arrOfLettersBright.length; i++) {        
            arrOfDiv.push(<div key={i} className='letter-bright'>{arrOfLettersBright[i]}</div>)
        }
        for(let i = 0; i < arrOfLettersDark.length; i++) {        
            arrOfDiv.push(<div key={i+100} className='letter-dark'>{arrOfLettersDark[i]}</div>)
        }
        return arrOfDiv
    }

    const [ currentArray, setCurrentArray ] = useState ([])

    const handleChange = event => {
        const letter = event.target.value
        const divArray = []
        divArray.push(<div className='letter-bright'>{letter}</div>)
        setCurrentArray(currentArray => [...currentArray, divArray])

        console.log(currentArray)   
        return currentArray
    }
    
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

               <Button
                text='reload original message'
                bgColor='var(--third-color)'
                color='var(--bright-color)'
               />

                <WhyCard />

            </form>

        </section>      
    )
}

export default Reason


