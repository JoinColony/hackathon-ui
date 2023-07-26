import ProjectCard from 'components/ProjectCard/ProjectCard';
import TitleContainer from 'components/TitleContainer';
import Controls from './Controls';

const ApprovePoolPage = () => {
  return (
    <>
      <TitleContainer
        title="Promote a project"
        subtitle="Use your reputation to support a project for promotion to the funding league."
        button={
          <button className="rounded-md bg-light-blue-400 text-white px-4 py-2.5">
            View Leaderboard
          </button>
        }
      />
      <div className="w-screen flex justify-center">
        <div className="flex flex-col gap-y-6 items-center justify-center w-488 border border-light-gray-200 p-6 rounded-md">
          <ProjectCard
            title="Cat"
            subtitle="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
        tempor incididunt ut labore et dolore magna aliqua."
          />
          <Controls />
        </div>
      </div>
    </>
  );
};

export default ApprovePoolPage;
