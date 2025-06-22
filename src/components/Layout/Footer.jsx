import React from 'react';
import logo from '../../assets/image/footer/LogotypeFooter.svg';
import { Link } from "react-router-dom";

const Footer = () => {
    // Функция для плавной прокрутки вверх
    const scrollToTop = () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth' // Добавляем плавность прокрутке
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
                        <img src={logo} alt="logotype" className="w-32 lg:w-40 h-auto"/>

                        {/* Изменяем кнопку - убираем Link и добавляем onClick */}
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
                                мкр. Опалиха, аллея Золотая, д. 1
                            </p>
                        </div>
                    </div>

                    {/* Группа колонок (стек на мобильных, ряд на десктопе) */}
                    <div className="grid grid-cols-2 gap-8 sm:flex sm:flex-row sm:space-x-8 lg:space-x-36">

                        {/* Колонка 2 - Продукт */}
                        <div className="space-y-3 lg:space-y-6">
                            <h3 className="text-base lg:text-lg font-semibold">Продукт</h3>
                            <div className="space-y-2 lg:space-y-3">
                                <Link to="/" className="block text-sm lg:text-base text-white text-opacity-80 hover:text-opacity-100 transition">Главная</Link>
                                <Link to="/" className="block text-sm lg:text-base text-white text-opacity-80 hover:text-opacity-100 transition">Каталог</Link>
                                <Link to="/" className="block text-sm lg:text-base text-white text-opacity-80 hover:text-opacity-100 transition">Рецепты</Link>
                            </div>
                        </div>

                        {/* Колонка 3 - Информация */}
                        <div className="space-y-3 lg:space-y-6">
                            <h3 className="text-base lg:text-lg font-semibold">Информация</h3>
                            <div className="space-y-2 lg:space-y-3">
                                <Link to="/" className="block text-sm lg:text-base text-white text-opacity-80 hover:text-opacity-100 transition">О нас</Link>
                                <Link to="/" className="block text-sm lg:text-base text-white text-opacity-80 hover:text-opacity-100 transition">Контакты</Link>
                            </div>
                        </div>

                        {/* Колонка 4 - Документы и копирайт */}
                        <div className="col-span-2 sm:col-auto space-y-3 lg:space-y-6">
                            <div className="space-y-2 lg:space-y-3">
                                <h3 className="text-base lg:text-lg font-semibold">Документы</h3>
                                <Link to="/" className="block text-sm lg:text-base text-white text-opacity-80 hover:text-opacity-100 transition">Политика конфиденциальности</Link>
                                <Link to="/" className="block text-sm lg:text-base text-white text-opacity-80 hover:text-opacity-100 transition">Пользовательское соглашение</Link>
                            </div>

                            <div className="pt-4 lg:pt-8 mt-4 lg:mt-auto space-y-1 text-xs lg:text-sm text-white text-opacity-60">
                                <p>&#xA9; 2025 · Vitalis life</p>
                                <p>Сделано DEVERGENT</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;