import React from 'react'

const Answer = (props) => {

  return (
    <div className="card">
     <br/>
    <h2>Answer</h2>
    <p className ='answer'>{props.answer}</p>
    <p>Was your answer correct?</p>
    <button onClick={() => props.nextQuestion(props.id)}>Yes</button>
    <button onClick={() => props.nextQuestion(props.id)}>No</button>

    </div>
  )
}

export default Answer