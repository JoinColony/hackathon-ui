import ProjectFeedItem from "./ProjectFeedItem";

const ProjectPage = () => {
  return (
    <div className="w-full flex justify-center p-24 pt-12 pb-12">
      <div className="flex flex-col gap-6 p-6 pt-11 max-w-7xl rounded-lg shadow border border-gray-200 bg-white w-full">
        <div className="flex items-start gap-6">
          <div className="w-[94px] h-[94px] flex justify-center items-center bg-gray-100 rounded-full" />
          <div className="flex flex-col gap-2">
            <h1 className="text-gray-900 text-3xl font-semibold leading-[38px]">Dog Project</h1>
            <p className="text-slate-600 text-base font-normal leading-normal">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
            <a href="/" className="flex items-center gap-2">
              <div className="w-4 h-4 relative">
                <img className="relative max-w-full" alt="Globe icon" src="/globe.svg" />
              </div>
              <span className="text-gray-900 text-sm font-normal leading-tight">Project website</span>
            </a>
          </div>
        </div>
        <h2 className="text-gray-900 text-lg font-semibold leading-7">Project feed</h2>
        {Array(6).fill(null).map((_, index) => (
          <ProjectFeedItem key={index} />
        ))}
      </div>
    </div>
  );
};

export default ProjectPage;
