const Controls = () => {
  return (
    <div className="flex justify-center gap-x-2">
      <button className="py-2 px-3 border border-light-gray-200 rounded-md">
        Skip
      </button>
      <button className="border border-light-gray-200 rounded-md py-2 px-3 bg-light-blue-400 text-white">
        Vote to promote
      </button>
    </div>
  );
};

export default Controls;
