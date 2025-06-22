import NavTab from "../components/NavTab.jsx";
import Arrow from "../assets/image/contacts/Arrow.svg"
import Container from "../assets/image/contacts/Container.png"
import ContainerMini from "../assets/image/contacts/ContainerMini.png"
import React from "react";
import useDeviceDetection from "../hooks/useDeviceDetection.js";
import {Link} from "react-router-dom";

const Contacts = () => {
    const isMobile = useDeviceDetection();
    return (
        <div className="p-4 sm:p-8 lg:p-28 space-y-8 sm:space-y-12">
            {isMobile ? (
                <button
                    onClick={() => window.history.back()}
                    className="inline-flex items-center justify-center px-6 py-3 sm:py-2 rounded-lg bg-deep-dark bg-opacity-5 hover:bg-opacity-10 transition-all duration-300 cursor-pointer"
                >
                    <span className="text-deep-dark text-opacity-75 font-medium text-sm sm:text-base">
                        &lt; Назад
                    </span>
                </button>
            ) : (
                <NavTab items={['Главная', 'Контакты']}/>
            )
            }

            <div className={"space-y-5"}>
                <h1 className={"ph:text-2xl lg:text-3xl"}>Контакты</h1>
                <p className={"ph:text-base md:max-w-[70vw] lg:max-w-[40vw] text-deep-dark text-opacity-75 text-xl"}>Vitalis
                    Life — это
                    ваш путь к гармонии, здоровью
                    и осознанной
                    жизни. Мы всегда рядом, чтобы ответить на вопросы и помочь вам
                    на пути к вашим целям. Свяжитесь с нами, и вместе мы создадим
                    вашу историю успеха и благополучия.</p>
            </div>

            <div className="flex flex-col lg:flex-row lg:space-x-6 space-y-4 lg:space-y-0">
                <div className="flex justify-between items-center p-4 border lg:w-[46vw] w-full">
                    <div className="flex flex-col min-w-0"> {/* Добавляем min-w-0 для правильного переноса */}
                        <p className="text-sm text-deep-dark text-opacity-75 whitespace-nowrap">Эл.почта</p>
                        <a
                            href="mailto:vitalis-life.rus@mail.ru"
                            className="text-lg truncate hover:underline"
                        >
                            vitalis-life.rus@mail.ru
                        </a>
                    </div>
                    <div>
                        <img className="w-5 h-5" src={Arrow} alt="arrow"/>
                    </div>
                </div>

                <div className="flex justify-between items-center p-4 border lg:w-[46vw] w-full">
                    <div className="flex flex-col min-w-0">
                        <p className="text-sm text-deep-dark text-opacity-75 whitespace-nowrap">Контактный телефон</p>
                        <a
                            href="tel:+79253337707"
                            className="text-lg truncate hover:underline"
                        >
                            +7 (925) 333-77-07
                        </a>
                    </div>
                    <div>
                        <img className="w-5 h-5" src={Arrow} alt="arrow"/>
                    </div>
                </div>
            </div>
            <div className={"flex flex-col"}>
                {isMobile ? (
                    <img src={ContainerMini} alt="Banner interesting"/>
                ) : (
                    <img className={"flex justify-center"} src={Container} alt="Banner interesting"/>
                )}

                <div className="flex md:flex-row lg:flex-row ph:flex-col ph:space-y-5 justify-between pt-10">
                    <p className="text-sm text-deep-dark text-opacity-35 lg:max-w-[40vw] md:max-w-[40vw]">
                        Предлагаемая нами продукция сертифицирована, прошла строгий контроль и имеет
                        гарантированно высокое качество, а так же очень привлекательные цены.
                    </p>
                    <button
                        onClick={() => window.open('https://t.me/Vitgrass_Vitalis_Life', '_blank')}
                        className="lg:h-[2.3vw] h-14 md:w-52 lg:w-44 ph:w-full bg-avocado text-base text-deep-dark text-opacity-75 rounded-lg transition-all duration-300 hover:bg-opacity-75 hover:bg-avocado-dark"
                    >
                        Перейти в Telegram
                    </button>
                </div>
            </div>


        </div>
    )
}

export default Contacts