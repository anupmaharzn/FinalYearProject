import * as userActionTypes from '../constants/userActionTypes';

export const userReducer = (state = { user: {} }, action) => {
    switch (action.type) {
        case userActionTypes.LOGIN_REQUEST:
        case userActionTypes.REGISTER_USER_REQUEST:
            return {
                loading: true,
                isAuthenticated: false,
            };
        case userActionTypes.LOGIN_SUCCESS:
        case userActionTypes.REGISTER_USER_SUCCESS:
            return {
                ...state,
                loading: false,
                isAuthenticated: true,
                user: action.payload,
            };

        case userActionTypes.LOGIN_FAIL:
        case userActionTypes.REGISTER_USER_FAIL:
            return {
                ...state,
                isAuthenticated: false,
                user: null,
                error: action.payload
            }
                ;
        case userActionTypes.CLEAR_ERRORS:
            return {
                ...state,
                error: null,
            }

        default:
            return state;
    }
};