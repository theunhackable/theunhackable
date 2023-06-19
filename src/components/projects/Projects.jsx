
import { SubHeading, ProjectCard } from '../../containers';
import gpt3 from '../../assets/projects/gpt3.png';
import cryptor from '../../assets/projects/cryptor.png';
import'./projects.css'


function Projects() {
  const projects = [
    {
      heading: 'GPT3 Landing Page',
      desc: `Landing page of GPT-3, build using React.Js.
      This web page is responsive and mobile friendly.
      Used CSS3 for styling.
      Deployed to GitHub Pages  using gh-pages tool.`,
      github:'https://github.com/theunhackable/gpt3-landing-page',
      live: 'https://theunhackable.github.io/gpt3-landing-page/',
      skills: ["React", "CSS", 'GitHub'],
      img: gpt3

    },
    {
      heading: 'Cryptor',
      desc: `Cryptor is a web application deployed on pythonanywhere.This website is used to encrypt and decrypt text files.
      It takes text file as input, encrypted or decrypted according to the user requirement and produce output as a text file.
      Used HTML and CSS for front-end, Flask(Python3) for back-end.
      Used JavaScript for input validation.`,
      github:'https://github.com/theunhackable/cryptor',
      live: 'http://cryptor.pythonanywhere.com/',
      skills: ["HTML", "CSS", 'JavaScript', 'Python'],
      img: cryptor

    }
   
  ]
  return (
    <section id="projects">
      <SubHeading text="Projects"/>
      <div className="projects-container">  
        {projects.map(project => <ProjectCard key={project.heading}
                                        img={project.img} 
                                        heading={project.heading} 
                                        desc={project.desc} 
                                        live={project.live}
                                        github={project.github}
                                        skills={project.skills}
                                  />)}
      </div>

    </section>
  )
}

export default Projects;