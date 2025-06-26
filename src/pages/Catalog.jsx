import useDeviceDetection from "../hooks/useDeviceDetection";
import NavTab from "../components/NavTab";
import ProductCard from "../components/ProductCard";
import React, {useEffect} from "react";
import {useDispatch, useSelector} from "react-redux";
import {getProducts} from "../api/request/products.js";

export default function Catalog() {
    const dispatch = useDispatch();
    const {products, status, error} = useSelector((state) => state.products);
    const isMobile = useDeviceDetection();

    useEffect(() => {
        dispatch(getProducts());
    }, [dispatch]);

    // Общий return с условиями для loading, failed и пустого списка
    return (
        <div className="p-4 space-y-8">
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
                <NavTab items={['Главная', 'Каталог']}/>
            )}
            {/* Проверка состояний */}
            {status === 'loading' && (
                <div className="flex justify-center items-center h-64">
                    <h1>Загрузка...</h1>
                </div>
            )}

            {status === 'failed' && (
                <>
                    <div className="bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded relative">
                        <strong className="font-bold">Ошибка!</strong>
                        <span className="block sm:inline"> {error}</span>
                        <button
                            onClick={() => dispatch(getProducts())}
                            className="absolute top-0 bottom-0 right-0 px-4 py-3"
                        >
                            <svg className="fill-current h-6 w-6 text-red-500" xmlns="http://www.w3.org/2000/svg"
                                 viewBox="0 0 20 20">
                                <path
                                    d="M14.348 14.849a1.2 1.2 0 0 1-1.697 0L10 11.819l-2.651 3.029a1.2 1.2 0 1 1-1.697-1.697l2.758-3.15-2.759-3.152a1.2 1.2 0 1 1 1.697-1.697L10 8.183l2.651-3.031a1.2 1.2 0 1 1 1.697 1.697l-2.758 3.152 2.758 3.15a1.2 1.2 0 0 1 0 1.698z"/>
                            </svg>
                        </button>
                    </div>
                    <button
                        onClick={() => dispatch(getProducts())}
                        className="bg-avocado text-white px-4 py-2 rounded hover:bg-green-600 transition-colors"
                    >
                        Попробовать снова
                    </button>
                </>
            )}

            {status === 'succeeded' && products.length === 0 && (
                <div className="text-center py-10">
                    <p className="text-gray-500 text-lg">Товары не найдены</p>
                </div>
            )}
            <div className="px-4 space-y-4">
                <h1 className="text-2xl">Каталог</h1>
                {/*<div className="flex justify-center items-center bg-avocado h-14 rounded-xl">*/}
                {/*    <p className="text-deep-dark text-opacity-75">Соки из ростков и корней пшеницы</p>*/}
                {/*</div>*/}
            </div>

            {status === 'succeeded' && products.length > 0 && (

                <div className="grid ph:grid-cols-2 md:grid-cols-4">
                    {products.map(product => (
                        <ProductCard
                            key={product.id}
                            id={product.id}
                            price={product.price}
                            title={product.title}
                            discount={product.discount}
                            image={`${import.meta.env.VITE_S3_ENDPOINT}/${import.meta.env.VITE_S3_BUCKET}/${product.image}`}
                        />
                    ))}
                </div>

            )}
        </div>
    );
}