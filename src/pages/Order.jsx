import { useState, useEffect } from "react";
import useDeviceDetection from "../hooks/useDeviceDetection.js";
import NavTab from "../components/NavTab.jsx";
import car_icon from "../assets/image/order/car_icon.svg";
import house_icon from "../assets/image/order/house_icon.svg";
import arrow from "../assets/image/order/arrow.svg";
import { useDispatch, useSelector } from "react-redux";
import { useCart } from '../hooks/useCart';
import { getProductById } from "../api/request/products.js";
import PaymentButton from "../components/PaymentButton.jsx";

export default function Order() {
    const { isMobile } = useDeviceDetection();
    const [delivery, setDelivery] = useState(false);
    const [errors, setErrors] = useState({});
    const [touched, setTouched] = useState({});
    const [orderData, setOrderData] = useState({
        name: '',
        surname: '',
        email: '',
        phone: '',
        comment: '',
        address: ''
    });

    const dispatch = useDispatch();
    const { products } = useSelector((state) => state.products);
    const { cart } = useCart();
    const [cartProducts, setCartProducts] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const fetchCartProducts = async () => {
            try {
                const productsData = [];
                for (const item of cart) {
                    const cachedProduct = products.find(p => p.id === item.productId);
                    if (cachedProduct) {
                        productsData.push({...cachedProduct, quantity: item.quantity});
                    } else {
                        const response = await dispatch(getProductById(item.productId));
                        if (response.payload) {
                            productsData.push({...response.payload, quantity: item.quantity});
                        }
                    }
                }
                setCartProducts(productsData);
            } catch (error) {
                console.error("Error fetching cart products:", error);
            } finally {
                setLoading(false);
            }
        };

        if (cart.length > 0) {
            fetchCartProducts();
        } else {
            setCartProducts([]);
            setLoading(false);
        }
    }, [cart, dispatch, products]);

    // Валидация формы
    const validateForm = () => {
        const newErrors = {};

        if (!orderData.name.trim()) newErrors.name = 'Имя обязательно';
        if (!orderData.surname.trim()) newErrors.surname = 'Фамилия обязательна';
        if (!orderData.email.trim()) {
            newErrors.email = 'Email обязателен';
        } else if (!/\S+@\S+\.\S+/.test(orderData.email)) {
            newErrors.email = 'Некорректный email';
        }
        if (!orderData.phone.trim()) {
            newErrors.phone = 'Телефон обязателен';
        } else if (!/^[\+]?[0-9\s\-\(\)]{10,}$/.test(orderData.phone)) {
            newErrors.phone = 'Некорректный телефон';
        }
        if (delivery && !orderData.address.trim()) {
            newErrors.address = 'Адрес обязателен при доставке';
        }

        return newErrors;
    };

    const handleDeliveryClick = () => {
        setDelivery(true);
        setTouched(prev => ({ ...prev, address: true }));
    };

    const handleInputChange = (field, value) => {
        setOrderData(prev => ({
            ...prev,
            [field]: value
        }));

        // Помечаем поле как "тронутое" для показа ошибок
        setTouched(prev => ({ ...prev, [field]: true }));

        // Очищаем ошибку при изменении
        if (errors[field]) {
            setErrors(prev => ({ ...prev, [field]: '' }));
        }
    };

    const handleBlur = (field) => {
        setTouched(prev => ({ ...prev, [field]: true }));
        const newErrors = validateForm();
        setErrors(prev => ({ ...prev, [field]: newErrors[field] || '' }));
    };

    const handlePickUpClick = () => {
        setDelivery(false);
        // Очищаем ошибку адреса при выборе самовывоза
        if (errors.address) {
            setErrors(prev => ({ ...prev, address: '' }));
        }
    };

    const calculateDiscountedPrice = (price, discount) => {
        return Math.round(price * (1 - discount / 100));
    };

    const getSubtotal = () => {
        return cartProducts.reduce((total, item) => {
            const price = item.discount > 0
                ? calculateDiscountedPrice(item.price, item.discount)
                : item.price;
            return total + (price * item.quantity);
        }, 0);
    };

    const getTotalQuantity = () => {
        return cartProducts.reduce((total, item) => total + item.quantity, 0);
    };

    const calculateDeliveryCost = () => {
        const subtotal = getSubtotal();
        if (subtotal >= 5000) return 0;
        else if (subtotal >= 3000) return Math.round(subtotal * 0.10);
        else if (subtotal >= 1000) return Math.round(subtotal * 0.15);
        else return Math.round(subtotal * 0.20);
    };

    const getDeliveryText = () => {
        const subtotal = getSubtotal();
        const deliveryCost = calculateDeliveryCost();
        return subtotal >= 5000 ? 'Бесплатно' : `${deliveryCost} ₽`;
    };

    const getTotal = () => {
        const subtotal = getSubtotal();
        return delivery ? subtotal + calculateDeliveryCost() : subtotal;
    };

    const getOrderDataForPayment = () => {
        const subtotal = getSubtotal();
        const deliveryCost = calculateDeliveryCost();
        const total = delivery ? subtotal + deliveryCost : subtotal;

        const items = cartProducts.map(item => ({
            productId: item.id,
            quantity: item.quantity,
            price: item.discount > 0
                ? calculateDiscountedPrice(item.price, item.discount)
                : item.price,
            name: item.name
        }));

        return {
            amount: total,
            currency: "RUB",
            cartItems: items,
            email: orderData.email,
            phone: orderData.phone,
            customerName: `${orderData.name} ${orderData.surname}`.trim(),
            deliveryType: delivery ? 'delivery' : 'pickup',
            deliveryAddress: delivery ? orderData.address : 'Самовывоз',
            comment: orderData.comment,
            returnUrl: `${window.location.origin}/payment-success`,
            description: `Заказ из ${cartProducts.length} товаров на сумму ${total} RUB`
        };
    };

    const isFormValid = () => {
        const errors = validateForm();
        return Object.keys(errors).length === 0;
    };

    if (loading) {
        return <div className="p-4 max-w-7xl mx-auto"><p>Загрузка заказа...</p></div>;
    }

    const subtotal = getSubtotal();
    const deliveryCost = calculateDeliveryCost();

    return (
        <div className="p-4 space-y-8 max-w-7xl mx-auto">
            {isMobile ? (
                <button onClick={() => window.history.back()} className="inline-flex items-center justify-center px-6 py-3 sm:py-2 rounded-lg bg-deep-dark bg-opacity-5 hover:bg-opacity-10 transition-all duration-300 cursor-pointer">
                    <span className="text-deep-dark text-opacity-75 font-medium text-sm sm:text-base">
                        &lt; Назад
                    </span>
                </button>
            ) : (
                <NavTab items={['Главная', 'Оформление заказа']}/>
            )}

            <div className="flex flex-col space-y-4">
                <h1 className="text-xl">Оформление заказа</h1>
                <div className="flex flex-col space-y-3">
                    <div>
                        <input
                            type="text"
                            placeholder="Имя *"
                            value={orderData.name}
                            onChange={(e) => handleInputChange('name', e.target.value)}
                            onBlur={() => handleBlur('name')}
                            className={`bg-black bg-opacity-5 rounded-lg p-4 w-full ${
                                errors.name && touched.name ? 'border border-red-500' : ''
                            }`}
                        />
                        {errors.name && touched.name && (
                            <p className="text-red-500 text-sm mt-1">{errors.name}</p>
                        )}
                    </div>

                    <div>
                        <input
                            type="text"
                            placeholder="Фамилия *"
                            value={orderData.surname}
                            onChange={(e) => handleInputChange('surname', e.target.value)}
                            onBlur={() => handleBlur('surname')}
                            className={`bg-black bg-opacity-5 rounded-lg p-4 w-full ${
                                errors.surname && touched.surname ? 'border border-red-500' : ''
                            }`}
                        />
                        {errors.surname && touched.surname && (
                            <p className="text-red-500 text-sm mt-1">{errors.surname}</p>
                        )}
                    </div>

                    <div>
                        <input
                            type="email"
                            placeholder="Эл.почта *"
                            value={orderData.email}
                            onChange={(e) => handleInputChange('email', e.target.value)}
                            onBlur={() => handleBlur('email')}
                            className={`bg-black bg-opacity-5 rounded-lg p-4 w-full ${
                                errors.email && touched.email ? 'border border-red-500' : ''
                            }`}
                        />
                        {errors.email && touched.email && (
                            <p className="text-red-500 text-sm mt-1">{errors.email}</p>
                        )}
                    </div>

                    <div>
                        <input
                            type="tel"
                            placeholder="Телефон *"
                            value={orderData.phone}
                            onChange={(e) => handleInputChange('phone', e.target.value)}
                            onBlur={() => handleBlur('phone')}
                            className={`bg-black bg-opacity-5 rounded-lg p-4 w-full ${
                                errors.phone && touched.phone ? 'border border-red-500' : ''
                            }`}
                        />
                        {errors.phone && touched.phone && (
                            <p className="text-red-500 text-sm mt-1">{errors.phone}</p>
                        )}
                    </div>

                    <input
                        type="text"
                        placeholder="Комментарий к заказу"
                        value={orderData.comment}
                        onChange={(e) => handleInputChange('comment', e.target.value)}
                        className="bg-black bg-opacity-5 rounded-lg p-4"
                    />
                </div>
            </div>

            <div className="flex flex-col space-y-4">
                <h1 className="text-xl">Способ получения</h1>

                <div
                    className={`space-y-2 border-2 rounded-lg p-4 cursor-pointer transition-colors ${
                        delivery ? 'border-avocado-dark bg-green-50' : 'border-gray-300'
                    }`}
                    onClick={handleDeliveryClick}
                >
                    <img src={car_icon} alt="car_icon"/>
                    <h1>Доставка</h1>
                    <p className="text-sm text-black text-opacity-45">Курьером по г. Москва</p>
                    {delivery && (
                        <p className="text-sm font-semibold text-avocado-dark">
                            {subtotal >= 5000 ? 'Бесплатно' : `+${deliveryCost} ₽`}
                        </p>
                    )}
                </div>

                <div
                    className={`space-y-2 border-2 rounded-lg p-4 cursor-pointer transition-colors ${
                        !delivery ? 'border-avocado-dark bg-green-50' : 'border-gray-300'
                    }`}
                    onClick={handlePickUpClick}
                >
                    <img src={house_icon} alt="car_icon"/>
                    <h1>Самовывоз</h1>
                    <p className="text-sm text-black text-opacity-45">При встрече в г. Москва</p>
                    {!delivery && <p className="text-sm font-semibold text-avocado-dark">Бесплатно</p>}
                </div>

                {delivery ? (
                    <div>
                        <input
                            type="text"
                            placeholder="Адрес доставки *"
                            value={orderData.address}
                            onChange={(e) => handleInputChange('address', e.target.value)}
                            onBlur={() => handleBlur('address')}
                            className={`bg-black bg-opacity-5 rounded-lg p-4 w-full ${
                                errors.address && touched.address ? 'border border-red-500' : ''
                            }`}
                        />
                        {errors.address && touched.address && (
                            <p className="text-red-500 text-sm mt-1">{errors.address}</p>
                        )}
                    </div>
                ) : (
                    <div className="space-y-2 border-2 border-gray-300 rounded-lg p-4">
                        <p className="text-sm text-gray-400">Адрес</p>
                        <div className="flex flex-row items-center justify-between">
                            <h1>Московская обл, г. Красногорск, мкр. Опалиха, аллея Золотая, д. 1</h1>
                            <img src={arrow} alt="arrow" className="w-4 h-4"/>
                        </div>
                    </div>
                )}
            </div>

            <div className="flex flex-col space-y-4 border border-black border-opacity-10 rounded-lg p-8">
                <div className="flex flex-row justify-between">
                    <div className="text-black space-y-3 text-opacity-45">
                        <h1>Товаров в корзине</h1>
                        <h1>Общая стоимость</h1>
                        <h1>Доставка</h1>
                    </div>
                    <div className="space-y-3 text-right">
                        <h1>{getTotalQuantity()} шт.</h1>
                        <h1>{subtotal} ₽</h1>
                        <h1>{delivery ? getDeliveryText() : 'Бесплатно'}</h1>
                    </div>
                </div>

                <div className="border-t border-black border-opacity-10 pt-4">
                    <div className="flex flex-row justify-between text-xl font-bold">
                        <h1>Итог</h1>
                        <h1>{getTotal()} ₽</h1>
                    </div>
                </div>

                <PaymentButton
                    orderData={getOrderDataForPayment()}
                    onSuccess={(payment) => {
                        console.log('Платеж создан:', payment);
                        // Очищаем корзину после успешного создания платежа
                        localStorage.removeItem('cart_items');
                    }}
                    onError={(error) => {
                        console.error('Ошибка платежа:', error);
                    }}
                    disabled={!isFormValid() || cartProducts.length === 0}
                />

                <p className="text-sm text-black text-opacity-35 text-center">
                    Нажимая на кнопку, Вы даёте согласие на{' '}
                    <a href="/public/Согласие на обработку ПД.docx" download className="underline hover:text-blue-600 cursor-pointer">
                        Обработку персональных данных
                    </a>{' '}
                    и согласны с{' '}
                    <a href="/public/Политика конфиденциальности.docx" download className="underline hover:text-blue-600 cursor-pointer">
                        Политикой конфиденциальности
                    </a>.
                </p>
            </div>
        </div>
    )
}