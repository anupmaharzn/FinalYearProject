import * as orderactiontypes from '../constants/orderactiontype';
import axios from 'axios';

//create order 

export const createOrder = (order) => async (dispatch) => {

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

//my orders
export const myOrders = () => async (dispatch) => {

    try {
        dispatch({
            type: orderactiontypes.MY_ORDERS_REQUEST,
        });

        const { data } = await axios.get(`/api/v1/orders/me`);

        dispatch({
            type: orderactiontypes.MY_ORDERS_SUCCESS,
            payload: data.orders,
        });


    } catch (error) {
        dispatch({
            type: orderactiontypes.MY_ORDERS_FAIL,
            payload: error.response.data.message,
        })
    }
};

//get order details 

export const getOrderDetails = (id) => async (dispatch) => {

    try {
        dispatch({
            type: orderactiontypes.ORDER_DETAILS_REQUEST,
        })
        const { data } = await axios.get(`/api/v1/order/${id}`);

        dispatch({
            type: orderactiontypes.ORDER_DETAILS_SUCCESS,
            payload: data.order
        })
    } catch (error) {
        dispatch({
            type: orderactiontypes.ORDER_DETAILS_FAIL,
            payload: error.response.data.message,
        })
    }

}


//clearing errors
export const clearErrors = () => async (dispatch) => {
    dispatch({
        type: orderactiontypes.CLEAR_ERRORS,
    });
}