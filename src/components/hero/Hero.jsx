import { SubHeading, ContactCard } from '../../containers';
import hero_img from '../../assets/images/hero-image-dark .png'
import './hero.css';
function Hero() {
  return (
    <>
      <section id="hero">
        <SubHeading text="Hello" />
        <div className="hero-container">
          <div className="hero-text">

            <p className='intro'>I am</p>
            <h1 className='name'>
              SRI RANGA SAI
            </h1>
            <p className='role'>
              Full Stack Developer
            </p>
            <ContactCard />
            
          </div>
          
          <img className="hero-image" src={hero_img} alt="" />
          
        </div>
      </section>
    </>
  )
}

export default Hero