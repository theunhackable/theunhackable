
import { SubHeading, ProjectCard } from '../../containers';
import gpt3 from '../../assets/projects/gpt3.png';
import cryptor from '../../assets/projects/cryptor.png';
import promptopia from '../../assets/projects/promptopia.png'

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
      desc: `This website is used to encrypt and decrypt text files.`,
      github:'https://github.com/theunhackable/cryptor',
      live: 'http://cryptor.pythonanywhere.com/',
      skills: ["HTML", "CSS", 'JavaScript', 'Python'],
      img: cryptor

    },
    {
      heading: 'Promptopia',
      desc: `Promptopia is a full stack nextjs project that is useful to create edit and use AI prompts. Sign In with your google account and get started....`,
      github:'https://github.com/theunhackable/promptopia',
      live: 'https://promptopia-two-dun.vercel.app/',
      skills: ["HTML", "CSS", 'JavaScript', 'Python'],
      img: promptopia

    },
   
  ]
  return (
    <section id="projects">
      <SubHeading text="Projects"/>
      <div className="projects-container">  
        {projects.map((project, ind) => <ProjectCard key={ind}
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