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
  }

  nextQuestion(cardDisplayed) {
    // console.log('index', this.state.idx)
    let index = this.state.idx
    index++
    if (index >= this.state.cards.length){
      index = 0
    }
    console.log(index)
    this.setState({
      idx: index
    })
  }
    
      
    
      

  render() {
    console.log(this.state.cards)
    return (
      <>
        <Card card={this.state.cards[this.state.idx]} nextQuestion={this.nextQuestion} />

      </>

    )
  }
}

export default Home