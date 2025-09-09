export const validateOrderForm = (orderData, delivery) => {
    const errors = {};

    if (!orderData.name.trim()) errors.name = 'Имя обязательно';
    if (!orderData.surname.trim()) errors.surname = 'Фамилия обязательна';

    if (!orderData.email.trim()) {
        errors.email = 'Email обязателен';
    } else if (!/\S+@\S+\.\S+/.test(orderData.email)) {
        errors.email = 'Некорректный email';
    }

    // Валидация телефона
    const cleanedPhone = orderData.phone.replace(/\D/g, '');
    if (cleanedPhone.length !== 11) {
        errors.phone = 'Некорректный телефон (должно быть 11 цифр)';
    } else if (!cleanedPhone.startsWith('7')) {
        errors.phone = 'Телефон должен начинаться с +7';
    }

    if (delivery && !orderData.address.trim()) {
        errors.address = 'Адрес обязателен при доставке';
    }

    return errors;
};

export const formatPhoneNumber = (value) => {
    // Удаляем все нецифровые символы, кроме начального +7
    let cleaned = value.replace(/\D/g, '');

    // Если номер начинается с 7, добавляем + в начало
    if (cleaned.startsWith('7')) {
        cleaned = '+' + cleaned;
    }

    // Убеждаемся, что начинается с +7
    if (!cleaned.startsWith('+7')) {
        cleaned = '+7' + cleaned.replace(/^\+?/, '');
    }

    // Ограничиваем длину номера (максимум 11 цифр после +7)
    const digitsOnly = cleaned.slice(2).replace(/\D/g, '');
    const limitedDigits = digitsOnly.slice(0, 10);

    // Форматируем номер по шаблону +7(XXX)XXX-XX-XX
    if (limitedDigits.length === 0) return '+7';
    if (limitedDigits.length <= 3) return `+7(${limitedDigits}`;
    if (limitedDigits.length <= 6) return `+7(${limitedDigits.slice(0, 3)})${limitedDigits.slice(3, 6)}`;
    if (limitedDigits.length <= 8) return `+7(${limitedDigits.slice(0, 3)})${limitedDigits.slice(3, 6)}-${limitedDigits.slice(6, 8)}`;

    return `+7(${limitedDigits.slice(0, 3)})${limitedDigits.slice(3, 6)}-${limitedDigits.slice(6, 8)}-${limitedDigits.slice(8, 10)}`;
};