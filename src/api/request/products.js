import { api } from '../config.js'
import {createAsyncThunk} from '@reduxjs/toolkit';


export const getProducts = createAsyncThunk(
    'products/getProducts',
    async () => {
        try {
            const response = await api.get('/product/')
            return response.data;
        }catch (error){
            console.error('Ошибка получения данных', error)
            throw error
        }

    }
);

// Добавьте рядом с getProducts
export const getProductById = createAsyncThunk(
  'products/getProductById',
  async (productId, { rejectWithValue }) => {
    try {
      const response = await api.get(`/product/${productId}`);
      return response.data;
    } catch (error) {
      return rejectWithValue(error.response?.data?.message || error.message);
    }
  }
);
