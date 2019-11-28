import React, {Component} from 'react';
import NavBar from "./Component/NavBar/NavBar";
import {Route, Switch, withRouter} from "react-router-dom";
import Menu from "./Component/Menu/Menu";
import {connect} from 'react-redux';
import HighScoreList from "./Component/HighScore/HighScoreList";
import asyncComponent from "./hoc/asyncComponent";
import {loadLocalHighscores} from "./Utils/localHighscores";

const asyncGameSection = asyncComponent(() => import("./Container/GameSection"));

class BrainTrainer extends Component {


    difficultySelected = (difficulty) => {
        this.props.onDifficultySelected(difficulty);
        this.props.history.push('/braintrainer')
    };


    viewHighscoresSelected = () => {
        this.props.history.push('/highscores')
    };

    render() {

        const routes = [
            {
                path:'/',
                component:Menu,
                componentProps:{
                    diffSelected: this.difficultySelected,
                    highscoresSelected: this.viewHighscoresSelected
                }
            },
            {
                path:'/braintrainer',
                component: asyncGameSection
            },
            {
                path: '/highscores',
                component: HighScoreList,
                componentProps: {
                    scores: loadLocalHighscores()
                }
            },
        ];

        return (
            <div>
                <NavBar/>
                <Switch>
                    {routes.map(({path,component:C,componentProps}) => (
                        <Route
                            exact
                            key={path}
                            path={path}
                            render={(props) => <C {...props} {...componentProps}/>}
                        />
                    ))}
                </Switch>
            </div>
        )
    }

}

const mapDispatchToProps = dispatch => ({
    onDifficultySelected : (difficulty) => dispatch({difficulty,type:'SET_DIFFICULTY'})
});


export default withRouter(connect(null,mapDispatchToProps)(BrainTrainer));
