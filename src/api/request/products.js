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

