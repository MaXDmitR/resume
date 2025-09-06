import React from 'react'
import Question from './Question'

const QuestionList = (props) => {
    return (
        <div>
            {props.info.map((cards, index) =>
                <Question key={index + 1}  text={cards}></Question>)}
        </div>
    )
}

export default QuestionList
