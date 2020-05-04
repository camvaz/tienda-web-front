import {
    ADD_ITEM,
    REMOVE_ITEM,
    INCREASE_ITEM,
    DECREASE_ITEM,
    SET_PRODUCTS,
    RESET_CART
} from "./actionTypes";

export const addItem = item => ({
    type: ADD_ITEM,
    payload: {
        item
    }
});

export const removeItem = itemId => ({
    type: REMOVE_ITEM,
    payload: {
        itemId
    }
});

export const increaseItem = itemId => ({
    type: INCREASE_ITEM,
    payload: {
        itemId
    }
});

export const decreaseItem = itemId => ({
    type: DECREASE_ITEM,
    payload: {
        itemId
    }
});

export const resetCart = () => ({
    type: RESET_CART,
    payload: {}
});

export const setProducts = products => ({
    type: SET_PRODUCTS,
    payload: {
        products
    }
});
