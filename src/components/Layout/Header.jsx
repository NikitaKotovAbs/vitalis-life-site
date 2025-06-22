import {useState} from 'react';
import {NavLink} from "react-router-dom";
import logo from '../../assets/image/header/LogotypeHeader.svg';
import cart from '../../assets/image/header/Cart.svg';
import {FiMenu} from 'react-icons/fi';
import useDeviceDetection from "../../hooks/useDeviceDetection.js";

const NAV_ITEMS = ['Каталог', 'Рецепты', 'О нас', 'Контакты'];

const Header = () => {
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
    const isMobile = useDeviceDetection();

    const toggleMobileMenu = () => {
        setIsMobileMenuOpen(!isMobileMenuOpen);
    };

    return (
        <header className="p-4 shadow-md lg:p-6">
            <div className="flex flex-row justify-between items-center max-w-7xl lg:max-w-[85vw] mx-auto ">
                <NavLink to={"/"} className="flex items-center">
                    <img src={logo} alt="logotype" className="h-10 lg:h-12"/>
                </NavLink>

                {/* Гамбургер */}
                {isMobile && (
                    <div className="relative">
                        <button
                            onClick={toggleMobileMenu}
                            className="p-2 rounded-lg hover:bg-gray-100 transition-colors relative"
                        >
                            {isMobileMenuOpen ? <FiMenu size={28}/> : <FiMenu size={28}/>}
                            <span className={`absolute top-1 right-1 h-2 w-2 rounded-full bg-avocado`}></span>
                        </button>
                    </div>
                )}

                {/* Навигация для десктопа */}
                {!isMobile && (
                    <nav>
                        <ul className="text-deep-dark text-opacity-75 font-medium flex flex-row space-x-14 lg:space-x-16">
                            {NAV_ITEMS.map((item) => (
                                <li key={item}>
                                    <NavLink
                                        to={`/${item.toLowerCase().replace(' ', '-')}`}
                                        className="relative px-4 py-3 lg:px-5 lg:py-4 text-base lg:text-xl rounded-lg hover:text-opacity-100 transition-all duration-300 group"
                                    >
                                        <span className="relative z-10">{item}</span>
                                        <span className="absolute inset-0 bg-gray-100 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300"></span>
                                    </NavLink>
                                </li>
                            ))}
                        </ul>
                    </nav>
                )}

                {/* Корзина для десктопа */}
                {!isMobile && (
                    <NavLink
                        to="/cart"
                        className="relative px-4 py-3 lg:px-5 lg:py-4 rounded-lg transition-all duration-300 hover:bg-gray-100"
                    >
                        <img src={cart} alt="Корзина" className="h-7 w-7 lg:h-8 lg:w-8"/>
                        <span className="absolute -top-2 -right-2 bg-avocado text-sm lg:text-base rounded-full h-7 w-7 lg:h-8 lg:w-8 flex items-center font-medium justify-center">
                            2
                        </span>
                    </NavLink>
                )}
            </div>

            {/* Мобильное меню */}
            {isMobile && isMobileMenuOpen && (
                <div className="mt-4 bg-white rounded-lg shadow-lg p-4">
                    <nav>
                        <ul className="flex flex-col space-y-4">
                            {NAV_ITEMS.map((item) => (
                                <li key={item}>
                                    <NavLink
                                        to={`/${item.toLowerCase().replace(' ', '-')}`}
                                        className="block px-4 py-3 text-lg rounded-lg hover:bg-gray-100 transition-colors duration-300"
                                        onClick={() => setIsMobileMenuOpen(false)}
                                    >
                                        {item}
                                    </NavLink>
                                </li>
                            ))}
                            <li>
                                <NavLink
                                    to="/cart"
                                    className="flex items-center px-4 py-3 text-lg rounded-lg hover:bg-gray-100 transition-colors duration-300"
                                    onClick={() => setIsMobileMenuOpen(false)}
                                >
                                    <span className="font-medium">Корзина</span>
                                    <span className="ml-2 bg-avocado text-sm rounded-full h-7 w-7 flex items-center justify-center">
                                        2
                                    </span>
                                </NavLink>
                            </li>
                        </ul>
                    </nav>
                </div>
            )}
        </header>
    );
};

export default Header;