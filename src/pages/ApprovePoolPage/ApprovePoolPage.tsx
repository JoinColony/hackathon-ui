import ProjectCard from 'components/ProjectCard/ProjectCard';
import TitleContainer from 'components/TitleContainer';
import Controls from './Controls';

const ApprovePoolPage = () => {
  return (
    <>
      <TitleContainer
        title="Colony Pool"
        subtitle="Lorem Ipsum"
        button={
          <button className="rounded-md bg-light-blue-400 text-white px-4 py-2.5">
            View Leaderboard
          </button>
        }
      />
      <div className="w-full flex flex-col gap-y-6 items-center justify-center">
        <ProjectCard
          title="Cat"
          subtitle="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
        tempor incididunt ut labore et dolore magna aliqua."
        />
        <Controls />
      </div>
    </>
  );
};

export default ApprovePoolPage;
