import React, { useEffect } from 'react';
import logo from '../../assets/image/footer/LogotypeFooter.svg';
import { Link, useLocation } from "react-router-dom";
// Импортируем функцию из утилит
import { downloadDocument } from '../../utils/downloadDocument.js';

const Footer = () => {
    const location = useLocation();

    // Автоматическая прокрутка вверх при изменении маршрута
    useEffect(() => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    }, [location.pathname]);

    // Функция для плавной прокрутки вверх по клику на кнопку
    const scrollToTop = () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    };

    return (
        <footer className="relative bg-cover bg-center py-8 px-4 sm:py-12 sm:px-6 lg:py-16 lg:px-8"
                style={{
                    backgroundImage: 'url(../../src/assets/image/footer/Footer.png)',
                    backgroundColor: 'rgba(0, 0, 0, 0.6)'
                }}>

            {/* Затемненный оверлей */}
            <div className="absolute inset-0 bg-black bg-opacity-50"></div>

            <div className="relative z-10 mx-auto text-white">
                <div className="flex flex-col lg:flex-row pr-20 pl-20 lg:justify-between space-y-8 lg:space-y-0">

                    {/* Колонка 1 - Лого и контакты (всегда сверху на мобильных) */}
                    <div className="space-y-4 lg:space-y-6">
                        <img src={logo} alt="logotype" className="w-44 lg:w-40 h-auto"/>

                        {/* Кнопка "Наверх" */}
                        <button
                            onClick={scrollToTop}
                            className="inline-flex items-center justify-center w-full sm:w-36 h-10 px-4 py-2 rounded-lg border border-deep-dark bg-white bg-opacity-0 hover:bg-opacity-5 transition-all duration-300 cursor-pointer"
                        >
                            <span className="flex items-center text-white text-opacity-75 font-medium">
                                <span className="mr-2">↑</span>
                                Наверх
                            </span>
                        </button>

                        <div className="space-y-1 lg:space-y-2 text-white text-opacity-80">
                            <p className="leading-relaxed text-sm lg:text-base">+7(925) 333-77-07</p>
                            <p className="leading-relaxed text-sm lg:text-base">vitalis-life.rus@mail.ru</p>
                            <p className="leading-relaxed text-sm lg:text-base">
                                Московская обл, г. Красногорск,<br/>
                                мкр. Опалиха,аллея Золотая,д.1
                            </p>
                            <p className="leading-relaxed text-sm lg:text-base">ИНН: 773104737415</p>
                            <p className="leading-relaxed text-sm lg:text-base">ОГРНИП: 325774600129389</p>
                        </div>
                    </div>

                    {/* Группа колонок (стек на мобильных, ряд на десктопе) */}
                    <div className="grid grid-cols-2 gap-8 sm:flex sm:flex-row sm:space-x-8 lg:space-x-36">

                        {/* Колонка 2 - Продукт */}
                        <div className="space-y-3 lg:space-y-6">
                            <h3 className="text-base lg:text-lg font-semibold">Продукт</h3>
                            <div className="space-y-2 lg:space-y-3">
                                <Link to="/" className="block text-sm lg:text-base text-white text-opacity-80 hover:text-opacity-100 transition">Главная</Link>
                                <Link to="/каталог" className="block text-sm lg:text-base text-white text-opacity-80 hover:text-opacity-100 transition">Каталог</Link>
                                <Link to="/рецепты" className="block text-sm lg:text-base text-white text-opacity-80 hover:text-opacity-100 transition">Рецепты</Link>
                            </div>
                        </div>

                        {/* Колонка 3 - Информация */}
                        <div className="space-y-3 lg:space-y-6">
                            <h3 className="text-base lg:text-lg font-semibold">Информация</h3>
                            <div className="space-y-2 lg:space-y-3">
                                <Link to="/о-нас" className="block text-sm lg:text-base text-white text-opacity-80 hover:text-opacity-100 transition">О нас</Link>
                                <Link to="/контакты" className="block text-sm lg:text-base text-white text-opacity-80 hover:text-opacity-100 transition">Контакты</Link>
                            </div>
                        </div>

                        {/* Колонка 4 - Документы и копирайт */}
                        <div className="col-span-2 sm:col-auto space-y-3 lg:space-y-6">
                            <div className="space-y-2 lg:space-y-3">
                                <h3 className="text-base lg:text-lg font-semibold">Документы</h3>
                                {/* Используем импортированную функцию */}
                                <button
                                    onClick={() => downloadDocument('privacy-policy.docx', 'Политика_конфиденциальности.docx')}
                                    className="block text-sm lg:text-base text-white text-opacity-80 hover:text-opacity-100 transition cursor-pointer w-full text-left"
                                >
                                    Политика конфиденциальности
                                </button>
                                <button
                                    onClick={() => downloadDocument('consent-processing-personal-data.docx', 'Согласие на обработку ПД.docx')}
                                    className="block text-sm lg:text-base text-white text-opacity-80 hover:text-opacity-100 transition cursor-pointer w-full text-left"
                                >
                                    Согласие на обработку ПД
                                </button>
                                <button
                                    onClick={() => downloadDocument('mailing.docx', 'Согласие на получение рассылки.docx')}
                                    className="block text-sm lg:text-base text-white text-opacity-80 hover:text-opacity-100 transition cursor-pointer w-full text-left"
                                >
                                    Согласие на получение рассылки
                                </button>
                                <button
                                    onClick={() => downloadDocument('data-processing.docx', 'Пользовательское_соглашение.docx')}
                                    className="block text-sm lg:text-base text-white text-opacity-80 hover:text-opacity-100 transition cursor-pointer w-full text-left"
                                >
                                    Пользовательское соглашение
                                </button>
                                <button
                                    onClick={() => downloadDocument('offer.docx', 'Оферта на заключение ДКП')}
                                    className="block text-sm lg:text-base text-white text-opacity-80 hover:text-opacity-100 transition cursor-pointer w-full text-left"
                                >
                                    Оферта на заключение ДКП
                                </button>
                            </div>

                            <div className="pt-4 lg:pt-8 mt-4 lg:mt-auto space-y-1 text-xs lg:text-sm text-white text-opacity-60">
                                <p>&#xA9; 2025 · Vitalis life</p>
                                <a href="https://devergent.net">
                                    <p className={"block text-sm lg:text-base text-white text-opacity-80 hover:text-opacity-100 transition cursor-pointer w-full text-left"}>Сделано DEVERGENT</p>
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;