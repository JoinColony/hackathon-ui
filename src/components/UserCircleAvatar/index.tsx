import React from 'react';

const CircleComponent = ({ color = "pink-400", name = "User" }) => {
  return (
    <div className={`w-32 h-32 rounded-full flex items-center justify-center bg-` + color}>
      <p className={`text-white text-6xl`}>{name.slice(0, 1).toUpperCase()}</p>
    </div>
  )
}

export default CircleComponent;
