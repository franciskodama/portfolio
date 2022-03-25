import React, { useState } from 'react'
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

  return (
    <section className='section section-contact' id='contact'>

        <div className='container'>
          <h1 className='title'>message generator</h1>
          <p className='sub-title'>Click on the chunk of text you want to use.</p>

          <form>
            <input onClick={handleClick} className='chunk bright-color' value='Hey Francis!' type='submit'/>
            <label htmlFor='Hey Francis!'></label>

            <input onClick={handleClick} className='chunk bright-color' value='I hope this message finds you well.' type='submit'/>
            <label htmlFor='I hope this message finds you well.'></label>

            <input onClick={handleClick} className='chunk bright-color' value='Cool website, man!' type='submit'/>
            <label htmlFor='Cool website, man!'></label>

            <input onClick={handleClick} className='chunk third-color' value='do you want to work in our company?' type='submit'/>
            <label htmlFor='do you want to work in our company?'></label>

            <input onClick={handleClick} className='chunk bright-color' value='ops, I found a bug.' type='submit'/>
            <label htmlFor='ops, I found a bug.'></label>

            <input onClick={handleClick} className='chunk bright-color' value='Holly cow, what a portfolio!' type='submit'/>
            <label htmlFor='Holly cow, what a portfolio!'></label>

            <input onClick={handleClick} className='chunk third-color' value={`Let's schedule an interview?`} type='submit'/>
            <label htmlFor='Lets schedule a interview?'></label>

            <input onClick={handleClick} className='chunk bright-color' value='I did not like your website.' type='submit'/>
            <label htmlFor='I did not like your website.'></label>

            <input onClick={handleClick} className='chunk bright-color' value='Cool!!!' type='submit'/>
            <label htmlFor='Cool!!!'></label>

            <input onClick={handleClick} className='chunk bright-color' value='I did not like your website, and I tell you why...' type='submit'/>
            <label htmlFor='I did not like your website, and I tell you why...'></label>

            <input onClick={handleClick} className='chunk bright-color' value='regards,' type='submit'/>
            <label htmlFor='regards,'></label>

            <input onClick={handleClick} className='chunk bright-color' value='Take care!' type='submit'/>
            <label htmlFor='Take care!'></label>

            <input onClick={handleClick} className='chunk bright-color' value='Thanks! :)' type='submit'/>
            <label htmlFor='Thanks! :)'></label>
          </form>


          <form className='form-contact'>
            <input value={message} onChange={handleChange} className='form-contact-input' type='text' />
            <Button text='send' backgroundColor='var(--third-color)' align='flex-end'/>
          </form>
        </div>

    </section>
  )
}

export default Contact

          {/* <ul className='chunk-container'>
            <li className='chunk'>I hope this message finds you well.</li>
            <li className='chunk'>Cool website, man!</li>
            <li className='chunk highlight'>do you want to work in our company?</li>
            <li className='chunk'>ops, I found a bug.</li>
            <li className='chunk'>Holly cow, what a portfolio!</li>
            <li className='chunk highlight'>Let's schedule a interview?</li>
            <li className='chunk'>Cool!!!</li>
            <li className='chunk'>I didn't like your website, and I tell you why...</li>
            <li className='chunk'>regards,</li>
            <li className='chunk'>sincerely,</li>
            <li className='chunk'>Take care!</li>
            <li className='chunk'>Thanks! :)</li>
          </ul> */}