import React from 'react'

class Card extends React.Component {
    state = {
        showAnswerClick: false

    }
// let answer= null
//     if (this.state.showAnswer) {
        
//     }

    render() {
        return (
            <>
                <h2>Question</h2>
                <p>{this.props.card.question}</p>

                {/* <button onClick={handleClick}>Show Answer</button> */}

                <button onClick={handleClick}>Show answer</button>
                {/* conditionally display this after the show answer is clicked */}
                <h2>Answer</h2>
                <p>{this.props.card.answer}</p>
                <p>Was your answer correct?</p>

                <button onClick={() => this.props.nextQuestion()}>Yes</button>
                <button onClick={() => this.props.nextQuestion()}>No</button>
            </>
        )
    }
}

export default Card