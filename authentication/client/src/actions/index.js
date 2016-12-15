import axios from 'axios';
import { browserHistory } from 'react-router';

const API_URL = 'http://localhost:3000';

export function signinUser ({ email, password}){
    return function(dispatch) {
        axios.post(`${API_URL}/signin`, { email, password })
            .then(response => {
                browserHistory.push('/feature');
            })
            .catch(() => {

            });

    }
}