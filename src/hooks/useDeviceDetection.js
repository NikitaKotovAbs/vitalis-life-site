import { useState, useEffect } from 'react';

const useDeviceDetection = () => {
    const [isMobile, setIsMobile] = useState(false);

    useEffect(() => {
        const handleResize = () => {
            setIsMobile(window.innerWidth < 768); // 768px - breakpoint для мобильных устройств
        };

        // Проверяем сразу при монтировании
        handleResize();

        // Добавляем слушатель изменения размера
        window.addEventListener('resize', handleResize);

        // Убираем слушатель при размонтировании
        return () => window.removeEventListener('resize', handleResize);
    }, []);

    return isMobile;
};

export default useDeviceDetection;