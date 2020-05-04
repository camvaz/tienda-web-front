import {
    REMOVE_ITEM,
    ADD_ITEM,
    INCREASE_ITEM,
    DECREASE_ITEM,
    RESET_CART
} from "../actionTypes";

const initialCartState = {
    items: {},
    subtotal: 0,
    total: 0
};

export default function (state = initialCartState, action) {
    const { payload, type } = action;
    const newState = { ...state };
    switch (type) {
        case ADD_ITEM: {
            const { item } = payload;
            if (newState.items[item.id]?.cantidad > 0) {
                newState.items[item.id].cantidad += item.cantidad;
            } else {
                newState.items[item.id] = {};
                newState.items[item.id].cantidad = item.cantidad;
                newState.items[item.id].precio = item.precio;
            }
            newState.subtotal += newState.items[item.id].precio * item.cantidad;
            return newState;
        }
        case REMOVE_ITEM: {
            const { itemId } = payload;
            newState.subtotal -=
                newState.items[itemId].precio * newState.items[itemId].cantidad;
            delete newState.items[itemId];
            return newState;
        }
        case INCREASE_ITEM: {
            const { itemId } = payload;
            newState.items[itemId].cantidad++;
            newState.subtotal += newState.items[itemId].precio;
            return newState;
        }
        case DECREASE_ITEM: {
            const { itemId } = payload;
            newState.items[itemId].cantidad--;
            newState.subtotal -= newState.items[itemId].precio;
            if (newState.items[itemId].cantidad === 0) {
                delete newState.items[itemId];
            }
            return newState;
        }

        case RESET_CART: {
            return {
                items: {},
                subtotal: 0,
                total: 0
            };
        }
        default: {
            return newState;
        }
    }
}
