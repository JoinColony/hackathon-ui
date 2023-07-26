import ProjectCard from 'components/ProjectCard/ProjectCard';
import TitleContainer from 'components/TitleContainer';

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
      <div className="w-full flex justify-center">
        <ProjectCard />
      </div>
    </>
  );
};

export default ApprovePoolPage;
