import React, { Component } from 'react'


class AddCard extends Component {
  constructor() {
    super()
    this.handleSubmit = this.handleSubmit.bind(this)
  }

  handleSubmit(event) {
    // event.preventDefault()
    const question = event.target.elements.question.value
    const answer = event.target.elements.answer.value
    const card = {
      id: this.props.arrLength + 1,
      question: question,
      answer: answer,
      priority: 5
    }
    if (question && answer) {
      this.props.onAddCard(card)
      this.props.showCard()
    }
  }

  render() {

    return (
      <>
        <h1>Add Card</h1>
        <div className='form'>
          <form onSubmit={this.handleSubmit}>
            <input type="text" placeholder="Question" name="question" />
            <input type="text" placeholder="Answer" name="answer" />
            <button>Submit</button>
          </form>
        </div>
        <button onClick={this.props.showCard}>Show Card</button>
      </>
    )
  }
}

export default AddCard