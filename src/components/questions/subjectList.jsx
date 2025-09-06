import React from 'react'
import SubjectCard from './SubjectCard';

const subjectList = (props) => {
    return (
        <div className='subj-wraper'>

            {props.info.map(cards =>
                <SubjectCard key={cards.id} id={cards.id} name={cards.name} setSubject={props.setSubject} desc={cards.description}></SubjectCard>)}
        </div>
    )
}

export default subjectList
