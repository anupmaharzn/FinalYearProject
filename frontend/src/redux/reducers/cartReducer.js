import * as cartactionTypes from "../constants/cartactiontype";

export const cartReducer = (state = { cartItems: [] }, action) => {

    switch (action.type) {

        case cartactionTypes.ADD_TO_CART:
            const item = action.payload;

            const isItemExist = state.cartItems.find(
                //product vanyeko product id ho 
                (i) => i.product === item.product
            );

            if (isItemExist) {
                return {
                    ...state,
                    cartItems: state.cartItems.map((i) =>
                        i.product === isItemExist.product ? item : i
                    ),

                };
            } else {
                return {
                    ...state,
                    cartItems: [...state.cartItems, item],
                }
            }

        case cartactionTypes.REMOVE_CART_ITEM:
            return {
                ...state,
                cartItems: state.cartItems.filter((i) => i.product !== action.payload)
            }

        default:
            return state;

    }
}


