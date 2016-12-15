import axios from 'axios';
import { browserHistory } from 'react-router';
import { AUTH_USER, AUTH_ERROR } from './types';

const API_URL = 'http://localhost:3000';

export function signinUser ({ email, password}){
    return function(dispatch) {
        axios.post(`${API_URL}/signin`, { email, password })
            .then(response => {
                //Update state to indicate the user is authenticated
                dispatch({ type: AUTH_USER })
                //Save the JWT token in local storage
                localStorage.setItem('token', response.data.token);
                //redirect to the route /feature
                browserHistory.push('/feature');
            })
            .catch(() => {
                dispatch(authError('Bad Login Information'));
            });

    }
}

export function authError(error){
    return {
        type: AUTH_ERROR,
        payload: error
    }
}