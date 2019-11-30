import {generateWrongAnswers, getRandomInt, shuffle} from "./HelperFunctions";

export class QuestionGenerator {


    constructor(
        difficulty
    ) {

        this._difficulty = difficulty;
        this._question = null;
        this._answer = null;
        this._numbers = [];

    }


    generateQuestion() {

        switch (getRandomInt(0, 4)) {
            case 0:
                this.generateAdditionQuestion();
                break;
            case 1:
                this.generateSubtractionQuestion();
                break;
            case 2:
                this.generateMultiplicationQuestion();
                break;
            case 3:
                this.generateDivisionQuestion();
                break;
        }

    }

    incrementRange() {
        this._min = this._min + 1;
        this._max = this._max + 1;
    }


    generateAdditionQuestion() {

        const additionMax = this.getMax('addition');

        let num2 = getRandomInt(1, additionMax);
        let num1 = getRandomInt(1, additionMax);

        this._answer = num1 + num2;
        this._question = `${num1}+${num2}`;

        this.setNumbers()

    }

    generateSubtractionQuestion() {

        const subtractionMax = this.getMax('subtraction');

        const num2 = getRandomInt(0, 10);
        const num1 = getRandomInt(subtractionMax-15, subtractionMax);

        this._answer = num1 - num2;
        this._question = `${num1}-${num2}`;

        this.setNumbers()

    }

    generateMultiplicationQuestion() {

        const multiplicationMax = this.getMax('multiplication');

        const num2 = getRandomInt(1, multiplicationMax);
        const num1 = getRandomInt(1, multiplicationMax);

        this._answer = num1 * num2;
        this._question = `${num1}*${num2}`;

        this.setNumbers()

    }

    generateDivisionQuestion() {

        const divisionMax = this.getMax('division');

        const num2 = getRandomInt(1, divisionMax);
        const num1 = getRandomInt(1, divisionMax);

        this._answer = num2;
        this._question = `${num2 * num1}/${num1}`;

        this.setNumbers()

    }

    getMax(type) {

        switch (this._difficulty) {
            case 'easy':
                switch (type) {
                    case 'addition':
                        return 25;
                    case 'subtraction':
                        return 25;
                    case 'multiplication':
                        return 10;
                    case 'division':
                        return 10;
                }
                break;
            case 'medium':
                switch (type) {
                    case 'addition':
                        return 50;
                    case 'subtraction':
                        return 50;
                    case 'multiplication':
                        return 20;
                    case 'division':
                        return 20;
                }
                break;
            case 'hard':
                switch (type) {
                    case 'addition':
                        return 100;
                    case 'subtraction':
                        return 100;
                    case 'multiplication':
                        return 30;
                    case 'division':
                        return 30;
                }
        }

    }


    setNumbers() {
        this._numbers = shuffle([this._answer, ...generateWrongAnswers(this._answer)])
    }

    reset(min, max) {
        this._min = min;
        this._max = max;
    }


//Getters

    get numbers() {
        return this._numbers;
    }

    get question() {
        return this._question;
    }

    get answer() {
        return this._answer;
    }


}



