// components/ProductCard.jsx
import React from 'react';
import { useNavigate } from 'react-router-dom';

const ProductCard = ({id, image, price, title }) => {
    const navigate = useNavigate()

    const handleClick = () => {
        navigate(`/каталог/${id}`)
    }

    return (
        <div className="flex flex-col ph:w-40 lg:w-80 p-4">
            <img
                src={image || "https://bebiklub-media-dep.s3.amazonaws.com/media/original_images/mainimagesplaceholderplaceholder.original.png"}
                alt="Product"
                className="ph:w-32 lg:w-72 mb-4 cursor-pointer"
                onClick={(e) => {e.stopPropagation(); navigate(`/каталог/${id}`)}}
            />
            <div className="space-y-2">
                <h1 className="ph:text-xl lg:text-3xl text-deep-dark">{price || "Цена"} ₽</h1>
                <p
                    className="text-gray-600 lg:text-xl line-clamp-2 cursor-pointer hover:text-deep-dark transition-colors"
                    onClick={(e) => {e.stopPropagation(); navigate(`/каталог/${id}`)}}
                >
                    {title || "Название"}
                </p>
                <button
                    className="bg-avocado ph:w-32 lg:w-full h-12 py-2 text-deep-dark rounded-lg hover:bg-green-600 transition-colors mt-4"
                    onClick={() => navigate(`/каталог/${id}`)}
                >
                    Купить
                </button>
            </div>
        </div>
    );
};

export default ProductCard;