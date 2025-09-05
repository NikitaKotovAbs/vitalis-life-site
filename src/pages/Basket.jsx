import {useCart} from '../hooks/useCart';
import useDeviceDetection from "../hooks/useDeviceDetection";
import NavTab from "../components/NavTab";
import {FiTrash2, FiPlus, FiMinus} from 'react-icons/fi';
import {useDispatch, useSelector} from "react-redux";
import {useEffect, useState} from "react";
import {getProductById} from "../api/request/products.js";
import { useNavigate } from 'react-router-dom';

export default function Basket() {
    const {isMobile} = useDeviceDetection();
    const navigate = useNavigate()
    const dispatch = useDispatch();
    const {products} = useSelector((state) => state.products);
    const {
        cart,
        updateQuantity,
        removeFromCart,

    } = useCart();

    const handleOrderClick = () => {
        navigate(`/оформление-заказа`)
    }

    const [cartProducts, setCartProducts] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const fetchCartProducts = async () => {
            try {
                const productsData = [];

                for (const item of cart) {
                    // Проверяем, есть ли продукт уже в Redux store
                    const cachedProduct = products.find(p => p.id === item.productId);

                    if (cachedProduct) {
                        productsData.push({...cachedProduct, quantity: item.quantity});
                    } else {
                        // Если нет в кеше, запрашиваем с сервера
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

    const calculateDiscountedPrice = (price, discount) => {
        return Math.round(price * (1 - discount / 100));
    };

    const getTotalPrice = () => {
        return cartProducts.reduce((total, item) => {
            const price = item.discount > 0
                ? calculateDiscountedPrice(item.price, item.discount)
                : item.price;
            return total + (price * item.quantity);
        }, 0);
    };

    if (loading) {
        return (
            <div className="p-4 max-w-7xl mx-auto">
                <p>Загрузка корзины...</p>
            </div>
        );
    }

    return (
        <div className="p-4 space-y-8 max-w-7xl mx-auto">
            {isMobile ? (
                <button
                    onClick={() => window.history.back()}
                    className="inline-flex items-center justify-center px-6 py-3 sm:py-2 rounded-lg bg-deep-dark bg-opacity-5 hover:bg-opacity-10 transition-all duration-300 cursor-pointer"
                >
                    <span className="text-deep-dark text-opacity-75 font-medium text-sm sm:text-base">
                        &lt; Назад
                    </span>
                </button>
            ) : (
                <NavTab items={['Главная', 'Корзина']}/>
            )}

            <h1 className="text-2xl font-bold">Ваша корзина</h1>

            {cart.length === 0 ? (
                <p className="text-center py-10 text-gray-500">Корзина пуста</p>
            ) : (
                <div className="flex flex-col lg:flex-row gap-8">
                    {/* Основной блок с товарами */}
                    <div className="flex-1 space-y-6">
                        {cartProducts.map(item => (
                            <div key={item.id} className="flex flex-col md:flex-row md:justify-between gap-4 p-4 border rounded-lg">
                                {/* Изображение */}
                                <div className="flex flex-row gap-4 items-center">
                                    <div className="flex-shrink-0">
                                        <img
                                            src={`${import.meta.env.VITE_S3_ENDPOINT}/${import.meta.env.VITE_S3_BUCKET}/products/${item.image}`}
                                            alt={item.title}
                                            className="w-32 h-32 md:w-52 md:h-52 object-cover rounded-lg"
                                        />
                                    </div>
                                    <div>
                                        <h2 className="text-lg font-semibold line-clamp-2">{item.title}</h2>
                                        <div className="flex items-center gap-4 my-2">
                                            {item.discount > 0 ? (
                                                <>
                                                <span className="text-lg md:text-xl font-bold text-avocado">
                                                    {calculateDiscountedPrice(item.price, item.discount)} ₽
                                                </span>
                                                    <span className="line-through text-gray-500">
                                                    {item.price} ₽
                                                </span>
                                                </>
                                            ) : (
                                                <span className="text-lg md:text-xl font-bold">
                                                {item.price} ₽
                                            </span>
                                            )}
                                        </div>
                                    </div>
                                </div>


                                {/* Информация о товаре */}
                                {/* Управление количеством */}
                                <div className="flex items-center ph:gap-16">
                                    <button
                                        onClick={() => updateQuantity(item.id, item.quantity - 1)}
                                        className="p-2 rounded-full hover:bg-gray-100"
                                        disabled={item.quantity <= 1}
                                    >
                                        <FiMinus/>
                                    </button>

                                    <span className="w-8 text-center">
                                            {item.quantity}
                                        </span>

                                    <button
                                        onClick={() => updateQuantity(item.id, item.quantity + 1)}
                                        className="p-2 rounded-full hover:bg-gray-100"
                                    >
                                        <FiPlus/>
                                    </button>

                                    <button
                                        onClick={() => removeFromCart(item.id)}
                                        className="p-2 text-red-500 hover:bg-red-50 rounded-full"
                                    >
                                        <FiTrash2 size={18}/>
                                    </button>
                                </div>
                            </div>
                        ))}
                    </div>

                    {/* Блок с итогами (будет справа на lg экранах) */}
                    <div className="lg:w-80 border p-4 rounded-lg h-fit sticky top-4">
                        <div className="flex flex-col space-y-4">
                            <h1 className="text-lg font-semibold">Товаров в корзине</h1>
                            <div className="flex justify-between">
                                <h1 className="text-lg font-semibold">Итого:</h1>
                                <span className="text-xl font-bold">
                                    {getTotalPrice()} ₽
                                </span>
                            </div>

                            <button
                                className="w-full bg-avocado text-black py-3 rounded-lg hover:bg-green-600 transition-colors"
                                onClick={handleOrderClick}
                            >
                                Оформить заказ
                            </button>

                            <p className="text-sm text-gray-600">
                                Нажимая на кнопку, Вы даёте согласие на{' '}
                                <a
                                    href="/public/Согласие на обработку ПД.docx"
                                    download
                                    className="underline hover:text-blue-600 cursor-pointer"
                                >
                                    Обработку персональных данных
                                </a>{' '}
                                и согласны с{' '}
                                <a
                                    href="/public/Политика конфиденциальности.docx"
                                    download
                                    className="underline hover:text-blue-600 cursor-pointer"
                                >
                                    Политикой конфиденциальности
                                </a>.
                            </p>
                        </div>
                    </div>
                </div>
            )}
        </div>
    );
}