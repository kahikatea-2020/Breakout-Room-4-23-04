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
            />
        } else {
            cardDisplay = <Answer answer={this.props.card.answer} nextQuestion={this.props.nextQuestion}
            id = {this.props.card.id}
         />
        }
        return (
            <>
                <div onClick = {this.props.toggleAnswer} className='cardGrid'>

                    {cardDisplay}
                </div>
                <button onClick={this.props.showCard}>Add a Card</button>
            </>
        )
    }
}

export default Card