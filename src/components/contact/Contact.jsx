import { SubHeading } from '../../containers';

import submit from '../../assets/icons/send.svg'

import './contact.css';


function Contact() {
  return (
    <section id="contact">
      <SubHeading text="Contact" />
      <div className="contact-container">
        <form  className="form-container" action="">
          <div className="contact-basic">
            <label htmlFor="fullName">Name:</label>
            <input id="fullName" type="text" placeholder='Your Name Please ...'/>
            <label htmlFor="email">Email:</label>
            <input id="email" type="email" placeholder='Your Email ID Please ...'/>
            <button className='contact-submit' >Submit <img src={submit} alt="submil" /></button>
          </div>
          <div className="contact-desc">
            <label htmlFor="message">Your Message:</label>  
            <textarea id="message" placeholder='Your Message here ...'></textarea>
          </div>
        </form>
      </div>
    </section>
  )
}

export default Contact