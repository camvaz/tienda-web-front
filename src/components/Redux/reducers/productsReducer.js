import { SET_PRODUCTS } from "../actionTypes";

const initialProductsState = {
    list: {}
};

export default function (state = initialProductsState, action) {
    const { payload, type } = action;
    const newState = { ...state };
    switch (type) {
        case SET_PRODUCTS: {
            const { products } = payload;
            newState.list = products;
            return newState;
        }

        default: {
            return newState;
        }
    }
}
