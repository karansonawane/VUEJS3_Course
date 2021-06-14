import axios from 'axios';
import SignupValidations from '../../../services/SignupValidations';
import { AUTH_ACTION, AUTO_LOGIN_ACTION, LOADING_SPINNER_SHOW_MUTATION, LOGIN_ACTION, LOGOUT_ACTION, SET_USER_TOKEN_DATA_MUTATION, SIGNUP_ACTION } from '../../storeconstants';

export default {

    [LOGOUT_ACTION](context) {
        context.commit(SET_USER_TOKEN_DATA_MUTATION, {
            email: null,
            token: null,
            expiresIn: null,
            refreshToken: null,
            userId: null,
        });
        localStorage.removeItem('userData');
    },

    async [LOGIN_ACTION](context, payload) {
        return context.dispatch(AUTH_ACTION, {
            ...payload,
            url: `https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=AIzaSyC01b23UF7AzSNlsY_q8DH8ZHc3ucv6g5k`
        })
    },

    async [SIGNUP_ACTION](context, payload) {
        return context.dispatch(AUTH_ACTION, {
            ...payload,
            url: `https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=AIzaSyC01b23UF7AzSNlsY_q8DH8ZHc3ucv6g5k`
        });
    },

    [AUTO_LOGIN_ACTION](context) {
        let userData = localStorage.getItem('userData');
        if (userData) {
            context.commit(SET_USER_TOKEN_DATA_MUTATION,
                JSON.parse(userData),
            );
        }
    },

    async [AUTH_ACTION](context, payload) {
        let postData = {
            email: payload.email,
            password: payload.password,
            returnSecureToken: true,
        };
        let response = '';

        try {
            response = await axios.post(payload.url, postData);
        } catch (err) {
            context.commit(LOADING_SPINNER_SHOW_MUTATION, false, { root: true });
            let errorMessage = SignupValidations.getErrorMessageFromCode(err.response.data.error.errors[0].message,);
            throw errorMessage;
        }

        if (response.status === 200) {
            let tokenData = {
                email: response.data.email,
                token: response.data.idToken,
                expiresIn: response.data.expiresIn,
                refreshToken: response.data.refreshToken,
                userId: response.data.localId,
            }
            localStorage.setItem('userData', JSON.stringify(tokenData));
            context.commit(SET_USER_TOKEN_DATA_MUTATION, tokenData);
        }
    },

};
