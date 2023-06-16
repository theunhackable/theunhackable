 
import { SubHeading, SkillCard } from '../../containers';

import './skills.css'

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


function Skills() {
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
      bg: '#1F3C5F'
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
  
  return (
    <section id="skills">
        <SubHeading text="Skills" />
        <div className="skills-container">
          {cards.map(card => <SkillCard key={card.skill} image={card.img} skill={card.skill} bg={card.bg}/>)}
        </div>

    </section>
  )
}

export default Skills