import {getProductById, getProducts} from "../../api/request/products.js";

const initialState = {
  status: 'idle',
  error: null,
  products: [],
  currentProduct: null, // Добавляем поле для хранения текущего товара
  currentProductStatus: 'idle'
};

const productsReducer = (state = initialState, action) => {
  switch (action.type) {
    // Обработчики для getProducts (оставляем как есть)
    case getProducts.pending.type:
      return { ...state, status: 'loading', error: null };

    case getProducts.fulfilled.type:
      return { ...state, status: 'succeeded', products: action.payload };

    case getProducts.rejected.type:
      return { ...state, status: 'failed', error: action.error.message };

    // Добавляем обработчики для getProductById
    case getProductById.pending.type:
      return {
        ...state,
        currentProductStatus: 'loading',
        currentProduct: null,
        error: null
      };

    case getProductById.fulfilled.type:
      return {
        ...state,
        currentProductStatus: 'succeeded',
        currentProduct: action.payload,

        // Обновляем также общий список, если товара там нет
        products: state.products.some(p => p.id === action.payload.id)
          ? state.products
          : [...state.products, action.payload]
      };

    case getProductById.rejected.type:
      return {
        ...state,
        currentProductStatus: 'failed',
        error: action.payload
      };

    default:
      return state;
  }
};

export default productsReducer;