import NavTab from "../components/NavTab.jsx";
import image_1 from "../assets/image/recipes/Хвойно-кедровый.png"
import image_2 from "../assets/image/recipes/Витграсс со спирулиной.png"
import image_3 from "../assets/image/recipes/Персиково-облепиховый Витграсс.png"
import image_4 from "../assets/image/recipes/Крио-Витграсс.png"
import banner from "../assets/image/recipes/Баннер будьте Здоровы.png"
import arrow_up from "../assets/image/recipes/arrow_up.svg"
import arrow_down from "../assets/image/recipes/arrow_down.svg"
import useDeviceDetection from "../hooks/useDeviceDetection.js";
import ExpandableCard from "../components/ExpandableCard.jsx";


const Recipes = () => {
    const isMobile = useDeviceDetection();
    // const [isExpanded, setIsExpanded] = useState(false);

    // const toggleDescription = () => {
    //     setIsExpanded(!isExpanded);
    // };
    return (
        <div className=" p-4 sm:p-8 lg:p-28 space-y-8 sm:space-y-12">
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
                <NavTab items={['Главная', 'Рецепты']}/>
            )
            }
            <div
                className="flex flex-col space-y-2 lg:flex-row justify-between  sm:text-3xl text-deep-dark font-medium">
                <h1>Лаборатория своими<br/> руками!</h1>
                <div
                    className={"flex flex-col leading-normal ph:max-w-96 ph:text-sm lg:text-2xl lg:max-w-[57vw] 2xl:max-w-[60vw]"}>
                    <p>
                        Витграсс - сок из ростков пшеницы - богат витаминами (A, E, C, K, B1, B2, B3,
                        B4, B5, B6, B8), содержит 92 из 102 известных минералов (кальций, железо,
                        цинк, магний, калий, фосфор, селен и др.), 17 аминокислот и 70% хлорофилла -
                        мощного природного энергетика.
                    </p>
                    <p className={"mt-5"}>Как можно приумножить эти свойства?</p>
                </div>
            </div>
            <ExpandableCard
                title="Хвойно-Кедровый Витграсс"
                description="Хвойный экстракт пищевой кедровой и пихтовой хвои -
                        эксклюзивный очень эффективный детокс, антиоксидант, адаптоген,
                        средство для иммунитета, вывода токсинов, против бактерий,
                        грибков, вирусов. Полезен лёгким, сердцу, пищеварению,
                        гормональной, половой системам, эпидермису."
                expandTitle="Приготовление и прием"
                expandContent="Возьмите пихтово-кедровый экстракт и принимайте его
                                    натощак за 30 мин. до еды, с утра, 1 ч. л. на 200 мл.
                                    теплой воды, добавив 30 мл. сока из ростков пшеницы."
                imageSrc={image_1}
                imageAlt="Хвойно-кедровый Витграсс"
                arrowUp={arrow_up}
                arrowDown={arrow_down}
                textSize="text-xl"
                maxWidth="max-w-[28vw]"
            />

            <ExpandableCard
                title="Витграсс со спирулиной"
                description="Спирулина - источник белка, витаминов и минералов, способствует
            детоксу и укреплению иммунитета. Детокс питание спирулины - это
            природный источник хлорофилла, каротиноидов, цинка, железа и
             витаминов В3, В12. Спирулина укрепляет мышечный корсет, повышает иммунитет,
              создает барьер для вирусных и бактериальных инфекций.
              Улучшает мозговую деятельность."
                expandTitle="Приготовление и прием"
                expandContent="Возьмите порошок спирулины и принимайте его
             натощак за 30 мин. до еды, с утра, 1 ч. л. на 200 мл.
              теплой воды, добавив 30 мл. сока из ростков пшеницы."
                imageSrc={image_2}
                imageAlt="Витграсс со спирулиной"
                arrowUp={arrow_up}
                arrowDown={arrow_down}
                textSize="text-xl"
                maxWidth="max-w-[28vw]"
            />
            <ExpandableCard
                title="Персиково-облепиховый Витграсс"
                description="Экстракт листьев персика и экстракт листьев облепихи в пропорции
                 1/1 - это уникальная формула, которая сочетает силу флавоноидов и
                  полифенольных соединений, обеспечивая комплексную поддержку
                   иммунитета, профилактику онкозаболеваний, замедляет рост
                    опухолей до 75%, обладает противоопухолевым действием,
                     иммуномодуляция (увеличивает выработку интерферона,
                      активирует макрофаги и Т‑лимфоциты), эффективен при миоме
                       матки, мастопатии и эндометриозе. Имеют противорадиационные свойства."
                expandTitle="Приготовление и прием"
                expandContent="Возьмите экстракт листьев персика 10 капель и
                 экстракт листьев облепихи 10 капель, смешайте и
                  принимайте за 30 мин. до еды 2 раза в день на 200 мл.
                   теплой воды, добавив 30 мл. сока из ростков пшеницы."
                imageSrc={image_3}
                imageAlt="Персиково-облепиховый Витграсс"
                arrowUp={arrow_up}
                arrowDown={arrow_down}
                textSize="text-xl"
                maxWidth="max-w-[28vw]"
            />
            <ExpandableCard
                title="Крио-Витграсс"
                description="Замороженный сок использовать для криокомпрессов, масок для
                 лица, охлаждения мышц после тренировки или в жару."
                expandTitle="Приготовление и прием"
                expandContent="Криокомпрессы: Замороженный сок можно достать из упаковки и использовать для криокомпрессов,
                 протирания кубиком, который помогает уменьшить воспаление, отеки и припухлости, улучшить кровообращение,
                  предотвратить появление прыщей и очистить кожу. После процедуры, Вы можете положить кубик обратно в
                   упаковку и морозилку. Криомаски для лица: Достаньте замороженный сок из ростков пшеницы,
                    разморозьте его в холодильнике и можете добавить его в маску или нанести как самостоятельную
                     охлажденную маску для лица. Она уменьшит поры на Вашем лице, очистит кожу и придаст
                      здоровый и отдохнувший вид.Криотерапия для мышц: Замороженный сок из ростков пшеницы
                      можно применять для охлаждения мышц после интенсивной тренировки. Это поможет снизить
                       болевые ощущения и ускорить восстановление.Общие процедуры охлаждения: Замороженные соки
                       можно использовать в качестве охлаждающего средства при перегреве или в жаркую погоду."
                imageSrc={image_4}
                imageAlt="Персиково-облепиховый Витграсс"
                arrowUp={arrow_up}
                arrowDown={arrow_down}
                textSize="text-xl"
                maxWidth="max-w-[28vw]"
            />
            <img className={""} src={banner} alt="Баннер будьте Здоровы"/>
        </div>
    )
}
export default Recipes