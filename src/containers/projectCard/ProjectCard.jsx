import preview from '../../assets/icons/preview.svg';
import github from '../../assets/icons/github.svg';
import ProjectTag from '../projectTag/ProjectTag';
import './projectCard.css';



function ProjectCard(props) {
  const skills = props.skills || [];
  return (
    <div className="project-card-container">
      <div className="project-image">
        <img src={props.img} alt={props.heading} />
      </div>
      <div className="project-description">
        <h1>{props.heading}</h1>
        <div className="project-tags">
          {skills.map(skill => <ProjectTag tag={skill} />)}
         

        </div>

        <p>
          {props.desc}
        </p>
      </div>

      <div className="project-buttons">
        <a className='project-preview' href={props.live}><img className="project-preview-img" src={preview} alt="preview" />Preview</a>
        <a className='project-github' href={props.github}><img className="project-github-img" src={github} alt="github" />GitHub</a>

      </div>
      
    </div>
  )
}

export default ProjectCard