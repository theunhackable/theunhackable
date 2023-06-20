import './contactCard.css'
import github from '../../assets/icons/github-round.svg'
import linkedin from '../../assets/icons/linkedin.svg'
import mail from '../../assets/icons/mail.svg'
import resume from '../../assets/resumes/fullstackdev-asapp.pdf'


function ContactCard() {
  return (
    <div className="contact-card-container">
      <div className="social-container">
        <div className="contact-card">
          <img src={github} alt="" />
        </div>
        <div className="contact-card">
          <img src={linkedin} alt="linkedin" />
        </div>
        <div className="contact-card">
          <img src={mail} alt="mail" />
        </div>
      </div>
      <div className="resume-contact-container">
        <div className="resume-button">
          <a rel="noreferrer" target="_blank" href={resume}>RESUME</a>
        </div>
        <div className="contact-button">
          <a href="#contact">CONTACT</a>
        </div>
      </div>
    </div>
  )
}

export default ContactCard