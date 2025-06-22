import React from 'react';

const NavTab = ({ items = [], separator = '>' }) => {
  return (
    <div className="flex items-center">
      {items.map((item, index) => (
        <React.Fragment key={index}>
          <span className="text-gray-800">{item}</span>
          {index < items.length - 1 && (
            <span className="mx-2 text-gray-500">{separator}</span>
          )}
        </React.Fragment>
      ))}
    </div>
  );
};

export default NavTab;