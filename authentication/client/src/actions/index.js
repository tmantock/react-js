import axios from 'axios';

const API_URL = 'http://localhost:3000';

export function signinUser ({ email, password}){
    return function(dispatch) {
        axios.post(`${API_URL}/sigin`, { email, password });
        
    }
    //Submit credentials to server

    //If request is good

    //If request is bad
}