import { useState } from 'react';
import axios from 'axios';

export const useYooKassa = () => {
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null);

    const createPayment = async (orderData) => {
        setLoading(true);
        setError(null);

        try {
            // Для тестового режима используйте эти данные
            const SHOP_ID = '1156359';
            const SECRET_KEY = 'test_MmdRTvLFBiv-dehsErphz-c8gZ0ZKPiolC8iR3MHzCA';

            const response = await axios.post('https://api.yookassa.ru/v3/payments', {
                amount: {
                    value: orderData.amount.toFixed(2),
                    currency: "RUB"
                },
                capture: true,
                confirmation: {
                    type: "redirect",
                    return_url: `${window.location.origin}/payment-success`
                },
                description: `Заказ №${orderData.orderId}`,
                metadata: {
                    orderId: orderData.orderId,
                    userId: orderData.userId
                }
            }, {
                auth: {
                    username: SHOP_ID,
                    password: SECRET_KEY
                },
                headers: {
                    'Idempotence-Key': Date.now().toString()
                }
            });
            return response.data;
        } catch (err) {
            setError(err.response?.data || err.message);
            throw err;
        } finally {
            setLoading(false);
        }
    };

    return { createPayment, loading, error };
};