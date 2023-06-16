import './projectTag.css';

import html from '../../assets/icons/html-5.svg';
import css from '../../assets/icons/css.svg';
import sass from '../../assets/icons/sass.svg';
import js from '../../assets/icons/js.svg';
import mongo from '../../assets/icons/mongo.svg';
import express from '../../assets/icons/express.svg';
import react from '../../assets/icons/react.svg';
import node from '../../assets/icons/nodejs.svg';
import python from '../../assets/icons/python.svg';
import git from '../../assets/icons/git.svg';
import github from '../../assets/icons/github.svg';
import linux from '../../assets/icons/linux.svg';

function ProjectTag(props) {
    const cards = [
        {
          skill: "HTML",
          img: html,
          bg: '#FF8A00'
        },
        {
          skill: "CSS",
          img: css,
          bg: '#007BED'
        },
        {
          skill: "SASS",
          img: sass,
          bg: '#6900A9'
        },
        {
          skill: "JavaScript",
          img: js,
          bg: '#E4B200'
    
        },
        {
          skill: "Mongo DB",
          img: mongo,
          bg: '#225C28'
        },
        {
          skill: "Express",
          img: express,
          bg: '#23242D'
        },
        {
          skill: "React",
          img: react,
          bg: '#2A2B31'
        },
        {
          skill: "Node",
          img: node,
          bg: '#189825'
        },
        {
          skill: "Python",
          img: python,
          bg: '#1F3C99'
        },
        {
          skill: "Git",
          img: git,
          bg: '#D03924'
        },
        {
          skill: "GitHub",
          img: github,
          bg: '#2C312A'
        },
        {
          skill: "Linux",
          img: linux,
          bg: '#525D6D'
        }
    
    
    ]
    const filter = cards.filter(card => card.skill === props.tag);
    const tag = filter[0] || {
        skill: "HTML",
        img: html,
        bg: '#FF8A00'
      };
    console.log('tag', tag)
  return (
   
          <div style={{backgroundColor: tag.bg}}className='project-tag'>
            <img src={tag.img} alt={tag.skill} />
            <p>{props.tag}</p>
          </div>
  )
}

export default ProjectTag