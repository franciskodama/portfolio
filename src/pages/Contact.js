import React, { useState } from 'react'
import { DragDropContext, Droppable, Draggable } from 'react-beautiful-dnd'
import Button from '../components/Button'
import '../styles/Contact.css'

function Contact() {

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
            <p className='sub-title-tray sub-title-tray-first'>drag and dro p into the red box:</p>
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
            <p className='sub-title-tray'>Your message:</p>
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


            <button className='btn-bright'
              onClick={handleClickClearMessage}
              text='clear message'
              backgroundColor='var(--bright-color)'
              textColor='var(--dark-color)'a
              align='flex-start'
              >clear</button>


           {/* <Button
              onClick={handleClickClearMessage}
              text='clear message'
              backgroundColor='var(--bright-color)'
              textColor='var(--dark-color)'
              align='flex-start'
            /> */}

            <Button
              text='send'
              backgroundColor='var(--third-color)'
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