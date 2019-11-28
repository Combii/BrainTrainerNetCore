import React from 'react';
import './GameStats.scss'

const GameStats = (props) => {
    return (
        <div className="question">
            <div className="statContainer">
                <h1
                    style={{visibility: !props.gameStarted ? 'hidden' : 'visible'}}>
                    {props.timeLeft}
                </h1>
            </div>
            <div className="statContainer mid borderLeft">
                <h1
                    style={{visibility: !props.gameStarted ? 'hidden' : 'visible'}}>
                    {props.question}
                </h1>
            </div>
            <div className="statContainer borderLeft">
                <h1
                    style={{visibility: !props.gameStarted ? 'hidden' : 'visible'}}>
                    {`${props.correctAnswers}/${props.numOfQuestions}`}
                </h1>
            </div>
        </div>
    );
};

export default GameStats;
