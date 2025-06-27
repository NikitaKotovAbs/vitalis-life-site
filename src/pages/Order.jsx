import useDeviceDetection from "../hooks/useDeviceDetection.js";
import NavTab from "../components/NavTab.jsx";

export default function Order() {
    const {isMobile} = useDeviceDetection();
    return (
        <div className="p-4 space-y-8 max-w-7xl mx-auto">
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
                <NavTab items={['Главная', 'Оформление заказа']}/>
            )}


        </div>
    )
}