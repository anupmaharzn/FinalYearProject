import * as orderactiontypes from '../constants/orderactiontype';
import axios from 'axios';

//create order 

export const createOrder = (order) => async (dispatch, getState) => {

    try {
        dispatch({
            type: orderactiontypes.CREATE_ORDER_REQUEST,
        });

        const config = {
            headers: {
                "Content-Type": "application/json",
            },
        };

        const { data } = await axios.post(`/api/v1/order/new`, order, config);

        dispatch({
            type: orderactiontypes.CREATE_ORDER_SUCCESS,
            payload: data,
        });


    } catch (error) {
        dispatch({
            type: orderactiontypes.CREATE_ORDER_FAIL,
            payload: error.response.data.message,
        })
    }
};


//clearing errors
export const clearErrors = () => async (dispatch) => {
    dispatch({
        type: orderactiontypes.CLEAR_ERRORS,
    });
}