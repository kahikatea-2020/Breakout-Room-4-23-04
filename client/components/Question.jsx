import React from 'react'

const Question = (props) => {
  return (
    <div className='card'>

      <h2>Question {props.id}</h2>
      <p className="question">{props.question}</p>
      <button onClick={props.toggleAnswer}>Flip Card</button>
    </div>
  )
}

export default Question