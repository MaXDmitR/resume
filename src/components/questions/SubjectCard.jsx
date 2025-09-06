import React from 'react'

const SubjectCard = (props) => {
  return (
    
      <button className='subj-card'>
        <h3>{props.name}</h3>
        <p>{props.id}</p>
      </button>
    
  )
}

export default SubjectCard
