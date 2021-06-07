import axios from 'axios';
import { SET_USER_TOKEN_DATA_MUTATION, SIGNUP_ACTION } from '../../storeconstants';

export default {
    async [SIGNUP_ACTION](context, payload) {
        let postData = {
            email: payload.email,
            password: payload.password,
            returnSecureToken: true,
        };
        let response = await axios.post(`https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=AIzaSyC01b23UF7AzSNlsY_q8DH8ZHc3ucv6g5k`,
            postData,
        );

        if (response.status === 200) {
            context.commit(SET_USER_TOKEN_DATA_MUTATION), {
                email: response.data.email,
                token: response.data.token,
                expiresIn: response.data.expiresIn,
                refreshToken: response.data.refreshToken,
                userId: response.data.localId
            }
        }
    },

};
