import preview from '../../assets/icons/preview.svg';
import github from '../../assets/icons/github.svg';
import ProjectTag from '../projectTag/ProjectTag';
import './projectCard.css';
import { motion } from 'framer-motion';



function ProjectCard(props) {
  const skills = props.skills || [];
  return (
    <motion.div
     whileHover={{scale: 1.02}}
     className="project-card-container">
      <div className="project-image">
        <img src={props.img} alt={props.heading} />
      </div>
      <div className="project-description">
        <h1>{props.heading}</h1>
        <div className="project-tags">
          {skills.map((skill, ind) => <ProjectTag key={ind} tag={skill} />)}
         

        </div>

        <p>
          {props.desc}
        </p>
      </div>

      <div className="project-buttons">
        <a rel='noreferrer' target="_blank" className='project-preview' href={props.live}><img className="project-preview-img" src={preview} alt="preview" />Preview</a>
        <a rel='noreferrer' target="_blank" className='project-github' href={props.github}><img className="project-github-img" src={github} alt="github" />GitHub</a>

      </div>
      
    </motion.div >
  )
}

export default ProjectCard