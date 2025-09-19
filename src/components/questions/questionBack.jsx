import React, { useState,} from 'react'
import SubjectList from './subjectList'
import Questions from './questions.json';
import scrollToElement from '../../scripts/scrollHandler';
import QuestionList from './QuestionList';
import InputFillter from './inputFillter';

const QuestionBack = () => {

  const [currentSubject, setCurrentSubject] = useState([])

  const [filteredSubjects, setFilteredSubjects] = useState(Questions)



  const handleSubjectClick = (id) => {
    const subject = Questions.find(q => q.id === id)
    if (subject) {
      setCurrentSubject(subject.questions)
      scrollToElement('questions-block');
    }
  
  };


const filterSubjects = (value) => {
  setFilteredSubjects(
    Questions.filter(q =>
      q.name.toLowerCase().includes(value.toLowerCase())
    )
  );
};


  return (
    <div className="container-fluid achiv-bg">
      <div className="container achiv-content">
        
        <InputFillter filter={filterSubjects}/>
        <SubjectList info={filteredSubjects} setSubject={handleSubjectClick}/>
        <QuestionList info={currentSubject} />
      </div>
    </div>
  )
}

export default QuestionBack
