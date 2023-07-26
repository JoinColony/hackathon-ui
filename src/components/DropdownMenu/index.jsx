import React, { useState, useEffect, useRef } from 'react';

// Custom hook for handling clicks outside
const useClickOutside = (handler) => {
  let domNode = useRef();

  useEffect(() => {
    const eventListener = (event) => {
      if (!domNode.current.contains(event.target)) {
        handler();
      }
    };

    document.addEventListener('mousedown', eventListener);

    return () => {
      document.removeEventListener('mousedown', eventListener);
    };
  });

  return domNode;
};

const DropdownMenu = ({ onClick, onStateChange, items, children }) => {
  const [isOpen, setIsOpen] = useState(false);

  const handleClickInside = (event) => {
    event.stopPropagation();
    event.preventDefault();
    setIsOpen(!isOpen);
    if (onStateChange) {
      onStateChange(!isOpen);
    }
  };

  let domNode = useClickOutside(() => {
    setIsOpen(false);
    if (onStateChange) {
      onStateChange(false);
    }
  });

  return (
    <div ref={domNode} onClick={handleClickInside}>
      {children}
      {isOpen && (
        <div className="w-52 h-36 p-6 bg-white rounded-lg shadow border border-gray-200 flex-col justify-start items-start gap-4 inline-flex absolute right-0 z-20">
          {items.map((item) => (
            <div className="self-stretch justify-start items-start gap-4 inline-flex">
              <div className="grow shrink basis-0 flex-col justify-start items-start gap-1 inline-flex">
                <button className="self-stretch text-gray-900 text-sm font-normal leading-tight" onClick={item.handler}>{item.name}</button>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default DropdownMenu;
