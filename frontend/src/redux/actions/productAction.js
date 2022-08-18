import axios from 'axios';
import * as productactionTypes from '../constants/productactiontypes';


export const getProduct = (keyword = "", currentPage) => async (dispatch) => {

    try {
        dispatch({
            type: productactionTypes.ALL_PRODUCT_REQUEST
        });

        // let link = `/api/v1/products/?keyword=${keyword}&page=${currentPage}`;

        const { data } = await axios.get(`/api/v1/products/?keyword=${keyword}&page=${currentPage}`);

        dispatch({
            type: productactionTypes.ALL_PRODUCT_SUCCESS,
            payload: data,
        })

    } catch (error) {
        dispatch({
            type: productactionTypes.ALL_PRODUCT_FAIL,
            payload: error.response.data.message,
        });
    }

};

export const getProductDetails = (id) => async (dispatch) => {
    try {
        dispatch({
            type: productactionTypes.PRODUCT_DETAILS_REQUEST
        });

        const { data } = await axios.get(`/api/v1/product/${id}`);

        dispatch({
            type: productactionTypes.PRODUCT_DETAILS_SUCCESS,
            payload: data.product,
        });

    } catch (error) {
        dispatch({
            type: productactionTypes.PRODUCT_DETAILS_FAIL,
            payload: error.response.data.message,
        })
    }
}

//clearing errors
export const clearErrors = () => async (dispatch) => {
    dispatch({
        type: productactionTypes.CLEAR_ERRORS
    });
}


