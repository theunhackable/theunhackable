import './contactCard.css'
import github from '../../assets/icons/github-round.svg'
import linkedin from '../../assets/icons/linkedin.svg'
import mail from '../../assets/icons/mail.svg'
import resume from '../../assets/resumes/fullstackdev-asapp.pdf'
import { motion } from 'framer-motion'


function ContactCard() {
  return (
    <div className="contact-card-container">
      <div className="social-container">
        <a target='_blank' href='https://github.com/theunhackable' rel="noreferrer">
          <motion.div
          whileHover={{scale: 1.05}}
          className="contact-card">
            <img src={github} alt="" />
          </motion.div>
        </a>
        <a target='_blank' href='https://www.linkedin.com/in/srsp1116' rel="noreferrer">
          <motion.div
            whileHover={{scale: 1.05}}
            className="contact-card">
            <img src={linkedin} alt="linkedin" />
          </motion.div>
        </a>
        <a target='_blank' href='mailto:srirangasaipagala@gmail.com' rel="noreferrer">
        <motion.div 
         whileHover={{scale: 1.05}}
        className="contact-card">
          <img src={mail} alt="mail" />
        </motion.div>
        </a>
      </div>
      <div className="resume-contact-container">
        <motion.div
         whileHover={{scale: 1.1}}
        
        className="resume-button">
          <a rel="noreferrer" target="_blank" href={resume}>RESUME</a>
        </motion.div>
        <motion.div
         whileHover={{scale: 1.1}}
        
        className="contact-button">
          <a href="#contact">CONTACT</a>
        </motion.div>
      </div>
    </div>
  )
}

export default ContactCard