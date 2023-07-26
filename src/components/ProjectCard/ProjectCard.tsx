import CircleComponent from 'components/UserCircleAvatar';

const ProjectCard = () => {
  return (
    <div className="w-488 border border-light-gray-200 p-6 rounded-md">
      <div className="self-stretch h-full flex-col justify-start items-center gap-4 flex">
        <CircleComponent name="Cat" />
        <div className="justify-start items-center gap-3 inline-flex">
          <div className="justify-start items-end gap-2.5 flex">
            <div className="justify-start items-center gap-1 flex">
              <div className="text-gray-900 text-2xl font-semibold leading-[30px]">
                Cat
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="self-stretch text-center text-slate-600 text-sm font-medium leading-tight">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
        tempor incididunt ut labore et dolore magna aliqua.
      </div>
    </div>
  );
};

export default ProjectCard;
