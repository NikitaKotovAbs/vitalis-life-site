import { useNavigate } from 'react-router-dom';

const CategoryCard = ({title, description, img}) => {
    const navigate = useNavigate();
    const handlerClick = () => {
        navigate('категория')
    }

    return (
        <div className="relative w-full flex flex-col space-y-3 px-6 pt-10">
            <img className="object-cover w-full h-full object-center" src={img} alt="category_card"/>

            <div className="absolute inset-0 flex flex-col justify-between p-16">
                <div className="space-y-2">
                    <h1 className="font-bold text-2xl line-clamp-2">{title}</h1>
                    <p className="text-deep-dark text-opacity-50 text-lg line-clamp-3">{description}</p>
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
    )
}
export default CategoryCard;