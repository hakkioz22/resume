import React from 'react'

const Skill = (props) => {
    const {name,level} = props;
  return (
    <>
        <p className="text-dark fw-500 text-start mb-2">{name} <span className="float-end">{level}%</span></p>
            <div className="progress progress-sm mb-4">
              <div 
              className="progress-bar" 
              role="progressbar" 
              style={{width: `{level}%`}}
              aria-valuenow={level} 
              aria-valuemin="0" 
              aria-valuemax="100"></div>
            </div>
    </>
  )
}

export default Skill