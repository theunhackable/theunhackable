import { SubHeading, ContactCard } from '../../containers';
import hero_img from '../../assets/images/hero-image-dark.png'
import './hero.css';
function Hero() {
  return (
    <>
      <section id="hero">
        <SubHeading text="Hello" />
        <div className="hero-container">
          <div className="hero-text">

            <h3 className='intro'>My name is</h3>
            <h1 className='name'>
              SRI RANGA SAI
            </h1>
            <h3 className='role'>
              Full Stack Developer
            </h3>
            <ContactCard />
            
          </div>
          
          <img className="hero-image" src={hero_img} alt="" />
          
        </div>
      </section>
    </>
  )
}

export default Hero