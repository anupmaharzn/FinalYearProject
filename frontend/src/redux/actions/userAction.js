import axios from 'axios';
import * as userActionTypes from '../constants/userActionTypes';

//login
export const login = (email, password) => async (disptach) => {
    try {
        disptach({ type: userActionTypes.LOGIN_REQUEST });

        const config = {
            headers: {
                'Content-Type': 'application/json',
            },
        };
        const { data } = await axios.post(
            `/api/v1/login`,
            { email, password },
            config
        );

        disptach({ type: userActionTypes.LOGIN_SUCCESS, payload: data.user });

    } catch (error) {
        disptach({
            type: userActionTypes.LOGIN_FAIL,
            payload: error.response.data.message,
        });
    }
};
//register
export const register = (userData) => async (dispatch) => {
    try {
        dispatch({ type: userActionTypes.REGISTER_USER_REQUEST });

        const config = { headers: { "Content-Type": "multipart/form-data" } };

        const { data } = await axios.post(`/api/v1/register`, userData, config);

        dispatch({ type: userActionTypes.REGISTER_USER_SUCCESS, payload: data.user });
    } catch (error) {
        dispatch({
            type: userActionTypes.REGISTER_USER_FAIL,
            payload: error.response.data.message,
        })
    }
};
//load user 
export const loadUser = () => async (disptach) => {
    try {
        disptach({
            type: userActionTypes.LOAD_USER_REQUEST,
        });

        const { data } = await axios.get(`/api/v1/me`);
        disptach(
            {
                type: userActionTypes.LOAD_USER_SUCCESS,
                payload: data.user
            }
        );
    } catch (error) {
        disptach({
            type: userActionTypes.LOAD_USER_FAIL,
            payload: error.response.data.message
        })
    };
};

//logout user

export const logout = () => async (disptach) => {
    try {
        await axios.get(`/api/v1/logout`);
        disptach({
            type: userActionTypes.LOGOUT_SUCCESS,
        });
    } catch (error) {
        disptach({
            type: userActionTypes.LOGOUT_FAIL,
            payload: error.response.data.message
        })
    }
};

//update user profile

export const updateProfile = (userData) => async (dispatch) => {
    try {
        dispatch({
            type: userActionTypes.UPDATE_PROFILE_REQUEST
        });
        //coz we are send multi data with image so content type specify garnu ramro ho 
        const config = { headers: { "Content-Type": "multipart/form-data" } };

        const { data } = await axios.put(`/api/v1/me/update`, userData, config);

        dispatch({
            type: userActionTypes.UPDATE_PROFILE_SUCCESS,
            payload: data.success,
        });

    } catch (error) {
        dispatch({
            type: userActionTypes.UPDATE_PROFILE_FAIL,
            payload: error.response.data.message,
        })
    }
};

//update user password

export const updatePassword = (passwords) => async (dispatch) => {
    try {
        dispatch({
            type: userActionTypes.UPDATE_PASSWORD_REQUEST,
        });

        const config = { headers: { "Content-Type": "application/json" } };

        const { data } = await axios.put(`/api/v1/password/update`, passwords, config);

        dispatch({
            type: userActionTypes.UPDATE_PASSWORD_SUCCESS,
            payload: data.success,
        });
    } catch (error) {
        dispatch({
            type: userActionTypes.UPDATE_PASSWORD_FAIL,
            payload: error.response.data.message,
        })
    }
};

//clearing errors
export const clearErrors = () => (disptach) => {
    disptach({
        type: userActionTypes.CLEAR_ERRORS
    })
}