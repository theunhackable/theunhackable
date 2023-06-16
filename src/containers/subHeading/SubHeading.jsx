import './subHeading.css'

function SubHeading(props) {
  return (
    <div className='sub-heading-container'>
      <h2 className="sub-heading">{props.text}</h2>
      <div className="gradient-bar"></div>
    </div>
  )
}

export default SubHeading