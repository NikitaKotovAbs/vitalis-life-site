import React from 'react';

const InfiniteScrollingText = ({
  text,
  textSize = "text-[15vw]",
  background = false,
  backgroundColor = "bg-avocado",
  backgroundSize = "p-0",
  textColor = "text-avocado",
  darkTextColor = "text-avocado-dark",
  repeatCount = 2,
  className = "",
  speedPerChar = 0.1
}) => {
  const duration = `${text.length * speedPerChar}s`;

  return (
    <div className={`relative w-full overflow-hidden ${className}`}>
      <div className={`whitespace-nowrap flex items-center ${background ? backgroundColor : ''} ${background ? backgroundSize : ''}`}>
        {/* Основной блок */}
        <div
          className="animate-infinite-scroll flex"
          style={{ animationDuration: duration }}
        >
          {[...Array(repeatCount)].map((_, i) => (
            <span
              key={`first-${i}`}
              className={`mx-8 ${textSize} ${background ? darkTextColor : textColor} ${
                background ? '' : 'text-opacity-25'
              } uppercase font-inter font-extralight italic`}
            >
              {text}
            </span>
          ))}
        </div>

        {/* Дублирующий блок */}
        <div
          className="animate-infinite-scroll flex"
          aria-hidden="true"
          style={{ animationDuration: duration }}
        >
          {[...Array(repeatCount)].map((_, i) => (
            <span
              key={`second-${i}`}
              className={`mx-8 ${textSize} ${background ? darkTextColor : textColor} ${
                background ? '' : 'text-opacity-25'
              } uppercase font-inter font-extralight italic`}
            >
              {text}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
};

export default InfiniteScrollingText;