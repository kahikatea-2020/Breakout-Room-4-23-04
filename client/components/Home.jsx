import React, { Component } from 'react'
import Header from './Header'
import cards from '../cards.js'

class Home extends Component {
  constructor() {
    super()
    this.state = {
      cards: cards,
      showAnswer: false
    }
  }

render() {
  console.log(this.state.cards)
  return (
    <>
     

    </>
    
  )

}
}