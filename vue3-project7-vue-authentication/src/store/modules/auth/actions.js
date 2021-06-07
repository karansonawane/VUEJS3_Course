import axios from 'axios';
import SignupValidations from '../../../services/SignupValidations';
import { LOADING_SPINNER_SHOW_MUTATION, SET_USER_TOKEN_DATA_MUTATION, SIGNUP_ACTION } from '../../storeconstants';

export default {
    async [SIGNUP_ACTION](context, payload) {
        let postData = {
            email: payload.email,
            password: payload.password,
            returnSecureToken: true,
        };
        let response = '';

        context.commit(LOADING_SPINNER_SHOW_MUTATION, true, { root: true });

        try {
            response = await axios.post(`https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=AIzaSyC01b23UF7AzSNlsY_q8DH8ZHc3ucv6g5k`,
                postData,
            );
        } catch (err) {
            context.commit(LOADING_SPINNER_SHOW_MUTATION, false, { root: true });
            let errorMessage = SignupValidations.getErrorMessageFromCode(err.response.data.error.errors[0].message,);
            throw errorMessage;
        }

        context.commit(LOADING_SPINNER_SHOW_MUTATION, false, { root: true });

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
