
const initialState = {
    difficulty:null,
    correctAnswers:0,
};

const braintrainer = (state = initialState, action) => {
    switch (action.type) {
        case 'SET_DIFFICULTY': return {...state,difficulty: action.difficulty};
        case 'ADD_POINT': return {...state,correctAnswers:state.correctAnswers+1};
        default : return state;
    }
};

export default braintrainer;