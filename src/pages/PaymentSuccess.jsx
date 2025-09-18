import { useEffect } from 'react';
import { useSearchParams } from 'react-router-dom';

const PaymentSuccess = () => {
    const [searchParams] = useSearchParams();

    useEffect(() => {
        // Очищаем корзину при загрузке страницы успеха
        localStorage.removeItem('cart_items');

        // Можно также отправить аналитику или другие действия
        console.log('Платеж успешно завершен');
    }, []);

    return (
        <div className="p-4 max-w-7xl mx-auto text-center">
            <h2 className="text-2xl font-bold text-green-600 mb-4">Оплата прошла успешно!</h2>
            <p>Ваш заказ принят в обработку. Чек и информация о заказе отправлены на вашу почту.</p>

            <button
                onClick={() => window.location.href = '/'}
                className="mt-6 bg-avocado text-white px-6 py-3 rounded-lg hover:bg-green-600"
            >
                Вернуться на главную
            </button>
        </div>
    );
};

export default PaymentSuccess;