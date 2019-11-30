
const initialState = {
    token:''
};

const auth = (state = initialState, action) => {
    switch (action.type) {
        case 'LOGIN': return {token: action.token}
        case 'LOGOUT': return {token:''};
        default : return state;
    }
};

export default auth;