import {useState, useEffect, useCallback} from 'react';

const CART_KEY = 'cart_items';
const CART_UPDATED_EVENT = 'cartUpdated';

export const useCart = () => {
    const [cart, setCart] = useState(() => {
        try {
            const savedCart = localStorage.getItem(CART_KEY);
            return savedCart ? JSON.parse(savedCart) : [];
        } catch (error) {
            console.error('Ошибка чтения корзины:', error);
            return [];
        }
    });


    const syncCartFromStorage = useCallback(() => {
        try {
            const savedCart = localStorage.getItem(CART_KEY);
            if (savedCart) {
                const parsedCart = JSON.parse(savedCart);
                setCart(parsedCart);
            }
        } catch (error) {
            console.error('Ошибка синхронизации корзины:', error);
        }
    }, []);

    useEffect(() => {
        try {
            localStorage.setItem(CART_KEY, JSON.stringify(cart));
            window.dispatchEvent(new CustomEvent(CART_UPDATED_EVENT, {
                detail: { cart }
            }));
        } catch (error) {
            console.error('Ошибка сохранения корзины:', error);
        }
    }, [cart]);

    useEffect(() => {
        const handleStorageChange = (event) => {
            if (event.key === CART_KEY && event.newValue) {
                syncCartFromStorage();
            }
        };

        const handleCartUpdated = (event) => {
            // Для кастомного события обновляем состояние напрямую
            setCart(event.detail.cart);
        };

        window.addEventListener('storage', handleStorageChange);
        window.addEventListener(CART_UPDATED_EVENT, handleCartUpdated);

        return () => {
            window.removeEventListener('storage', handleStorageChange);
            window.removeEventListener(CART_UPDATED_EVENT, handleCartUpdated);
        };
    }, [syncCartFromStorage]);

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

    const getTotalPrice = () => {
        return cart.reduce((total, item) => {
            const price = item.discount > 0
                ? item.price * (1 - item.discount / 100)
                : item.price;
            return total + (price * item.quantity);
        }, 0);
    };

    return {
        cart,
        addToCart,
        updateQuantity,
        removeFromCart,
        getQuantity,
        clearCart,
        getTotalItems,
        getTotalPrice,
        syncCartFromStorage
    };
};