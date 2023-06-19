import './navbar.css';
import logo_dark from '../../assets/icons/moon2.svg';
import dark_text from '../../assets/images/brand-dark.png'
import { useState } from 'react';
import { MdClear, MdSegment } from 'react-icons/md';

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
  const logo = logo_dark;
  const [isHam, setHam] = useState(false);
  return (
    <header id='header'>
      <nav>
        <div className="brand-container">
          <img className='brand-img' src={logo} alt="moon" />
          <img className='brand-name' src={dark_text} alt="" />
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
      {isHam && (
          <div className='ham-navigation-container'>
            <NavElements />
            <a href="#contact">
              SAY HI!
            </a>
        </div>
        )}
    </header>
  )
}

export default Navbar