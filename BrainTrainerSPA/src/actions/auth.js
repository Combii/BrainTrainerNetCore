import axios from 'axios';

const baseUrl = 'http://localhost:5000';

export const login = (token) => ({
    type: 'LOGIN',
    token
});


export const startLogin = (username,password) => {
    return (dispatch) => {
        axios.post(baseUrl + '/api/users',{
            username,
            password
        }).then((data) => dispatch(login(data.token)))
    }
};