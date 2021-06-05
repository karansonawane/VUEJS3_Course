import axios from 'axios';
import { SIGNUP_ACTION } from '../../storeconstants';

export default {
    async [SIGNUP_ACTION](_, payload) {
        let postData = {
            email: payload.email,
            password: payload.password,
            returnSecureToken: true,
        };
        let response = await axios.post(`https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=AIzaSyC01b23UF7AzSNlsY_q8DH8ZHc3ucv6g5k`,
            postData,
        );

        console.log(response);
    },

};
