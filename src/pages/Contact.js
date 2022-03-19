import React from 'react'
import Button from '../components/Button'
import '../styles/Contact.css'

function Contact() {
  return (
    <section className='section section-contact' id='contact'>

        <div className='container'>
          <h1 className='title'>message generator</h1>
          <p>Choose a chunk of text and drag to the message box.</p>
          <ul className='chunk-container'>
            <li className='chunk'>I hope this message finds you well.</li>
            <li className='chunk'>Cool website, man!</li>
            <li className='chunk highlight'>do you want to work in our company?</li>
            <li className='chunk'>ops, I found a bug.</li>
            <li className='chunk'>Holly cow, what a portfolio!</li>
            <li className='chunk highlight'>Let's schedule a interview?</li>
            <li className='chunk'>Cool!!!</li>
            <li className='chunk'>I didn't like your website. </li>
            <li className='chunk'>regards,</li>
            <li className='chunk'>sincerely,</li>
            <li className='chunk'>Take care!</li>
            <li className='chunk'>Thanks! :)</li>
          </ul>
          <form className='form-contact' action=''>
            <input className='form-contact-input' type='text' />
            <Button text='send' align='flex-end'/>
          </form>
        </div>

    </section>
  )
}

export default Contact
