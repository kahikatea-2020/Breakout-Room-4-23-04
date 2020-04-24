import React, { Component } from 'react'
import Header from './Header'
import Card from './Card'
import cards from '../cards.js'
import AddCard from './AddCard'



class Home extends Component {
  constructor() {
    super()
    this.state = {
      cards: cards,
      cardArray: [],
      showAnswer: false,
      idx: 0,
      showCard: true
    }
    this.nextQuestion = this.nextQuestion.bind(this)
    this.toggleAnswer = this.toggleAnswer.bind(this)
    this.showCard = this.showCard.bind(this)
  }

  componentDidMount() {
    this.drawCard()
  }

  componentDidUpdate() {

  }

  showCard() {
    if (this.state.showCard) {
      this.setState({ showCard: false })
    } else {
      this.setState({ showCard: true })
    }
  }

  createCardArray(ignore) {
    let workArr = []
    this.state.cards.forEach(card => {
      if (card.id !== ignore) {
        for (let i = 0; i < card.priority; i++) {
          let idx = card.id
          idx--
          workArr.push(idx)
        }
      }
    })
    if (workArr.length === 0) {
      alert('Congratulations you have mastered all of these questions!')
    }
    this.setState({
      cardArray: workArr
    })

  }

  drawCard(id) {
    this.createCardArray(id)
    setTimeout(() => {
      let max = this.state.cardArray.length
      let idx = Math.floor(Math.random() * Math.floor(max))
      let selection = this.state.cardArray[idx]
      this.setState({ idx: selection })
    }, 1)


  }

  nextQuestion(id) {
    this.state.cards.forEach(card => {
      if (card.id === id) {
        let priority = card.priority
        priority--
        card.priority = priority
      }
    })
    setTimeout(this.drawCard(id), 1)

    // console.log('index', this.state.idx)
    // let index = this.state.idx
    // index++
    // if (index >= this.state.cards.length) {
    //   index = 0
    // }
    this.setState({
      // idx: index,
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

  addCard(cardSubmitted) {
    this.setState(state => ({
      cards: state.cards.concat([cardSubmitted])
    }))
    console.log(cards)
  }



  render() {
    let display
    if (this.state.showCard) {
      display = <Card
        card={this.state.cards[this.state.idx]}
        nextQuestion={this.nextQuestion}
        toggleAnswer={this.toggleAnswer}
        showAnswer={this.state.showAnswer}
        showCard={this.showCard} />
    } else {
      display = <AddCard showCard={this.showCard}
        onAddCard={(addedCard) => {
          this.addCard(addedCard)
        }
        }
        arrLength={this.state.cards.length} />
    }
    return (
      <>

        {display}

      </>
    )

  }
}
export default Home