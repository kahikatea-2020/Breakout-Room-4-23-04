import React from 'react'

class Card extends React.Component {
    state = {

    }


    render() {
        return (
            <>
                <h2>Question</h2>

                <button onClick={handleClick}>Show Answer</button>


                {/* conditionally display this after the show answer is clicked */}
                <h2>Answer</h2>
                <p>Was your answer correct?</p>

                <button onClick={nextQuestion}>Yes</button>
                <button onClick={nextQuestion}>No</button>
            </>
        )
    }
}

export default Card