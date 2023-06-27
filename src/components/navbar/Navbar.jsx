import './navbar.css';
import dark_text from '../../assets/images/brand-dark.png'
import { useState } from 'react';
import { MdClear, MdSegment } from 'react-icons/md';
import { motion, AnimatePresence } from 'framer-motion';

function Navbar() {
  const NavElements = () => {
    return (
      <ul className='navigation-elements'>
            
              <li>
                <a href="#hero">
                  HOME
                </a>
              </li>

              <li>
                <a href="#about">
                  ABOUT
                </a>
              </li>
              
              <li>
                <a href="#skills">
                  SKILLS
                </a>
              </li>
              
              <li>
                <a href="#projects">
                  PROJECTS
                </a>
              </li>
          </ul>
    )
  }
  
  const [isHam, setHam] = useState(false);
  return (
    <header id='header'>
      <nav>
        <div className="brand-container">
          <a href='#hero'><img className='brand-name' src={dark_text} alt="" /></a>
        </div>
        <div className="nav-hamburger">
          <div onClick={() => setHam(!isHam)} style={{width: "100%"}}>
            {isHam === true? (<MdClear size={40} />) : (<MdSegment size={40} />)}
          </div>
        </div>
        <div className='navigation-container'>
          <NavElements />
          <a href="#contact">
            SAY HI!
          </a>
        </div>
      </nav>
      <AnimatePresence>

      {isHam && (
            <motion.div 
            initial={{x: "100vw"}}
            animate={{x: 0}}
            exit={{x: "100vw"}}
            className='ham-navigation-container'>
              <NavElements />
              <a href="#contact">
                SAY HI!
              </a>
          </motion.div>
        )}
        </AnimatePresence>
    </header>
  )
}

export default Navbar    