import React, { Component } from 'react';
import './Board.scss';
import Board from './Board';
import { QuestionGenerator } from '../Utils/QuestionGenerator';
import GameStats from '../Component/GameStats/GameStats';
import { connect } from 'react-redux';
import Modal from '../Layout/Modal/Modal';
import { saveLocalHighscore } from '../Utils/localHighscores';
import { Redirect } from 'react-router-dom';
import auth from '../store/reducers/auth';
import axios from 'axios';

class GameSection extends Component {
  constructor(props) {
    super(props);

    this.state = {
      intervalId: null,
      squareOne: null,
      squareTwo: null,
      squareThree: null,
      squareFour: null,
      correctAnswer: null,
      question: null,
      timeLeft: null,
      gameStarted: false,
      gameEnded: false,
      numOfQuestions: 0,
      correctAnswers: 0,
      toHighscores: false
    };

    this.generator = new QuestionGenerator(this.props.difficulty);
  }

  startGame = () => {
    this.setState({
      gameStarted: true,
      gameEnded: false,
      numOfQuestions: 0,
      correctAnswers: 0,
      timeLeft: 3
    });
    this.startTimer();
    this.setNewNumbersAndQuestion();
  };

  startTimer = () => {
    const intervalId = setInterval(() => {
      if (this.state.timeLeft === 0) {
        this.endGame();
      } else {
        this.setState(prevState => ({
          timeLeft: prevState.timeLeft - 1
        }));
      }
    }, 1000);

    this.setState({ intervalId });
  };

  saveScore = () => {
    /*         saveLocalHighscore({
            correct: this.state.correctAnswers,
            total: this.state.numOfQuestions
        }); */

    const body = {
      userId: this.props.userId,
      correctAnswers: this.state.correctAnswers,
      totalAnswers: this.state.numOfQuestions
    };

    console.log(body);
    

    axios.post('http://localhost:5000/api/highscores',body);

    this.setState(() => ({ toHighscores: true }));
  };

  squareClickedHandler = squareValue => {
    this.setState(prevState => ({
      numOfQuestions: prevState.numOfQuestions + 1,
      correctAnswers:
        squareValue === this.state.correctAnswer
          ? prevState.correctAnswers + 1
          : prevState.correctAnswers
    }));

    this.setNewNumbersAndQuestion();
  };

  setNewNumbersAndQuestion() {
    this.generator.generateQuestion();

    const numbers = this.generator.numbers;

    this.setState({
      squareOne: numbers[0],
      squareTwo: numbers[1],
      squareThree: numbers[2],
      squareFour: numbers[3],
      question: this.generator.question,
      correctAnswer: this.generator.answer
    });
  }

  endGame() {
    clearInterval(this.state.intervalId);
    this.setState({ gameEnded: true });
  }

  componentWillUnmount() {
    clearInterval(this.state.intervalId);
  }

  render() {
    if (this.state.toHighscores) {
      return <Redirect to='/highscores' />;
    }

    return (
      <div>
        <Modal
          show={this.state.gameEnded}
          correct={this.state.correctAnswers}
          numOfQuestions={this.state.numOfQuestions}
          start={this.startGame}
          saveScore={this.saveScore}
        />
        <GameStats
          gameStarted={this.state.gameStarted}
          question={this.state.question}
          numOfQuestions={this.state.numOfQuestions}
          correctAnswers={this.state.correctAnswers}
          timeLeft={this.state.timeLeft}
        />
        <Board
          gameStarted={this.state.gameStarted}
          startGame={this.startGame}
          squareClicked={this.squareClickedHandler}
          sqOne={this.state.squareOne}
          sqTwo={this.state.squareTwo}
          sqThree={this.state.squareThree}
          sqFour={this.state.squareFour}
        />
      </div>
    );
  }
}

const mapStateToProps = ({ braintrainer,auth }) => ({
  difficulty: braintrainer.difficulty,
  userId: auth.userId
});

export default connect(mapStateToProps)(GameSection);
