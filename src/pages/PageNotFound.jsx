import { Link } from 'react-router-dom';

export default function PageNotFound() {
    return (
        <div className="flex flex-col p-6 sm:p-12 lg:p-24 min-h-screen justify-center">
            <h1 className="text-2xl sm:text-3xl lg:text-4xl font-medium mb-3 sm:mb-4">
                Упс... Вышла ошибка
            </h1>

            <div className="text-deep-dark opacity-65 text-sm sm:text-base mb-6 sm:mb-8">
                <p className="mb-2">Похоже, вы попали на страницу, которой больше нет</p>
                <p>или которая была перемещена. Возможно, адрес введён с ошибкой.</p>
            </div>

            <div className="mt-4 sm:mt-6 lg:mt-8">
                <Link
                    to="/"
                    className="inline-flex items-center justify-center w-full sm:w-auto px-6 py-3 sm:py-2 rounded-lg bg-deep-dark bg-opacity-5 hover:bg-opacity-10 transition-all duration-300"
                >
                    <span className="text-deep-dark text-opacity-75 font-medium text-sm sm:text-base">
                        &lt; Назад
                    </span>
                </Link>
            </div>
        </div>
    );
}