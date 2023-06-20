import { motion } from 'framer-motion';
import React from './skillCard.css'
function SkillCard(props) {
  return (
    <motion.div
    whileHover={{scale:1.05}}
    className="skill-card-container" style={{backgroundColor: props.bg}}>
      <img src={props.image} alt={props.skill} />
      <p>
        {props.skill}
      </p>
    </motion.div>  
)
}

export default SkillCard;