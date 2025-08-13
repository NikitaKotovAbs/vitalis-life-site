import React, {useEffect} from 'react';
import car from "../assets/image/home/car.svg"
import leaf from "../assets/image/home/leaf.svg"
import message from "../assets/image/home/message.svg"
import {useParams} from 'react-router-dom';
import {useSelector, useDispatch} from 'react-redux';
import {getProductById} from "../api/request/products.js";
import useDeviceDetection from "../hooks/useDeviceDetection.js";
import NavTab from "../components/NavTab.jsx";
import {useCart} from "../hooks/useCart.js";

export default function Product() {
    const {isMobile, isLaptop, isTablet} = useDeviceDetection();
    const {productId} = useParams();
    const {getQuantity, updateQuantity, addToCart} = useCart();
    const quantity = getQuantity(Number(productId));
    const dispatch = useDispatch();


    const handleIncrement = () => {
        if (quantity === 0) {
            // Если товара нет в корзине, добавляем его с количеством 1
            addToCart(Number(productId), 1);
        } else {
            // Если товар уже есть, увеличиваем количество
            updateQuantity(Number(productId), quantity + 1);
        }
    };

    const handleDecrement = () => {
        if (quantity > 0) {
            updateQuantity(Number(productId), quantity - 1);
        }
    };

    const {
        currentProduct,
        currentProductStatus,
        products,
        error
    } = useSelector((state) => state.products);

    useEffect(() => {
        const cachedProduct = products.find(item => item.id === parseInt(productId));
        if (!cachedProduct) {
            dispatch(getProductById(productId));
        }
    }, [productId, dispatch, products]);

    const product = products.find(item => item.id === parseInt(productId)) || currentProduct;

    // Вычисляем цену со скидкой
    const calculateDiscountedPrice = (originalPrice, discount) => {
        if (!originalPrice || !discount) return originalPrice;
        return Math.round(originalPrice * (1 - discount / 100));
    };

    if (currentProductStatus === 'loading') {
        return (
            <div className="flex justify-center items-center h-64">
                <p>Загрузка товара...</p>
            </div>
        );
    }

    if (currentProductStatus === 'failed') {
        return (
            <div className="p-4">
                <div className="bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded">
                    Ошибка загрузки: {error}
                    <button
                        onClick={() => dispatch(getProductById(productId))}
                        className="ml-4 bg-red-500 text-white px-3 py-1 rounded"
                    >
                        Повторить
                    </button>
                </div>
            </div>
        );
    }

    if (!product) {
        return (
            <div className="p-4 text-center">
                <p className="text-lg text-gray-600">Товар не найден</p>
            </div>
        );
    }

    const originalPrice = product.price || 0;
    const discountedPrice = calculateDiscountedPrice(originalPrice, product.discount) || originalPrice;

    return (
        <div className="flex flex-col p-6 justify-start mx-auto">
            {isMobile ? (
                <button
                    onClick={() => window.history.back()}
                    className="mb-4 inline-flex items-center px-4 py-2 rounded-lg bg-gray-100 hover:bg-gray-200 transition-colors"
                >
                    <span className="text-gray-700 font-medium text-sm">
                        &lt; Назад
                    </span>
                </button>
            ) : (
                <div className="pl-20 pb-10">
                    <NavTab items={['Главная', 'Каталог', product.title]} className="mb-6"/>
                </div>

            )}

            <div className="flex ph:flex-col md:flex-row lg:justify-around gap-8">
                <div className="md:w-1/2 lg:w-96 border">
                    <img
                        src={`${import.meta.env.VITE_S3_ENDPOINT}/${import.meta.env.VITE_S3_BUCKET}/products/${product.image}`}
                        alt={product.title}
                        className="ph:w-full lg:w-[30vw] rounded-lg shadow-md"
                    />
                </div>

                <div className="md:w-1/2 space-y-4">

                    <h1 className="text-2xl">{product.title}</h1>
                    <div className="flex items-center gap-2">
                        {product.discount > 0 ? (
                            <>
                                <span className="text-3xl font-bold text-avocado">
                                    {discountedPrice} ₽
                                </span>
                                <span className="line-through text-gray-500 text-xl">
                                    {originalPrice} ₽
                                </span>
                                <span className="bg-green-100 text-green-800 px-2 py-1 rounded text-sm">
                                    -{product.discount}%
                                </span>
                            </>
                        ) : (
                            <span className="text-3xl font-bold">
                                {originalPrice} ₽
                            </span>
                        )}
                    </div>
                    {isLaptop && (
                        <div className="py-4">
                            <p className="text-gray-700 opacity-80 text-xl">{product.description}</p>
                        </div>
                    )}


                    <div className="flex ph:flex-col lg:flex-row gap-4">
                        <div className="flex items-center ph:gap-5 lg:gap-2">
                            <img src={car} alt="car" className="h-6 w-6 flex-shrink-0"/>
                            <p>Доставка до 2 дней</p>
                        </div>
                        <div className="flex items-center ph:gap-5 lg:gap-2">
                            <img src={leaf} alt="leaf" className="h-6 w-6 flex-shrink-0"/>
                            <p>Натуральные ингридиенты</p>
                        </div>
                        <div className="flex items-center ph:gap-5 lg:gap-2">
                            <img src={message} alt="message" className="h-6 w-6 flex-shrink-0"/>
                            <p>20+ довольных клиентов</p>
                        </div>
                    </div>

                    <div className="flex flex-row gap-4 text-xl">
                        <button
                            className={`flex items-center justify-center hover:bg-gray-400 w-10 h-10 rounded-lg transition-colors ${
                                quantity === 0 ? 'opacity-50 cursor-not-allowed' : ''
                            }`}
                            onClick={handleDecrement}
                            disabled={quantity === 0}
                        >
                            -
                        </button>

                        <p className="flex items-center text-gray-700 text-opacity-75 w-8 justify-center">
                            {quantity}
                        </p>

                        <button
                            className="flex items-center justify-center hover:bg-gray-400 w-10 h-10 rounded-lg transition-colors"
                            onClick={handleIncrement}
                        >
                            +
                        </button>
                    </div>

                    {isMobile && (
                        <div className="py-4">
                            <p className="text-gray-700">{product.description}</p>
                        </div>
                    )}
                </div>
            </div>
            {isTablet && (
                <div className="py-4 max-w-xl">
                    <p className="text-gray-700 opacity-80 text-xl">{product.description}</p>
                </div>
            )}
        </div>
    );
}