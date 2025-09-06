import React, { useState } from 'react'
import SubjectList from './subjectList'
import Questions from './questions.json';
import QuestionList from './QuestionList';

const QuestionBack = () => {

  const [currentSubject, setCurrentSubject] = useState(Questions[0].questions)
  console.log(currentSubject);
  
  return (
    <div className="container-fluid achiv-bg">
      <div className="container achiv-content">
        <SubjectList info={Questions} setSubject={setCurrentSubject}/>
        <QuestionList info={currentSubject} />
      </div>
    </div>
  )
}

export default QuestionBack
