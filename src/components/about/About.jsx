import { SubHeading } from '../../containers';

import about_image from '../../assets/images/about-image.png'

import './about.css';

function About() {
  const about = `    Welcome to my software development portfolio! I'm Sri Ranga Sai Pagala, an aspiring software developer with a strong passion for creating innovative solutions and building user-friendly applications. As a recent graduate in Information Technology, I am eager to kick-start my career in the dynamic world of full stack web development.

  During my academic journey, I have gained a solid foundation in programming principles and concepts. I am proficient in Python, JavaScript, C++ and have hands-on experience with popular frameworks and tools like React, Node, Express. Additionally, I have a strong understanding of data structures and algorithms, which allows me to write efficient and optimized code.`
  return (
    <section id="about">
        <SubHeading text="AboutMe" />
        <div className="about-container">
          <img src={about_image} alt="about" />
          <div className="about-text">
            <p>
              {about}
            </p>
          </div>
        </div>

    </section>
  )
}

export default About