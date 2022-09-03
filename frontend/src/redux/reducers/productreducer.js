import * as productactionTypes from '../constants/productactiontypes';

// const initialState = {
//     products: []
// }

export const productReducer = (state = { products: [] }, action) => {

    switch (action.type) {
        case productactionTypes.ALL_PRODUCT_REQUEST:
            return {
                loading: true,
                products: []
            }
        case productactionTypes.ALL_PRODUCT_SUCCESS:
            return {
                loading: false,
                products: action.payload.products,
                productsCount: action.payload.productsCount,
                resultPerPage: action.payload.resultPerPage,
            }

        case productactionTypes.ALL_PRODUCT_FAIL:
            return {
                loading: false,
                error: action.payload,
            }
        case productactionTypes.CLEAR_ERRORS:
            return {
                ...state,
                error: null,
            }
        default:
            return state;
    }

};

export const productDetailReducer = (state = { product: {} }, action) => {

    switch (action.type) {
        case productactionTypes.PRODUCT_DETAILS_REQUEST:
            return {
                loading: true,
                ...state
            };
        case productactionTypes.PRODUCT_DETAILS_SUCCESS:
            return {
                loading: false,
                product: action.payload,
            };

        case productactionTypes.PRODUCT_DETAILS_FAIL:
            return {
                loading: false,
                error: action.payload,
            };
        case productactionTypes.CLEAR_ERRORS:
            return {
                ...state,
                error: null
            }
        default:
            return state;
    }
};

export const newReviewReducer = (state = {}, action) => {

    switch (action.type) {
        case productactionTypes.NEW_REVIEW_REQUEST:
            return {
                ...state,
                loading: true,

            };
        case productactionTypes.NEW_REVIEW_SUCCESS:
            return {
                loading: false,
                success: action.payload,
            };
        case productactionTypes.NEW_REVIEW_FAIL:
            return {
                ...state,
                loading: false,
                error: action.payload,
            };
        case productactionTypes.NEW_REVIEW_RESET:
            return {
                ...state,
                success: false,
            };
        case productactionTypes.CLEAR_ERRORS:
            return {
                ...state,
                error: null
            }
        default:
            return state;
    }
};


