
import { SubHeading, ProjectCard } from '../../containers';
import gpt3 from '../../assets/projects/gpt3.png'
import'./projects.css'


function Projects() {
  const projects = [
    {
      heading: 'GPT3 Landing Page',
      desc: `Landing page of GPT-3, build using React.Js.
      This web page is responsive and mobile friendly.
      Used CSS3 for styling.
      Deployed to GitHub Pages  using gh-pages tool.`,
      github:'',
      live: '',
      skills: ["React", "CSS", 'GitHub'],
      img: gpt3

    },
    {
      heading: 'GPT3 Landing Page',
      desc: `Landing page of GPT-3, build using React.Js.
      This web page is responsive and mobile friendly.
      Used CSS3 for styling.
      Deployed to GitHub Pages  using gh-pages tool.`,
      github:'',
      live: '',
      skills: ["React", "CSS", 'GitHub'],
      img: gpt3

    },
    {
      heading: 'GPT3 Landing Page',
      desc: `Landing page of GPT-3, build using React.Js.
      This web page is responsive and mobile friendly.
      Used CSS3 for styling.
      Deployed to GitHub Pages  using gh-pages tool.`,
      github:'',
      live: '',
      skills: ["React", "CSS", 'GitHub'],
      img: gpt3

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
                                  />)}
      </div>

    </section>
  )
}

export default Projects;