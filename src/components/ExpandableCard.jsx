import { useState } from 'react';
import useDeviceDetection from "../hooks/useDeviceDetection.js";

const ExpandableCard = ({
  title,
  description,
  expandTitle = "Приготовление и прием",
  expandContent,
  imageSrc,
  imageAlt = "Изображение продукта",
  arrowUp,
  arrowDown,
  // textSize = "text-xl",
  // maxWidth = "max-w-[28vw]"
}) => {
  const isMobile = useDeviceDetection();
  const [isExpanded, setIsExpanded] = useState(false);

  const toggleDescription = () => {
    setIsExpanded(!isExpanded);
  };

  return (
    <div className="flex flex-col md:flex-row gap-6 lg:gap-10">
      {/* Для мобильных: сначала картинка */}


      {/* Контентная часть (всегда) */}
      <div className="flex flex-col flex-1">
        <h1 className="text-2xl lg:text-3xl mb-4">{title}</h1>

        {description && (
          <p className={`mb-6 lg:mb-10 lg:text-2xl lg:max-w-[40vw] ph:text-sm text-xl text-deep-dark text-opacity-75`}>
            {description}
          </p>
        )}

        {isMobile && imageSrc && (
        <div className="w-full ph:pb-5">
          <img
            src={imageSrc}
            alt={imageAlt}
            className="rounded-lg w-full h-auto object-cover"
            style={{ maxHeight: '500px' }}
          />
        </div>
      )}

        {expandContent && (
          <div className="border rounded-lg overflow-hidden">
            <div
              className="flex flex-row items-center justify-between p-4 cursor-pointer hover:bg-gray-50 transition-colors"
              onClick={toggleDescription}
            >
              <h2 className="text-xl lg:text-2xl">{expandTitle}</h2>
              <button
                onClick={(e) => {
                  e.stopPropagation();
                  toggleDescription();
                }}
                className="p-2 focus:outline-none"
              >
                {isExpanded ? (
                  <img src={arrowDown || arrowUp} alt="Свернуть" className="w-5 h-5"/>
                ) : (
                  <img src={arrowUp || arrowDown} alt="Развернуть" className="w-5 h-5"/>
                )}
              </button>
            </div>

            {isExpanded && (
              <div className="px-4 pb-6 transition-all duration-200">
                <p className={`ph:text-lg lg:text-xl text-deep-dark text-opacity-75 ph:max-w-80 lg:max-w-[28vw]`}>
                  {expandContent}
                </p>
              </div>
            )}
          </div>
        )}
      </div>

      {/* Для десктопа: картинка справа */}
      {!isMobile && imageSrc && (
        <div className="md:self-start">
          <img
            src={imageSrc}
            alt={imageAlt}
            className="rounded-lg w-full md:w-[43vw] h-auto object-cover"
            style={{ maxHeight: '500px' }}
          />
        </div>
      )}
    </div>
  );
};

export default ExpandableCard;