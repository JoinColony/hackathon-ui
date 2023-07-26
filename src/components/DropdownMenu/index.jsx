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

const DropdownMenu = ({ onClick, onStateChange }) => {
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
      <button type="button" className="relative z-10">
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="h-6 w-6">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 8h16M4 16h16" />
        </svg>
      </button>
      {isOpen && (
        <div className="w-52 h-36 p-6 bg-white rounded-lg shadow border border-gray-200 flex-col justify-start items-start gap-4 inline-flex absolute right-0 z-20">
          <div className="self-stretch justify-start items-start gap-4 inline-flex">
            <div className="grow shrink basis-0 flex-col justify-start items-start gap-1 inline-flex">
              <div className="self-stretch text-gray-900 text-sm font-normal leading-tight">View on Colony</div>
            </div>
          </div>
          <div className="self-stretch justify-start items-center gap-4 inline-flex">
            <div className="grow shrink basis-0 flex-col justify-start items-start gap-1 inline-flex">
              <div className="self-stretch text-gray-900 text-sm font-normal leading-tight">View project</div>
            </div>
          </div>
          <div className="self-stretch text-gray-900 text-sm font-normal leading-tight">View website</div>
        </div>
      )}
    </div>
  );
};

export default DropdownMenu;
