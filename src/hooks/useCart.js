import {useState, useEffect} from 'react';

const CART_KEY = 'cart_items';

export const useCart = () => {
    const [cart, setCart] = useState(() => {
        // Инициализация из localStorage сразу при создании хука
        try {
            const savedCart = localStorage.getItem(CART_KEY);
            return savedCart ? JSON.parse(savedCart) : [];
        } catch (error) {
            console.error('Ошибка чтения корзины:', error);
            return [];
        }
    });

    // Автосохранение при любом изменении корзины
    useEffect(() => {
        try {
            localStorage.setItem(CART_KEY, JSON.stringify(cart));
        } catch (error) {
            console.error('Ошибка сохранения корзины:', error);
        }
    }, [cart]);

    const addToCart = (productId, quantity = 1) => {
        const productIdNum = Number(productId);
        setCart(prevCart => {
            const existingItem = prevCart.find(item => item.productId === productIdNum);

            if (existingItem) {
                return prevCart.map(item =>
                    item.productId === productIdNum
                        ? {...item, quantity: item.quantity + quantity}
                        : item
                );
            }

            return [...prevCart, {productId: productIdNum, quantity}];
        });
    };

    const updateQuantity = (productId, newQuantity) => {
        if (newQuantity < 1) {
            removeFromCart(productId);
            return;
        }

        setCart(prevCart => {
            const existingItem = prevCart.find(item => item.productId === productId);

            if (existingItem) {
                return prevCart.map(item =>
                    item.productId === productId
                        ? {...item, quantity: newQuantity}
                        : item
                );
            }

            return [...prevCart, {productId, quantity: newQuantity}];
        });
    };

    const removeFromCart = (productId) => {
        setCart(prevCart => prevCart.filter(item => item.productId !== productId));
    };

    const getQuantity = (productId) => {
        const item = cart.find(item => item.productId === productId);
        return item ? item.quantity : 0;
    };

    const clearCart = () => {
        setCart([]);
    };

    const getTotalItems = () => {
        return cart.reduce((total, item) => total + item.quantity, 0);
    };

    return {
        cart,
        addToCart,
        updateQuantity,
        removeFromCart,
        getQuantity,
        clearCart,
        getTotalItems
    };
};