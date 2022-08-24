import * as userActionTypes from '../constants/userActionTypes';

export const userReducer = (state = { user: {} }, action) => {
    switch (action.type) {
        case userActionTypes.LOGIN_REQUEST:
        case userActionTypes.REGISTER_USER_REQUEST:
        case userActionTypes.LOAD_USER_REQUEST:
            return {
                loading: true,
                isAuthenticated: false,
            };

        case userActionTypes.LOGIN_SUCCESS:
        case userActionTypes.REGISTER_USER_SUCCESS:
        case userActionTypes.LOAD_USER_SUCCESS:
            return {
                ...state,
                loading: false,
                isAuthenticated: true,
                user: action.payload,
            };

        case userActionTypes.LOGOUT_SUCCESS:
            return {
                loading: false,
                user: null,
                isAuthenticated: false,
            };

        case userActionTypes.LOGIN_FAIL:
        case userActionTypes.REGISTER_USER_FAIL:
            return {
                ...state,
                loading: false,
                isAuthenticated: false,
                user: null,
                error: action.payload
            };

        case userActionTypes.LOAD_USER_FAIL:
            return {
                loading: false,
                isAuthenticated: false,
                user: null,
                error: action.payload
            };
        case userActionTypes.LOGOUT_FAIL:
            return {
                ...state,
                loading: false,
                error: action.payload,
            }

        case userActionTypes.CLEAR_ERRORS:
            return {
                ...state,
                error: null,
            }

        default:
            return state;
    }
};

export const profileReducer = (state = {}, action) => {

    switch (action.type) {
        case userActionTypes.UPDATE_PROFILE_REQUEST:
            return {
                ...state,
                loading: true,
            };

        case userActionTypes.UPDATE_PROFILE_SUCCESS:
            return {
                ...state,
                loading: false,
                isUpdated: action.payload,
            };

        case userActionTypes.UPDATE_PROFILE_FAIL:
            return {
                ...state,
                loading: false,
                error: action.payload
            };

        case userActionTypes.UPDATE_PROFILE_RESET:
            return {
                ...state,
                isUpdated: false,
            }

        case userActionTypes.CLEAR_ERRORS:
            return {
                ...state,
                error: null,
            };

        default:
            return state;
    }
}