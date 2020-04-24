import React from 'react'

const Question = (props) => {
  return (
    <div className='card'>

      <br/>
    <h2>Question {props.id}</h2>
    <p className="question">{props.question}</p>

    </div>
  )
}

export default Question