import React, { useState, useEffect } from 'react'
import SubjectList from './subjectList'
import Questions from './questions.json';
import QuestionList from './QuestionList';
import scrollToElement from '../../scripts/scrollHandler';

const QuestionBack = () => {

  const [currentSubject, setCurrentSubject] = useState([])



  const handleSubjectClick = (id) => {
 
    const subject = Questions.find(q => q.id === id)
    if (subject) {
      setCurrentSubject(subject.questions)
      scrollToElement('questions-block');
    }
  
  };

  return (
    <div className="container-fluid achiv-bg">
      <div className="container achiv-content">
        
        <SubjectList info={Questions} setSubject={handleSubjectClick}/>
        <QuestionList info={currentSubject} />
      </div>
    </div>
  )
}

export default QuestionBack
