import * as orderactiontypes from '../constants/orderactiontype';

export const newOrderReducer = (state = {}, action) => {

    switch (action.type) {

        case orderactiontypes.CREATE_ORDER_REQUEST:
            return {
                ...state,
                loading: true,
            };

        case orderactiontypes.CREATE_ORDER_SUCCESS:
            return {
                loading: false,
                order: action.payload,
            };
        case orderactiontypes.CREATE_ORDER_FAIL:
            return {
                loading: true,
                error: action.payload,
            };

        case orderactiontypes.CLEAR_ERRORS:
            return {
                ...state,
                error: null,
            };

        default:
            return state;
    }

}