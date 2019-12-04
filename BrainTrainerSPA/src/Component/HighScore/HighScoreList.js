import React, { Component } from 'react';
import { connect } from 'react-redux';
import './HighScoreList.scss';
import axios from 'axios';

class HighScoreList extends Component {
  state = {
    highscores: null
  };

  componentDidMount() {
    axios
      .get('http://localhost:5000/api/users/' + this.props.userId)
      .then(data => this.setState({ highscores: data.data.highScores }));
  }

  render() {
    return (
      <React.Fragment>
        <ul className='highscores'>
          {this.state.highscores &&
            this.state.highscores.map(({ correctAnswers, totalAnswers, timeBetweenClicksAverage }, i) => {
              return (
                <li key={i}>
                  <span>{i + 1}</span>
                  <span>{`${correctAnswers}/${totalAnswers} | ${timeBetweenClicksAverage}`}</span>
                </li>
              );
            })}
        </ul>
      </React.Fragment>
    );
  }
}

const mapStateToProps = state => ({
  userId: state.auth.userId
});

export default connect(mapStateToProps)(HighScoreList);
