import * as actionTypes from './actionTypes';

export const auth = (email, password, isSignup) => {
    return {
        type: actionTypes.AUTH_USER,
        email: email,
        password: password,
        isSignup: isSignup
    };
};

export const authStart = () => {
    return {
        type: actionTypes.AUTH_START
    };
};

export const authSuccess = (token, userId) => {
    return {
        type: actionTypes.AUTH_SUCCESS,
        idToken: token,
        userId: userId
    };
};

export const authFail = (error) => {
    return {
        type: actionTypes.AUTH_FAIL,
        error: error
    };
};

export const checkAuthTimeout = (expiresIn) => {
    return {
        type: actionTypes.AUTH_CHECK_TIMEOUT,
        expirationTime: expiresIn
    };
};

export const logout = () => {
    return {
        type: actionTypes.AUTH_INITIATE_LOGUOT
    };
};

export const logoutSucced = () => {
    return {
        type: actionTypes.AUTH_LOGUOT
    };
};

export const setAuthRedirectPath = (path) => {
    return {
        type: actionTypes.SET_AUTH_REDIRECT_PATH,
        path: path,
    };
};

export const authCheckState = () => {
    return {
        type: actionTypes.AUTH_CHECK_INITIAL_STATE
    }
};