export const calculateDiscountedPrice = (price, discount) => {
    return Math.round(price * (1 - discount / 100));
};