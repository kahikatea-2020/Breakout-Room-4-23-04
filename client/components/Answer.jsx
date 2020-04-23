import React from 'react'

const Answer = (props) => {

  return (
    <>
    <h2>Answer</h2>
    <p>{props.answer}</p>
    <p>Was your answer correct?</p>
    <button onClick = {props.toggleAnswer}>Show Question</button>
    <button onClick={() => props.nextQuestion()}>Yes</button>
    <button onClick={() => props.nextQuestion()}>No</button>
    </>
)
}

export default Answer