import React from 'react';
import './Menu.scss'
import Button from "../../UI/Button/Button";

const Menu = props => {
    return (
        <div className="menu">
            <h2>Choose The Difficulty</h2>
            <Button clicked={() => props.diffSelected('easy')}>Easy</Button>
            <Button clicked={() => props.diffSelected('medium')} >Medium</Button>
            <Button clicked={() => props.diffSelected('hard')} >Hard</Button>
            <Button clicked={() => props.highscoresSelected()}>Highscores</Button>
        </div>
    );
};


export default Menu;