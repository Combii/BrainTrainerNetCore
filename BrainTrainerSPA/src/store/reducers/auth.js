
const initialState = {
    token:'',
    userId: ''
};

const auth = (state = initialState, action) => {
    switch (action.type) {
        case 'LOGIN': return {token: action.token, userId : action.userId}
        case 'LOGOUT': return {token:''};
        default : return state;
    }
};

export default auth;