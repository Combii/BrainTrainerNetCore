import React from 'react';
import './Square.scss'

const Square = (props) => {


    return (
        <div
            onClick={props.gameStarted?() => props.clicked(props.val):null}
            className={['square','borderb',props.gameStarted?'gameStarted':null].join(' ')}>
            <p className="no-select">{props.val}</p>
        </div>
    );
};

    export default Square;
