import ProjectFeedItem from "./ProjectFeedItem";
import useApi from 'hooks/useApi';
import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { Link } from 'react-router-dom';
import CircleComponent from 'components/UserCircleAvatar';

const ProjectPage = () => {
  const { id } = useParams();
  const { getData, loading, error } = useApi();
  const [project, setProject] = useState<{
    projectTitle: string;
    projectWebsite?: string;
    colonyUrl?: string;
    colonyAddress?: string;
    projectDescription?: string;
    updates?: any[];
  }>();

  useEffect(() => {
    const getProject = async () => {
      const data = await getData(`projects/${id}`) || '{}';
      setProject(JSON.parse(data.info || '{}'));
    };

    getProject();
  }, [getData, id]);

  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div className="text-red-600 font-bold text-center mt-8">Error: {error}</div>;
  }

  if (!project?.projectTitle) {
    return <div className="text-red-600 font-bold text-center mt-8">No such project</div>;
  }

  const { projectTitle, projectDescription, updates = [], projectWebsite } = project;

  return (
    <div className="w-full flex justify-center p-24 pt-12 pb-12">
      <div className="flex flex-col gap-6 p-6 pt-11 max-w-7xl rounded-lg shadow border border-gray-200 bg-white w-full">
        <div className="flex items-start gap-6">
          <CircleComponent name={projectTitle} />
          <div className="flex flex-col gap-2">
            <h1 className="text-gray-900 text-3xl font-semibold leading-[38px]">{projectTitle}</h1>
            {projectDescription  && <p className="text-slate-600 text-base font-normal leading-normal">{projectDescription}</p>}
            {projectWebsite && (
              <Link to={projectWebsite} className="flex items-center gap-2">
                <div className="w-4 h-4 relative">
                  <img className="relative max-w-full" alt="Globe icon" src="/globe.svg" />
                </div>
                <span className="text-gray-900 text-sm font-normal leading-tight">Project website</span>
              </Link>
            )}
          </div>
        </div>
        {updates.length > 0 ? (
          <>
            <h2 className="text-gray-900 text-lg font-semibold leading-7">Project feed</h2>
            {updates.map((update, index) => (
              <div>
                <ProjectFeedItem key={index} {...update} />
              </div>
            ))}
          </>) : (
            <div className="self-stretch flex-col justify-start items-start gap-1 flex">
              <div className="text-gray-900 text-xs font-normal leading-[18px]">No project updates yet...</div>
            </div>
          )}
      </div>
    </div>
  );
};

export default ProjectPage;
