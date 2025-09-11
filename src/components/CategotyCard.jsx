import { useNavigate } from 'react-router-dom';
import useDeviceDetection from "../hooks/useDeviceDetection.js";

const CategoryCard = ({title, description, imgMobile, img}) => {
    const {isMobile,isLaptop} = useDeviceDetection();
    const navigate = useNavigate();
    const handlerClick = () => {
        navigate('каталог')
    }

    return (
        <>
            {isMobile ? (
                <div className="relative w-full flex flex-col space-y-3 px-6 pt-10">
                    <img className="object-cover w-full h-full object-center" src={imgMobile} alt="category_card"/>

                    <div className="absolute inset-0 flex flex-col justify-between p-16">
                        <div className="space-y-2">
                            <h1 className="font-bold text-2xl">{title}</h1>
                            <p className="text-deep-dark text-opacity-50 text-lg ">{description}</p>
                        </div>
                        <div className="w-full flex justify-center">
                            <button
                                className="bg-avocado rounded-lg w-52 h-12"
                                onClick={handlerClick}
                            >
                                Смотреть
                            </button>
                        </div>

                    </div>
                </div>
            ) : (
                <div className=" flex justify-center items-center ">
                    <div className="relative flex flex-col space-y-3 lg:w-full max-w-screen-xl md:px-16 xl:px-0 pt-10">
                        <img
                            className="object-cover md:w-full md:h-full lg:w-[70%] xl:w-96 xl:h-72 lg:h-auto object-center mx-auto"
                            src={img}
                            alt="category_card"
                        />

                        <div className="absolute inset-0 flex flex-col justify-between p-12 pl-28 xl:pl-0 lg:left-40 xl:left-5">
                            <div className="space-y-3">
                                <h1 className="font-bold md:text-3xl xl:text-2xl max-w-72">{title}</h1>
                                <p className="text-deep-dark text-opacity-50 md:text-xl max-w-72">{description}</p>
                            </div>
                            <button
                                className="bg-avocado-cat-btn rounded-lg md:w-40 md:h-14 md:text-xl"
                                onClick={handlerClick}
                            >
                                Смотреть
                            </button>
                        </div>
                    </div>
                </div>
            )
            }
        </>
    )
}
export default CategoryCard;