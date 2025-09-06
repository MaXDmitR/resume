import React, { useState } from 'react'
import SubjectList from './subjectList'
import Questions from './questions.json';
import QuestionList from './QuestionList';

const QuestionBack = () => {

  const [currentSubject, setCurrentSubject] = useState([])

  const handleSubjectClick = (id) => {
 
    const subject = Questions.find(q => q.id === id)
    if (subject) {
      setCurrentSubject(subject.questions)
    }
  

setTimeout(() => {
      const el = document.getElementById('questions-block');
      if (!el) return;

      
      const navbar = document.querySelector('.navbar'); 
      const navHeight = navbar ? navbar.offsetHeight : 0;
      const offset = 12; 

      const top = el.getBoundingClientRect().top + window.pageYOffset - navHeight - offset;
      window.scrollTo({ top, behavior: 'smooth' });

      
    }, 60);
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
