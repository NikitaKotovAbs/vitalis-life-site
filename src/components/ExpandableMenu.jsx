import { useState } from 'react';

const ExpandableMenu = ({
  title = "Заголовок меню",
  content = "Содержимое меню",
  expandTitle = "Приготовление и прием",
  arrowUp,
  arrowDown,
}) => {
  const [isExpanded, setIsExpanded] = useState(false);

  const toggleMenu = () => {
    setIsExpanded(!isExpanded);
  };

  // Функция для форматирования текста с выделением заголовков
  const formatContent = (text) => {
    // Сначала нормализуем все специальные пробелы и переносы
    const normalizedText = text.replace(/[\u00A0\u202F\u2007\u2060]/g, ' ');

    return normalizedText.split('\n').map((paragraph, index) => {
      // Убираем лишние пробелы и проверяем на заголовок
      const trimmedPara = paragraph.trim();

      // Более гибкая проверка на заголовок (## в начале и конце)
      const isHeading = trimmedPara.startsWith('##') && trimmedPara.endsWith('##');

      if (isHeading) {
        const headingText = trimmedPara.slice(2, -2).trim();
        return (
          <h3 key={index} className="text-black font-medium mb-3 mt-6 text-base">
            {headingText}
          </h3>
        );
      }

      return (
        <p key={index} className="mb-4 last:mb-0 text-deep-dark text-opacity-75 ">
          {trimmedPara || <br />}
        </p>
      );
    });
  };

  return (
    <div className="border border-gray-200 rounded-lg overflow-hidden shadow-sm">
      <div
        className="flex flex-row items-center justify-between p-5 cursor-pointer hover:bg-gray-50 transition-colors"
        onClick={toggleMenu}
      >
        <h2 className="ph:text-base lg:text-xl font-medium text-gray-800">
          {title}
        </h2>
        <button
          onClick={(e) => {
            e.stopPropagation();
            toggleMenu();
          }}
          className="focus:outline-none text-gray-500 hover:text-gray-700 transition-colors"
          aria-label={isExpanded ? "Свернуть" : "Развернуть"}
        >
          {isExpanded ? (
            <img src={arrowDown || arrowUp} alt="" className=""/>
          ) : (
            <img src={arrowUp || arrowDown} alt="" className=""/>
          )}
        </button>
      </div>

      {isExpanded && (
        <div className="px-4 md:px-6 py-4 md:py-5 bg-gray-50 transition-all duration-200">
          <div className="ph:max-w-[60vw] md:max-w-[50vw]">
            {typeof content === 'string' ? formatContent(content) : content}
          </div>
        </div>
      )}
    </div>
  );
};

export default ExpandableMenu;