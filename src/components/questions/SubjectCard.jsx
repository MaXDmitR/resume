import React from 'react'

const SubjectCard = (props) => {
  return (
    
      <button onClick={() => props.setSubject(props.id)}  className='subj-card'>
        <h3>{props.name}</h3>
        <p>{props.desc}</p>
      </button>
    
  )
}

export default SubjectCard
