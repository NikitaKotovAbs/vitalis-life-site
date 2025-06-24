import car from "../assets/image/home/car.svg"
import leaf from "../assets/image/home/leaf.svg"
import message from "../assets/image/home/message.svg"
import video_container from "../assets/image/home/Video container.png"
import smoothie from "../assets/image/home/smoothieImage.png"
import flower_icon from "../assets/image/home/flowerIcon.svg"
import category_card from "../assets/image/home/Category card.png"
import category_card_2 from "../assets/image/home/Category card 2.png"
import category_card_3 from "../assets/image/home/Category card 3.png"
import card from "../assets/image/AboutUs/Card.png"
import avatar from "../assets/image/home/Avatar.png"
import InfiniteScrollingText from "../components/InfiniteScrollingText.jsx";
import ReviewCard from "../components/ReviewCard.jsx";
import arrow_up from "../assets/image/recipes/arrow_up.svg"
import arrow_down from "../assets/image/recipes/arrow_down.svg"
import section_form from "../assets/image/home/Section form.png"
import ExpandableMenu from "../components/ExpandableMenu.jsx";
import Arrow from "../assets/image/contacts/Arrow.svg";
import useDeviceDetection from "../hooks/useDeviceDetection.js";
import CategoryCard from "../components/CategotyCard.jsx";

