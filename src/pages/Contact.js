import React, { useState } from 'react'
import { DragDropContext, Droppable, Draggable } from 'react-beautiful-dnd'
import Button from '../components/Button'
import '../styles/Contact.css'

const Contact = () => {

  const messages = [
    {
      id: '1',
      text: 'Hey Francis!'
    },
    {
      id: '2',
      text: 'I hope this message finds you well.'
    },
    {
      id: '3',
      text: 'Cool website, man!'
    },
    {
      id: '4',
      text: 'Do you want to work in our company?'
    },
    {
      id: '5',
      text: 'ops, I found a bug.'
    },
    {
      id: '6',
      text: 'Holly cow, what a portfolio!'
    },
    {
      id: '7',
      text: `Let's schedule an interview?`
    },
    {
      id: '8',
      text: 'I did not like your website.'
    },
    {
      id: '9',
      text: 'Cool!!!'
    },
    {
      id: '10',
      text: 'I did not like your website, and I will tell you why...'
    },
    {
      id: '11',
      text: 'Regards,'
    },
    {
      id: '12',
      text: 'Take care!'
    },
    {
      id: '13',
      text: 'Thanks,'
    },
    {
      id: '14',
      text: ''
    },
    {
      id: '15',
      text: ''
    },
  ]


  const [ message, setMessage ] = useState('')

  const handleClick = (event) => {
    event.preventDefault()
    setMessage(previousMessage => previousMessage + event.target.value)
  }

  const handleChange = (event) => {
    setMessage(previousMessage => previousMessage + event.target.value)
    console.log(message)
  }

  const handleClickClearMessage = () => {
    setMessage('')
  }

  return (
    <section className='section section-contact' id='contact'>

        <div className='container'>
          <h1 className='title'>hello generator</h1>
          <p className='sub-title'>Let me help you drop me a line! ;)</p>

          <DragDropContext>  
            <form>
            <p className='sub-title-tray sub-title-tray-first'>drag from here:</p>
              <input onClick={handleClick} className='phrase phrase--active' value='Hey Francis!' type='submit'/>
              <label htmlFor='Hey Francis!'></label>

              <input onClick={handleClick} className='phrase' value='I hope this message finds you well.' type='submit'/>
              <label htmlFor='I hope this message finds you well.'></label>

              <input onClick={handleClick} className='phrase' value='Cool website, man!' type='submit'/>
              <label htmlFor='Cool website, man!'></label>

              <input onClick={handleClick} className='phrase' value='do you want to work in our company?' type='submit'/>
              <label htmlFor='do you want to work in our company?'></label>

              <input onClick={handleClick} className='phrase' value='ops, I found a bug.' type='submit'/>
              <label htmlFor='ops, I found a bug.'></label>

              <input onClick={handleClick} className='phrase' value='Holly cow, what a portfolio!' type='submit'/>
              <label htmlFor='Holly cow, what a portfolio!'></label>

              <input onClick={handleClick} className='phrase' value={`Let's schedule an interview?`} type='submit'/>
              <label htmlFor='Lets schedule a interview?'></label>

              <input onClick={handleClick} className='phrase' value='I did not like your website.' type='submit'/>
              <label htmlFor='I did not like your website.'></label>

              <input onClick={handleClick} className='phrase' value='Cool!!!' type='submit'/>
              <label htmlFor='Cool!!!'></label>

              <input onClick={handleClick} className='phrase' value='I did not like your website, and I tell you why...' type='submit'/>
              <label htmlFor='I did not like your website, and I tell you why...'></label>

              <input onClick={handleClick} className='phrase' value='Regards,' type='submit'/>
              <label htmlFor='Regards,'></label>

              <input onClick={handleClick} className='phrase' value='Take care!' type='submit'/>
              <label htmlFor='Take care!'></label>

              <input onClick={handleClick} className='phrase' value='Thanks! :)' type='submit'/>
              <label htmlFor='Thanks! :)'></label>
            </form>
          </DragDropContext>
          <div className="tray-container">
            <p className='sub-title-tray'>drop here:</p>
            <div className="tray">

            </div>
          </div>
         

          <form className='form-contact'>
          <p className='sub-title-tray'>Additional comments:</p>
            <textarea
              value={message}
              onChange={handleChange}
              className='form-contact-input'
              type='text'
              size='10'
            ></textarea>

            <div className="contact-buttons">

            <Button
              onClick={handleClickClearMessage}
              text='clear'
              bgColor='var(--dark-color)'
              color='var(--bright-color)'
              align='flex-start'
              border='1px solid var(--bright-color)'
            />

            <Button
              text='send'
              bgColor='var(--third-color)'
              color='var(--brigth-color'
              align='flex-end'
            />
            
            </div>
          </form>
        </div>

    </section>
  )
}

