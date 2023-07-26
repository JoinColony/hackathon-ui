import React from 'react';
import 'tailwindcss/tailwind.css';

const CircleComponent = ({ color = 'pink-500', name = 'User' }) => {
  return (
    <div
      className={`w-32 h-32 bg-${color} rounded-full flex items-center justify-center`}
    >
      <p className={`text-white text-5xl`}>{name.slice(0, 1).toUpperCase()}</p>
    </div>
  );
};

export default CircleComponent;
