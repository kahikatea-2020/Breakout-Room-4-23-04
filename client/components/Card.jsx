import React from 'react'
import Answer from './Answer'
import Question from './Question'

class Card extends React.Component {
    // constructor() {
    //     super()
    //     this.state = {
    //         showAnswer: 

    //     }
    //     this.toggleAnswer = this.toggleAnswer.bind(this)
    // }

    // componentDidMount() {
    //     this.setState({
    //         showAnswer: this.props.showAnswer

    //     })
    // }
    render() {
        let cardDisplay
        if (!this.props.showAnswer) {
            cardDisplay = <Question question={this.props.card.question} toggleAnswer={this.props.toggleAnswer} />
        } else {
            cardDisplay = <Answer answer={this.props.card.answer} nextQuestion={this.props.nextQuestion} toggleAnswer={this.props.toggleAnswer} />
        }
        return (
            <>
                {cardDisplay}
            </>
        )
    }
}

export default Card