export default Contact

          {/* <ul className='phrase-container'>
            <li className='phrase'>I hope this message finds you well.</li>
            <li className='phrase'>Cool website, man!</li>
            <li className='phrase highlight'>do you want to work in our company?</li>
            <li className='phrase'>ops, I found a bug.</li>
            <li className='phrase'>Holly cow, what a portfolio!</li>
            <li className='phrase highlight'>Let's schedule a interview?</li>
            <li className='phrase'>Cool!!!</li>
            <li className='phrase'>I didn't like your website, and I tell you why...</li>
            <li className='phrase'>regards,</li>
            <li className='phrase'>sincerely,</li>
            <li className='phrase'>Take care!</li>
            <li className='phrase'>Thanks! :)</li>
          </ul> */}




//           import React, { useState } from 'react'
// import { DragDropContext, Droppable, Draggable } from 'react-beautiful-dnd'
// import Button from '../components/Button'
// import '../styles/Contact.css'

// const Contact = () => {

//   const [ message, setMessage ] = useState('')

//   const handleClick = (event) => {
//     event.preventDefault()
//     setMessage(previousMessage => previousMessage + event.target.value)
//   }

//   const handleChange = (event) => {
//     setMessage(previousMessage => previousMessage + event.target.value)
//     console.log(message)
//   }

//   const handleClickClearMessage = () => {
//     setMessage('')
//   }

//   return (
//     <section className='section section-contact' id='contact'>

//         <div className='container'>
//           <h1 className='title'>hello generator</h1>
//           <p className='sub-title'>Let me help you drop me a line! ;)</p>

//           <DragDropContext>  
//             <form>
//             <p className='sub-title-tray sub-title-tray-first'>drag from here:</p>
//               <input onClick={handleClick} className='phrase phrase--active' value='Hey Francis!' type='submit'/>
//               <label htmlFor='Hey Francis!'></label>

//               <input onClick={handleClick} className='phrase' value='I hope this message finds you well.' type='submit'/>
//               <label htmlFor='I hope this message finds you well.'></label>

//               <input onClick={handleClick} className='phrase' value='Cool website, man!' type='submit'/>
//               <label htmlFor='Cool website, man!'></label>

//               <input onClick={handleClick} className='phrase' value='do you want to work in our company?' type='submit'/>
//               <label htmlFor='do you want to work in our company?'></label>

//               <input onClick={handleClick} className='phrase' value='ops, I found a bug.' type='submit'/>
//               <label htmlFor='ops, I found a bug.'></label>

//               <input onClick={handleClick} className='phrase' value='Holly cow, what a portfolio!' type='submit'/>
//               <label htmlFor='Holly cow, what a portfolio!'></label>

//               <input onClick={handleClick} className='phrase' value={`Let's schedule an interview?`} type='submit'/>
//               <label htmlFor='Lets schedule a interview?'></label>

//               <input onClick={handleClick} className='phrase' value='I did not like your website.' type='submit'/>
//               <label htmlFor='I did not like your website.'></label>

//               <input onClick={handleClick} className='phrase' value='Cool!!!' type='submit'/>
//               <label htmlFor='Cool!!!'></label>

//               <input onClick={handleClick} className='phrase' value='I did not like your website, and I tell you why...' type='submit'/>
//               <label htmlFor='I did not like your website, and I tell you why...'></label>

//               <input onClick={handleClick} className='phrase' value='Regards,' type='submit'/>
//               <label htmlFor='Regards,'></label>

//               <input onClick={handleClick} className='phrase' value='Take care!' type='submit'/>
//               <label htmlFor='Take care!'></label>

//               <input onClick={handleClick} className='phrase' value='Thanks! :)' type='submit'/>
//               <label htmlFor='Thanks! :)'></label>
//             </form>
//           </DragDropContext>
//           <div className="tray-container">
//             <p className='sub-title-tray'>drop here:</p>
//             <div className="tray">

//             </div>
//           </div>
         

//           <form className='form-contact'>
//           <p className='sub-title-tray'>Additional comments:</p>
//             <textarea
//               value={message}
//               onChange={handleChange}
//               className='form-contact-input'
//               type='text'
//               size='10'
//             ></textarea>

//             <div className="contact-buttons">

//             <Button
//               onClick={handleClickClearMessage}
//               text='clear'
//               bgColor='var(--dark-color)'
//               color='var(--bright-color)'
//               align='flex-start'
//               border='1px solid var(--bright-color)'
//             />

//             <Button
//               text='send'
//               bgColor='var(--third-color)'
//               color='var(--brigth-color'
//               align='flex-end'
//             />
            
//             </div>
//           </form>
//         </div>

//     </section>
//   )
// }

// export default Contact