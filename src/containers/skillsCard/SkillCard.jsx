import React from './skillCard.css'
function SkillCard(props) {
  return (
    <div className="skill-card-container" style={{backgroundColor: props.bg}}>
      <img src={props.image} alt={props.hi} />
      <p>
        {props.skill}
      </p>
    </div>  
)
}

export default SkillCard;