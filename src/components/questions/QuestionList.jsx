import React from 'react'
import Question from './Question'

const QuestionList = (props) => {
    return (
        <div id="questions-block" className='question-list' >
            {props.info.map((cards, index) =>
                <Question key={index + 1}  text={cards}></Question>)}
        </div>
    )
}

export default QuestionList
