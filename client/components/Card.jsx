import React from 'react'
import Answer from './Answer'
import Question from './Question'

class Card extends React.Component {
  
    render() {
        let cardDisplay
        if (!this.props.showAnswer) {
            cardDisplay = <Question 
            question = {this.props.card.question}
            id = {this.props.card.id}
            toggleAnswer = {this.props.toggleAnswer} />
        } else {
            cardDisplay = <Answer answer={this.props.card.answer} nextQuestion={this.props.nextQuestion}
            id = {this.props.card.id}
            toggleAnswer = {this.props.toggleAnswer} />
        }
        return (
            <>
                <div className='cardGrid'>
                    {cardDisplay}
                </div>
                <button onClick = {this.props.showCard}>Add a Card</button>
            </>
        )
    }
}

export default Card