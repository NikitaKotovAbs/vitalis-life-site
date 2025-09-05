import { useState } from 'react';
import axios from 'axios';

const PaymentButton = ({ orderData, onSuccess, onError, disabled }) => {
    const [isLoading, setIsLoading] = useState(false);

    const handlePayment = async () => {
        if (disabled) return;

        setIsLoading(true);
        try {
            const response = await axios.post(
                'http://localhost:8080/api/v1/public/payment/create',
                orderData,
                {
                    headers: {
                        'Content-Type': 'application/json',
                    }
                }
            );

            if (response.data && response.data.confirmation && response.data.confirmation.confirmation_url) {
                onSuccess(response.data);
                // Перенаправляем на страницу оплаты
                window.location.href = response.data.confirmation.confirmation_url;
            } else {
                throw new Error('Не удалось получить ссылку для оплаты');
            }
        } catch (error) {
            console.error('Ошибка создания платежа:', error);
            onError(error.response?.data || error.message);
        } finally {
            setIsLoading(false);
        }
    };

    return (
        <button
            onClick={handlePayment}
            disabled={disabled || isLoading}
            className={`bg-avocado rounded-xl w-full h-14 text-black text-opacity-60 text-lg transition-colors ${
                disabled ? 'opacity-50 cursor-not-allowed' : 'hover:bg-green-600'
            }`}
        >
            {isLoading ? 'Создание платежа...' : 'Перейти к оплате'}
        </button>
    );
};

export default PaymentButton;