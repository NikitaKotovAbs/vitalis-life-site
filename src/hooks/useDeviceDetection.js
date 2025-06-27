import { useState, useEffect } from 'react';

const useDeviceDetection = () => {
    const [deviceType, setDeviceType] = useState({
        isMobile: false,
        isTablet: false,
        isLaptop: false,
    });

    useEffect(() => {
        const handleResize = () => {
            const width = window.innerWidth;
            setDeviceType({
                isMobile: width < 768,
                isTablet: width >= 768 && width <= 1024,
                isLaptop: width > 1024,
            });
        };

        // Проверяем сразу при монтировании
        handleResize();

        // Добавляем слушатель изменения размера
        window.addEventListener('resize', handleResize);

        // Убираем слушатель при размонтировании
        return () => window.removeEventListener('resize', handleResize);
    }, []);

    return deviceType;
};

export default useDeviceDetection;