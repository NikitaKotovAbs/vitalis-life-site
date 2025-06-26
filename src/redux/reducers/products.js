import { getProducts } from "../../api/request/products.js";

const initialState = {
    status: 'idle',
    error: null,
    products: []
};

const productsReducer = (state = initialState, action) => {
    switch (action.type) {
        case getProducts.pending.type:
            return {
                ...state,
                status: 'loading',
                error: null
            };

        case getProducts.fulfilled.type:
            return {
                ...state,
                status: 'succeeded',
                products: action.payload, // Просто сохраняем массив продуктов
                error: null
            };

        case getProducts.rejected.type:
            return {
                ...state,
                status: 'failed',
                error: action.error.message
            };

        default:
            return state;
    }
};

export default productsReducer;