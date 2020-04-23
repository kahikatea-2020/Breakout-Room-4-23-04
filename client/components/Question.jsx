import React from 'react'

const Question = (props) => {
  return (
      <>
    <h2>Question {props.card.id}</h2>
    <p>{props.question}</p>

    <button onClick = {props.toggleAnswer}>Show Answer</button>
    </>
    )
}

export default Question