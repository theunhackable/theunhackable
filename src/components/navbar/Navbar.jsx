import './navbar.css';
import logo_light from '../../assets/images/brand-light.png';
import logo_dark from '../../assets/icons/moon2.svg';
import dark_text from '../../assets/images/brand-dark.png'

function Navbar() {
  
  const logo = logo_dark;
  return (
    <header id='header'>
      <nav>
        <div className="brand-container">
          <img className='brand-img' src={logo} alt="moon" />
          <img className='brand-name' src={dark_text} alt="" />
        </div>
        <div className='navigation-container'>
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

          <a href="#contact">
            SAY HI!
          </a>
        
        </div>
      </nav>
    </header>
  )
}

export default Navbar