import NavTab from "../components/NavTab.jsx";
import card_1 from "../assets/image/AboutUs/Card.png";
import card_2 from "../assets/image/AboutUs/Card_2.png";
import card_3 from "../assets/image/AboutUs/Card_3.png";
import card_4 from "../assets/image/AboutUs/Card_4.png";
import iconCertificat_1 from "../assets/image/AboutUs/IconCertificat_1.svg";
import iconCertificat_2 from "../assets/image/AboutUs/IconCertificat_2.svg";
import iconCertificat_3 from "../assets/image/AboutUs/IconCertificat_3.svg";
import InfiniteScrollingText from "../components/InfiniteScrollingText.jsx";
import useDeviceDetection from "../hooks/useDeviceDetection.js";
import React from "react";
import {Link} from "react-router-dom";

const AboutUs = () => {

    const isMobile = useDeviceDetection();

    return (
        <div>
            <div className="p-4 sm:p-8 lg:p-28 space-y-8 sm:space-y-12">


                {isMobile ? (
                    <Link
                        to="/"
                        className="inline-flex items-center justify-center px-6 py-3 sm:py-2 rounded-lg bg-deep-dark bg-opacity-5 hover:bg-opacity-10 transition-all duration-300"
                    >
                        <span className="text-deep-dark text-opacity-75 font-medium text-sm sm:text-base">
                        &lt; Назад
                        </span>
                    </Link>
                ) : (
                    <NavTab items={['Главная', 'О нас']}/>
                )}

                {/* Заголовок и описание */}
                <div
                    className="flex flex-col space-y-2 lg:flex-row justify-between text-2xl sm:text-3xl text-deep-dark font-medium">
                    <h1>О нас</h1>
                    <p className="text-base lg:text-3xl lg:max-w-4xl 2xl:max-w-6xl">
                        В Vitalis-life мы гордимся тем, что предлагаем продукты, которые не только
                        вкусные, но и полезные. Наши категории включают напитки для укрепления
                        иммунитета и разнообразные смузи, каждый из которых создан с
                        использованием натуральных ингредиентов.
                    </p>
                </div>

                {isMobile ? (
                    <div className={"text-deep-dark text-opacity-75 font-medium"}>
                        <img src={card_1} alt="card_1" className="mt-5"/>
                        <p className={"pt-5"}>
                            Каждый продукт Vitalis-life создан из тщательно
                            подобранных натуральных ингредиентов. Мы
                            верим в силу природы и стремимся обеспечить
                            Вас самыми полезными элементами для
                            поддержания здоровья. Откройте для себя
                            натуральные решения для улучшения
                            самочувствия.
                        </p>
                    </div>

                ) : (
                    <div
                        className="flex flex-col lg:flex-row pt-5 sm:pt-10 text-deep-dark text-opacity-75 font-medium gap-5 sm:gap-10">
                        <div className="flex flex-col space-y-3 sm:space-y-5 lg:text-lg sm:text-xl lg:max-w-4xl">
                            <p className="leading-relaxed">
                                Каждый росток выращен на благо наших покупателей.
                            </p>
                            <p className="leading-relaxed">
                                Любовь и ценность наших товаров "Vitalis-life" возникает с первой покупки,
                                благодаря уникальности целебных свойств и наивысшему качеству товара,
                                сохранению всех витаминов, минералов и полезных веществ, за счёт применения
                                новейших технологий.
                            </p>
                            <p className="leading-relaxed">
                                Производство эко-продукции "Vitalis-life" соответствует требованиям ГОСТ Р
                                51705.1-2001, Системе добровольной сертификации «Чистый продукт»,
                                Техническим условиям ТУ 10.32.19-001-2040214127-2025.
                            </p>
                            <p className="leading-relaxed">
                                Пророщенные зерна содержат особую «жизненную силу и энергию», благодаря
                                использованию только элитных сортов зерен, специальной их обработке и
                                обогащению кислородом перед процессом проращивания.
                            </p>
                        </div>
                        <img src={card_1} alt="card_1" className="mt-5 lg:mt-0 lg:w-auto lg:h-[25vw] 2xl:h-[30vw]"/>
                    </div>
                )}

                {/* Круговые статистики */}
                {isMobile ? (
                    <div className="flex flex-col space-y-5">
                        <div
                            className="h-28 w-28 rounded-full text-avocado text-opacity-60 border border-avocado flex flex-col items-center justify-center">
                            <p className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-inter font-extralight italic">8</p>
                            <p className="text-xl sm:text-2xl lg:text-3xl">наград</p>
                        </div>

                        <div className={"flex justify-end"}>
                            <div
                                className="h-64 w-64 rounded-full text-deep-dark text-opacity-60 bg-avocado flex flex-col items-center justify-center">
                                <p className="text-5xl sm:text-6xl md:text-7xl lg:text-9xl font-inter font-extralight italic">100+</p>
                                <p className="text-xl sm:text-2xl lg:text-4xl text-center">довольных клиентов</p>
                            </div>
                        </div>
                        <div
                            className="h-52 w-52 sm:h-48 sm:w-48 md:h-56 md:w-56 lg:h-[21vw] lg:w-[21vw] rounded-full text-avocado text-opacity-60 border border-avocado flex flex-col items-center justify-center">
                            <p className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-inter font-extralight italic">9</p>
                            <p className="text-xl sm:text-2xl lg:text-3xl">лет с вами</p>
                        </div>

                    </div>
                ) : (
                    <div className="flex flex-col sm:flex-row gap-4 sm:gap-8 pt-8 sm:pt-12">
                        <div
                            className="h-40 w-40 sm:h-48 sm:w-48 md:h-56 md:w-56 lg:h-64 lg:w-64 rounded-full text-avocado text-opacity-60 border border-avocado flex flex-col items-center justify-center">
                            <p className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-inter font-extralight italic">8</p>
                            <p className="text-xl sm:text-2xl lg:text-3xl">наград</p>
                        </div>

                        <div
                            className="h-40 w-40 sm:h-48 sm:w-48 md:h-56 md:w-56 lg:h-[30vw] lg:w-[30vw] rounded-full text-deep-dark text-opacity-60 bg-avocado flex flex-col items-center justify-center">
                            <p className="text-5xl sm:text-6xl md:text-7xl lg:text-9xl font-inter font-extralight italic">100+</p>
                            <p className="text-xl sm:text-2xl lg:text-4xl text-center">довольных клиентов</p>
                        </div>

                        <div
                            className="h-40 w-40 sm:h-48 sm:w-48 md:h-56 md:w-56 lg:h-[21vw] lg:w-[21vw] rounded-full text-avocado text-opacity-60 border border-avocado flex flex-col items-center justify-center mt-8 sm:mt-0 lg:mt-44">
                            <p className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-inter font-extralight italic">9</p>
                            <p className="text-xl sm:text-2xl lg:text-3xl">лет с вами</p>
                        </div>

                    </div>
                )}

                {/* Изображения */}
                <div className="flex flex-col sm:flex-row justify-between items-start gap-5 sm:gap-8 sm:pt-16">
                    <img className="lg:mt-48 " src={card_3} alt="card_3"/>
                    <img className="" src={card_2} alt="card_2"/>
                </div>

                {/* Второй блок с текстом и изображением */}
                <div
                    className="flex flex-col lg:flex-row pt-5 sm:pt-10 text-deep-dark text-opacity-75 font-medium gap-5 sm:gap-10">
                    <div className="flex flex-col space-y-3 sm:space-y-5 lg:text-base sm:text-sm ">
                        <p className="leading-relaxed">
                            Продукция “Vitalis-life” содержит клетчатку, углеводы, аминокислоты,
                            витамины группы В и витамин Е, витамин С, минералы в числе которых железо, цинк и селен,
                            антиоксиданты, растительные эстрогены и большое количество полезных и
                            незаменимых элементов, которые необходимы нашему организму для крепкого
                            здоровья и наполнения его энергией и силой.

                        </p>
                        <p className="leading-relaxed">
                            При регулярном употреблении эко-продукции “Vitalis-life”, организм очищается от
                            шлаков, канцерогенных и токсичных веществ, тяжелых металлов, нормализуются
                            обменные процессы, улучшается моторика кишечника, снижается риск
                            заболеваний сердечно-сосудистой системы, снижается уровень холестерина в
                            крови, снижается риск онкологических заболеваний.
                        </p>
                        <p className="leading-relaxed">
                            Сок из ростков пшеницы имеет биогенные свойства, а по питательной ценности
                            превосходит другие продукты. Обладая антиоксидантными, противоопухолевыми,
                            противовоспалительными, диетическими и профилактическими особенностями,
                            регененирующим, обновляющим и омолаживающим эффектом, употребление эко-
                            продукции “Vitalis-life” несет огромную пользу для детей, взрослых и людей
                            пожилого возраста.
                        </p>
                    </div>
                    <img src={card_4} alt="card_4" className=" mt-5 lg:mt-0 lg:w-[40vw] lg:h-auto"/>
                </div>

                {/* Сертификаты */}
                <div className="flex flex-col space-y-5 sm:space-y-10 pt-8 sm:pt-12">
                    <h1 className="text-2xl sm:text-3xl text-deep-dark font-extralight">Сертификаты</h1>
                    <div className="flex flex-row gap-5 sm:gap-10">
                        <img src={iconCertificat_1} alt="iconCertificat_1" className="w-20 h-20 lg:h-36 lg:w-36"/>
                        <img src={iconCertificat_2} alt="iconCertificat_2" className="w-20 h-20 lg:h-36 lg:w-36"/>
                        <img src={iconCertificat_3} alt="iconCertificat_3" className="w-20 h-20 lg:h-36 lg:w-36"/>
                    </div>
                </div>
            </div>

            <InfiniteScrollingText text="VITALIS LIFE" speedPerChar={0.3}/>
        </div>
    );
};

export default AboutUs;