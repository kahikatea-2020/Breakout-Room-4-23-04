import React, { Component } from 'react'
import Header from './Header'
import Card from './Card'
import cards from '../cards.js'



class Home extends Component {
  constructor() {
    super()
    this.state = {
      cards: cards,
      showAnswer: false,
      idx: 0
    }
    this.nextQuestion = this.nextQuestion.bind(this)
    this.toggleAnswer = this.toggleAnswer.bind(this)
  }

  nextQuestion(cardDisplayed) {

    // console.log('index', this.state.idx)
    let index = this.state.idx
    index++
    if (index >= this.state.cards.length) {
      index = 0
    }
    this.setState({
      idx: index,
      showAnswer: false
    })
  }

  toggleAnswer() {
    if (!this.state.showAnswer) {
        this.setState({
            showAnswer: true
        })
    } else {
        this.setState({
            showAnswer: false
        })
    }
}



  render() {
    console.log(this.state.cards)
    return (
      <>
        <Card 
         card={this.state.cards[this.state.idx]}
         nextQuestion={this.nextQuestion}
         toggleAnswer = {this.toggleAnswer}
         showAnswer={this.state.showAnswer} />
      </>
    )
  }
}

export default Home