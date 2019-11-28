import './Board.scss'
import Square from "../Component/Square/Square";
import React, {PureComponent} from 'react'


export class Board extends PureComponent{



    render() {

        return (
            <div className="board">
                <button
                    onClick={this.props.startGame}
                    className={this.props.gameStarted ? 'gameStarted' : 'startButton'}>
                    <strong>Start Game!</strong>
                </button>
                <Square
                    clicked={this.props.squareClicked}
                    val={this.props.sqOne}
                    gameStarted={this.props.gameStarted}
                />
                <Square
                    clicked={this.props.squareClicked}
                    val={this.props.sqTwo}
                    gameStarted={this.props.gameStarted}
                />
                <Square
                    clicked={this.props.squareClicked}
                    val={this.props.sqThree}
                    gameStarted={this.props.gameStarted}
                />
                <Square
                    clicked={this.props.squareClicked}
                    val={this.props.sqFour}
                    gameStarted={this.props.gameStarted}
                />
            </div>
        )
    }
};



export default Board;
