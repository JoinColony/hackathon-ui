const CircleComponent = ({ color = 'bg-pink-400', name = 'User' }) => {
  return (
    <div
      className={
        `w-32 h-32 rounded-full flex items-center justify-center ` + color
      }
    >
      <p className={`text-white text-6xl`}>{name.slice(0, 1).toUpperCase()}</p>
    </div>
  );
};

export default CircleComponent;
