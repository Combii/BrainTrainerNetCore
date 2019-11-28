import {getRandomInt, shuffle} from "./HelperFunctions";

export class QuestionGenerator {



    constructor(
        min,
        max,
        divisionAndMultiplicationEnabled = false
    ) {

        this._min = min;
        this._max = max;
        this._question=null;
        this._answer=null;
        this._numbers = [];
        this._divisionAndMultiplicationEnabled = divisionAndMultiplicationEnabled;

    }

    generateNumbers() {
        const arr = [];

        for (let i = this._min; i <= this._max; i++) {
            arr.push(i)
        }

        shuffle(arr);

        for (let i = 0; i < 4; i++) {

            this._numbers[i] = arr.pop()
        }

        console.log(this._numbers);


    }

    generateQuestion() {

        if(this.numbers.length !== 0) {

            //Pick random number from numbers
            this._answer = this.numbers[getRandomInt(0,4)];

            //Generate either addition or subtraction question
            if(getRandomInt(0,2)===1) {
                this.generateAdditionQuestion();
            } else {
                this.generateSubtractionQuestion();
            }

        }

    }

    incrementRange() {
        this._min = this._min+1;
        this._max = this._max+1;
    }


    generateAdditionQuestion() {
        const rand = getRandomInt(this.answer / 2, this.answer);
        const toAdd = this.answer - rand;
        this._question = `${rand}+${toAdd}`
    }

    generateSubtractionQuestion() {
        const rand = getRandomInt(0, this.answer/2);
        const toSubtract = this.answer + rand;
        this._question = `${toSubtract}-${rand}`
    }

    reset(min,max) {
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



