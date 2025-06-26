import { configureStore } from '@reduxjs/toolkit';
import { composeWithDevTools } from '@redux-devtools/extension';
import productsReducer from "./reducers/products.js";


export const store = configureStore({
    reducer: {
        products: productsReducer
    },
    devTools: composeWithDevTools()
})