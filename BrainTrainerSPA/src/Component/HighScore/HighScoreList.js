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
        .then(data => this.setState({ highscores: data.data.highScores }))
    }

    render() {
        return (
        <React.Fragment>
            <ul className='highscores'>
            {this.state.highscores &&
                this.state.highscores.map(({ correctAnswers, totalAnswers }, i) => {
                return (
                    <li key={i}>
                    <span className='number'>{i + 1}</span>
                    <span className='points'>{`${correctAnswers}/${totalAnswers}`}</span>
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