export default function Home() {
    const isMobile = useDeviceDetection();
    const reviews = [
        {
            text: "«Доброго дня! Витграсс стал моим утренним ритуалом...»",
            author: "Игорь Азарян",
            avatarSrc: avatar
        }, {
            text: "«Доброго дня! Витграсс стал моим утренним ритуалом...»",
            author: "Игорь Азарян",
            avatarSrc: avatar
        }, {
            text: "«Доброго дня! Витграсс стал моим утренним ритуалом...»",
            author: "Игорь Азарян",
            avatarSrc: avatar
        }, {
            text: "«Доброго дня! Витграсс стал моим утренним ритуалом...»",
            author: "Игорь Азарян",
            avatarSrc: avatar
        }, {
            text: "«Доброго дня! Витграсс стал моим утренним ритуалом...»",
            author: "Игорь Азарян",
            avatarSrc: avatar
        }, {
            text: "«Доброго дня! Витграсс стал моим утренним ритуалом...» «Доброго дня! Витграсс стал моим утренним ритуалом...»",
            author: "Игорь Азарян",
            avatarSrc: avatar
        }
    ];
    return (
        <>
            <div className={"bg-deep-dark bg-opacity-5"}>
                <div
                    className={"ph:pt-20 lg:pt-28 flex ph:flex-col lg:flex-row ph:space-y-5 lg:space-y-0 lg:space-x-10 items-center justify-center  "}>
                    <div className="flex flex-row font-bold space-x-3">
                        <img src={car} alt="car"/>
                        <p>Доставка до 2 дней</p>
                    </div>
                    <div className="flex flex-row font-bold space-x-3">
                        <img src={leaf} alt="leaf"/>
                        <p>Натуральные ингредиенты</p>
                    </div>
                    <div className="flex flex-row font-bold space-x-3">
                        <img src={message} alt="message"/>
                        <p>100+ Довольных клиентов</p>
                    </div>
                </div>
                <div className={"flex flex-col items-center pt-10 space-y-10"}>
                    <div className={" text-center ph:text-3xl md:text-5xl lg:text-6xl space-y-2"}>
                        <h1>Открой для себя</h1>
                        <h1> здоровье с Vitalis-life!</h1>
                    </div>
                    <p className={" ph:text-base md:text-xl lg:text-2xl text-center ph:max-w-80 md:max-w-[67vw] lg:max-w-[56vw] text-deep-dark text-opacity-75"}>
                        Мы предлагаем натуральные напитки и
                        ингредиенты, которые укрепляют иммунную
                        систему и помогают в борьбе
                        с болезнями. Откройте для себя наш ассортимент и начните путь к здоровью уже сегодня!
                    </p>
                    <div
                        className={"flex md:flex-row md:justify-center md:space-x-10 ph:flex-col ph:w-full ph:px-5 ph:space-y-2 md:space-y-0"}>
                        <button className={"bg-avocado rounded-lg md:w-24 md:h-11 ph:h-14"}>
                            Купить
                        </button>
                        <button className={"border rounded-lg md:w-24 md:h-11 ph:h-14 "}>
                            Кто мы?
                        </button>
                    </div>
                    <img
                        className={" ph:border-[2vw] md:border-[1.2vw] border-white rounded-3xl ph:w-80 ph:h-auto md:w-[70vw] md:h-auto"}
                        src={video_container} alt="video_container"/>
                </div>

                <InfiniteScrollingText
                    text={"СОКИ • ПРАВИЛЬНОЕ ПИТАНИЕ • ИМУННЫЕ НАПИТКИ • СМУЗИ"}
                    textSize="ph:text-2xl md:text-3xl lg:md:text-4xl"
                    backgroundSize={"ph:p-4 lg:p-8"}
                    speedPerChar={0.4}
                    background={true}
                    className={"pt-14"}
                />
            </div>
            <div
                className={"flex ph:space-y-5 md:space-y-0 ph:flex-col md:flex-row ph:pl-5 ph:pt-5 md:justify-around lg:pt-20"}>
                <h1 className={"ph:text-2xl md:text-3xl"}>Почему мы?</h1>
                <div
                    className={"flex flex-col md:text-xl ph:max-w-[85vw] md:max-w-[40vw] lg:text-xl lg:max-w-[51vw]  text-deep-dark text-opacity-75"}>
                    <p>В Vitalis-life мы гордимся тем, что предлагаем продукты, которые не только
                        вкусные, но и полезные. Наши категории включают напитки для укрепления
                        иммунитета и разнообразные смузи, каждый из которых создан с использованием
                        натуральных ингредиентов.

                    </p>
                </div>
            </div>
            {isMobile ? (
                <div className="flex font-bold italic justify-center pt-10">
                    <div className="space-x-24">
                        <div className="flex flex-col justify-start">
                            <h1 className="text-2xl pl-10">СИЛА В КАЖДОМ</h1>
                            <div className="flex flex-row items-center space-x-2">
                                <h1 className="text-2xl ">РОСТКЕ</h1>
                                <img className="w-32 h-7" src={smoothie} alt="smoothie"/>
                            </div>
                        </div>
                        <div className="flex flex-col justify-end">
                            <h1 className="text-avocado text-2xl">ЭНЕРГИЯ В КАЖДОМ</h1>
                            <div className="flex flex-row space-x-2 justify-end">
                                <img className="w-8 h-auto" src={flower_icon} alt="flower_icon"/>
                                <h1 className="text-avocado text-2xl">ГЛОТКЕ</h1>
                            </div>
                        </div>
                    </div>
                </div>
            ) : (
                <div className={"flex flex-col items-center"}>
                    <div className={"flex flex-col space-y-5 pt-24"}>
                        <div
                            className={"flex flex-row items-center font-bold md:text-3xl lg:text-6xl space-x-7 italic"}>
                            <h1>СИЛА В КАЖДОМ РОСТКЕ</h1>
                            <img className={"ph:w-28 ph:h-auto md:w-32 lg:w-44"} src={smoothie} alt="smoothie"/>
                        </div>
                        <div
                            className={"flex flex-row items-center font-bold md:text-3xl lg:text-5xl space-x-7 italic md:pl-40 text-avocado"}>
                            <img className={"ph:w-10 ph:h-auto md:w-11 lg:w-20"} src={flower_icon}
                                 alt="flower_icon"/>
                            <h1>ЭНЕРГИЯ В КАЖДОМ ГЛОТКЕ</h1>

                        </div>
                    </div>
                </div>
            )}

            {/*<h1 className="text-xl">Все категории</h1>*/}
            <CategoryCard title={"Соки из ростков и корней пшеницы"} description={"Укрепление здоровья"} img={category_card}/>
            <CategoryCard title={"Топпинги"} description={"Разнообразие вкусов"} img={category_card_2}/>
            <CategoryCard title={"Смузи"} description={"Расслабление и здоровье"} img={category_card_3}/>

            {isMobile ? (
                <div className="p-6 space-y-5 pt-10">
                    <h1 className={"ph:text-xl"}>История Vitalis-life</h1>
                    <img src={card} alt="card"/>
                    <p className="text-deep-dark text-opacity-75">Каждый продукт Vitalis-life создан из тщательно
                        подобранных натуральных ингредиентов. Мы
                        верим в силу природы и стремимся обеспечить
                        Вас самыми полезными элементами для
                        поддержания здоровья. Откройте для себя
                        натуральные решения для улучшения
                        самочувствия.
                    </p>
                    <button className="border rounded-lg w-full h-12 opacity-75">
                        О нас
                    </button>
                </div>
            ) : (
                <div className="flex flex-row lg:justify-around md:justify-center space-y-5 pt-10">
                    <div className="flex flex-col space-y-3">
                        <h1 className={"ph:text-xl lg:text-3xl"}>История Vitalis-life</h1>
                        <p className="text-deep-dark text-opacity-75 md:max-w-96 lg:text-xl lg:max-w-[30vw]">Каждый
                            продукт Vitalis-life создан из тщательно
                            подобранных натуральных ингредиентов. Мы
                            верим в силу природы и стремимся обеспечить
                            Вас самыми полезными элементами для
                            поддержания здоровья. Откройте для себя
                            натуральные решения для улучшения
                            самочувствия.</p>
                        <button className="border rounded-lg w-24 h-12 opacity-75">
                            О нас
                        </button>
                    </div>
                    <img className="md:w-72 md:h-56 lg:w-[50vw] lg:h-auto" src={card} alt="card"/>
                </div>
            )}

            <div className={"flex ph:flex-col md:flex-row md:justify-around pt-24 ph:pl-4 md:pl-0"}>
                <div className={"flex flex-col space-y-5 md:max-w-[45vw]"}>
                    <h1 className={"text-3xl"}>Часто задаваемые вопросы</h1>
                    <p className={"text-deep-dark text-opacity-75 text-lg"}>Здесь вы найдете ответы на самые
                        популярные вопросы о нашем продукте.
                        Узнайте больше, чтобы эффективно использовать всё, что мы предлагаем!</p>
                </div>
                <div className={"flex flex-col space-y-2 ph:pt-10 ph:space-y-5"}>
                    <ExpandableMenu
                        title="Как правильно употреблять сок из ростков и корней пшеницы?"
                        content={`Здоровому человеку достаточно 30 мл. сока ростков пшеницы или корней пшеницы (1 баночка) в день, детям до 12 лет - 15 мл.
                         При желании, через месяц после адаптации организма, Вы можете смешивать 30 мл. сока ростков пшеницы с 30 мл. соком корней пшеницы. Детям до 12 лет не рекомендуется превышать объема 15 мл.
                               При желании, через месяц после адаптации организма, Вы можете смешивать 30 мл. сока ростков пшеницы с 30 мл. соком корней пшеницы. Детям до 12 лет не рекомендуется превышать объема 15 мл. В период лечения заболеваний взрослому человеку рекомендуется принимать сок ростков пшеницы 30 мл. дважды в день. Для лечения раковых заболеваний и в период химиотерапии, сок из ростков пшеницы 30 мл. принимается три раза в день. В одной порции 30 мл. Витграсса столько же полезных веществ, сколько их в 1,5-2 кг. свежих овощей фруктов и зелени.
                               Напиток обладает тонизирующим эффектом, поэтому его надо пить в первой половине дня. Желательно пить его до завтрака за 15-20 мин., но не воспрещается после приема пищи через 1,5-2 ч., выбирайте вариант по ощущению комфорта для организма. Свежевыжатый сок подвергается быстрой шоковой заморозке, при таком методе он сохраняет абсолютно все свои полезные свойства.
                               Размораживать сок необходимо естественным способом, нельзя разогревать в микроволновой печи.
                               ##Способы разморозки:##
                               Самый эффективный способ разморозки, это медленная разморозка, когда вы оставляете с вечера замороженный сок из ростков и корней пшеницы в холодильнике. Рекомендуем залить соусник с соком  теплой водой комнатной температуры. После того как сок растает, раскройте соусник и разбавьте в стакане теплой водой или соком, можно пить сок в концентрированном виде, либо добавить топпинг. Откройте соусник и опустите замороженный сок в стакан с теплой водой комнатной температуры, периодически помешивайте деревянной палочкой до полной разморозки. Употребить не позднее 10 мин. после размораживания и разведения.
                               Исключите контакт сока с металлом.
                               Перемешивать сок рекомендуется деревянной палочкой, нужное количество Вы найдете в Вашем заказе.                   
`}
                        arrowUp={arrow_up}
                        arrowDown={arrow_down}
                    />

                    <ExpandableMenu
                        title="Как правильно хранить сок из ростков и корней пшеницы?"
                        content={`Сок из ростков и корней пшеницы необходимо хранить в морозильной камере, при температуре -18С. Срок годности сока из ростков и корней пшеницы в морозильной камере не более 12 мес. без повторного замораживания.`}
                        arrowUp={arrow_up}
                        arrowDown={arrow_down}
                    />

                    <ExpandableMenu
                        title="Как правильно употреблять топпинг?"
                        content={`Топпинги предназначены для добавления их в соки из ростков и корней пшеницы для добавления вкусовых оттенков. Также Вы можете употреблять их как самостоятельный продукт. Топпинг подвергается быстрой шоковой заморозке, при таком методе он сохраняет все свои полезные свойства. Размораживать топпинг необходимо естественным способом, нельзя разогревать в микроволновой печи.
                            ##Способы разморозки:##
                            Самый эффективный способ разморозки, это медленная разморозка, когда вы оставляете с вечера замороженный топпинг в холодильнике. Рекомендуем залить соусник с топпингом теплой водой комнатной температуры. После того как он растает, раскройте соусник и разбавьте в стакане теплой водой или добавьте его к соку из ростков и корней пшеницы, можно пить топпинг в концентрированном виде. Откройте соусник и опустите топпинг в стакан с теплой водой комнатной температуры, периодически помешивайте деревянной палочкой до полной разморозки. 
                             Употребить не позднее 10 мин. после размораживания и разведения.
                             Исключите контакт сока с металлом. 
                             Перемешивать топпинг рекомендуется деревянной палочкой, нужное количество Вы найдете в Вашем заказе.`}
                        arrowUp={arrow_up}
                        arrowDown={arrow_down}
                    />
                    <ExpandableMenu
                        title="Как правильно хранить топпинг?"
                        content={`Топпинг необходимо хранить в морозильной камере, при температуре -18С. Срок годности топпинга в морозильной камере не более 12 мес. без повторного замораживания.`}
                        arrowUp={arrow_up}
                        arrowDown={arrow_down}
                    />
                    <ExpandableMenu
                        title="Как правильно употреблять смузи?"
                        content={`Смузи 300 мл. на основе семян чиа и семян льна являются легким и полезным приемом пищи во время детокс-программ, желания обрести крепкое здоровье, стройность, омолодить организм и напитать его полезными веществами. Смузи удобно взять с собой. Перед употреблением просто хорошо встряхните, т.к. это густой напиток из фруктов, ягод, овощей, зелени, измельченных и взбитых в блендере до однородной массы. Смузи подвергается быстрой шоковой заморозке, при таком методе сохраняются все полезные свойства. Размораживать смузи необходимо естественным способом, нельзя разогревать в микроволновой печи.
                            ##Способы разморозки:##
                            Самый эффективный способ разморозки, это медленная разморозка, когда вы оставляете с вечера замороженный смузи в холодильнике. Рекомендуем залить смузи теплой водой комнатной температуры.
                            Употребить в течении 2-3 ч. после размораживания. Также после размораживания Вы можете хранить в холодильнике при температуре от 0°С до +6°, срок хранения составляет 72 ч. 
                            После вскрытия упаковки хранить при температуре от 0°С до +6°С не более суток.
                            Избегайте попадания прямых солнечных лучей.`}
                        arrowUp={arrow_up}
                        arrowDown={arrow_down}
                    />
                    <ExpandableMenu
                        title="Как правильно хранить смузи?"
                        content={`Смузи необходимо хранить в морозильной камере, при температуре -18С. Срок годности смузи в морозильной камере не более 12 мес. без повторного замораживания. 
                            После размораживания хранить в холодильнике при температуре от 0°С до +6°, срок хранения составляет 72 ч. 
                            После вскрытия упаковки хранить при температуре от 0°С до +6°С не более суток.`}
                        arrowUp={arrow_up}
                        arrowDown={arrow_down}
                    />
                </div>

            </div>

            <div className="relative ph:px-4 md:px-10 pt-16">
                {/* Контейнер для изображения с фиксированной высотой */}
                <div
                    className="relative w-full ph:h-[130vw] md:h-[70vw] lg:h-[30vw]"> {/* Укажите здесь нужную высоту */}
                    <img
                        src={section_form}
                        alt="Фоновая картинка"
                        className="rounded-2xl object-cover w-full h-full object-center" /* Добавлен object-center */
                    />
                </div>

                {/* Центрирующий контейнер */}
                <div className="absolute inset-0 flex flex-col items-center justify-center">
                    {/* Текстовый блок */}
                    <div className="text-center mb-8 ph:px-8 md:px-32">
                        <h1 className="ph:text-2xl text-3xl md:text-4xl font-bold">Остались вопросы?</h1>
                        <p className="pt-4 md:pt-6 ph:text-sm md:text-xl text-deep-dark text-opacity-75 lg:max-w-[30vw]">
                            Оставьте ваши контакты и мы свяжемся с вами в ближайшее время, чтобы обсудить все
                            нюансы.
                        </p>
                    </div>

                    {/* Блоки контактов */}
                    <div className="flex flex-col lg:flex-row gap-4 w-full ph:px-10 md:px-20 justify-center">
                        {/* Блок email */}
                        <div
                            className="flex justify-between items-center ph:p-5 border border-opacity-30 bg-opacity-10 rounded-lg w-full hover:bg-opacity-20 transition">
                            <div className="flex flex-col min-w-0">
                                <p className="text-sm text-opacity-70">Эл.почта</p>
                                <span className="text-lg truncate">vitalis-life.rus@mail.ru</span>
                            </div>
                            <button
                                onClick={() => window.location.href = "mailto:vitalis-life.rus@mail.ru"}
                                className="focus:outline-none"
                            >
                                <img className="w-5 h-5" src={Arrow} alt="Перейти к почте"/>
                            </button>
                        </div>

                        {/* Блок телефона */}
                        <div
                            className="flex justify-between items-center ph:p-5 border border-opacity-30 bg-opacity-10 rounded-lg w-full hover:bg-opacity-20 transition">
                            <div className="flex flex-col min-w-0">
                                <p className="text-sm text-opacity-70">Контактный телефон</p>
                                <span className="text-lg truncate">+7 (925) 333-77-07</span>
                            </div>
                            <button
                                onClick={() => window.location.href = "tel:+79253337707"}
                                className="focus:outline-none"
                            >
                                <img className="w-5 h-5" src={Arrow} alt="Позвонить"/>
                            </button>
                        </div>
                    </div>
                </div>
            </div>


        </>
    )
}