import React from 'react';
import Fraction from "./Fraction/Fraction";
import './FractionQuestion.css'


const FractionQuestion = ({firstNom, firstDenom, secondNom, secondDenom, operator}) => {
    return (
        <div className="fraction-question">
            <Fraction denominator={firstNom} nominator={firstDenom}/>
            <p style={{'fontSize': '2em'}}>{operator}</p>
            <Fraction denominator={secondNom} nominator={secondDenom}/>
        </div>
    );
};

export default FractionQuestion;