import React from 'react'

const Answer = (props) => {

  return (
    <div className="card">
      <h2 className='answer'>Answer</h2>
      <p>{props.answer}</p>
      <p>Was your answer correct?</p>
      <button onClick={props.toggleAnswer}>Flip Card</button>
      <br />
      <br />
      <div className="btns">
        <button onClick={() => props.nextQuestion(props.id)}>Yes</button>
        <button onClick={() => props.nextQuestion(props.id)}>No</button>
      </div>
    </div>
  )
}

export default Answer