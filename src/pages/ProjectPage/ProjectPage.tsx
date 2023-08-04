import ProjectFeedItem from './ProjectFeedItem';
import useApi from 'hooks/useApi';
import { useState, useEffect, useContext } from 'react';
import { useParams } from 'react-router-dom';
import { Link } from 'react-router-dom';
import CircleComponent from 'components/UserCircleAvatar';
import Button from 'components/Button/Button';
import Modal from 'components/Modal/Modal';
import { AuthContext } from 'components/AuthContext';
import LoadingSpinner from 'components/LoadingSpinner/LoadingSpinner';

const ProjectPage = () => {
  const { id } = useParams();
  const { getData, postData, loading, error } = useApi();
  const { address } = useContext(AuthContext);
  const [isModalOpen, setIsModalOpen] = useState<boolean>(false);
  const [formValue, setFormValue] = useState<string>('');

  const [project, setProject] = useState<{
    projectTitle: string;
    projectWebsite?: string;
    colonyUrl?: string;
    colonyAddress?: string;
    projectDescription?: string;
    updates?: { content: string; timestamp: number }[];
  }>({
    projectTitle: '',
  });

  const [projectOwner, setProjectOwner] = useState<string>('');

  useEffect(() => {
    const getProject = async () => {
      const data = (await getData(`projects/${id}`)) || '{}';
      setProject(JSON.parse(data.info || '{}'));
      setProjectOwner(data.userId);
    };

    getProject();
  }, [getData, id]);

  const handleSubmit = () => {
    const updatedProject = {
      ...project,
      updates: [
        ...(project?.updates ?? []),
        { content: formValue, timestamp: Date.now() },
      ],
    };

    setProject(updatedProject);
    postData(
      `projects/${id}`,
      { info: JSON.stringify(updatedProject), userId: address },
      'PUT',
    );
    setIsModalOpen(false);
    setFormValue('');
  };

  if (loading) {
    return <LoadingSpinner />;
  }

  if (error) {
    return (
      <div className="text-red-600 font-bold text-center mt-8">
        Error: {error}
      </div>
    );
  }

  if (!project?.projectTitle) {
    return (
      <div className="text-red-600 font-bold text-center mt-8">
        No such project
      </div>
    );
  }

  const {
    projectTitle,
    projectDescription,
    updates = [],
    projectWebsite,
  } = project;

  return (
    <div className="w-full flex flex-col items-end p-24 pt-12 pb-12 gap-y-2">
      <div className="flex flex-col gap-6 p-6 pt-11 max-w-7xl rounded-lg shadow border border-gray-200 bg-white w-full">
        <div className="flex items-start gap-6">
          <div className="w-32 h-32">
            <CircleComponent name={projectTitle} />
          </div>
          <div className="flex flex-col gap-2">
            <h1 className="text-gray-900 text-3xl font-semibold leading-[38px]">
              {projectTitle}
            </h1>
            {projectDescription && (
              <p className="text-slate-600 text-base font-normal leading-normal">
                {projectDescription}
              </p>
            )}
            {projectWebsite && (
              <Link to={projectWebsite} className="flex items-center gap-2">
                <div className="w-4 h-4 relative">
                  <img
                    className="relative max-w-full"
                    alt="Globe icon"
                    src="/globe.svg"
                  />
                </div>
                <span className="text-gray-900 text-sm font-normal leading-tight">
                  Project website
                </span>
              </Link>
            )}
          </div>
        </div>
        {updates.length > 0 ? (
          <>
            <h2 className="text-gray-900 text-lg font-semibold leading-7">
              Project feed
            </h2>
            {updates.map((update, index) => (
              <div>
                <ProjectFeedItem key={index} {...update} />
              </div>
            ))}
          </>
        ) : (
          <div className="self-stretch flex-col justify-start items-start gap-1 flex">
            <div className="text-gray-900 text-xs font-normal leading-[18px]">
              No project updates yet...
            </div>
          </div>
        )}
      </div>
      {address === projectOwner && (
        <Button label="Update" onClick={() => setIsModalOpen(true)} />
      )}
      {isModalOpen && (
        <Modal
          handleClose={() => setIsModalOpen(false)}
          handleSubmit={handleSubmit}
          headingText="Update"
          subHeadingText="Provide an update to the community about your project"
          submitButtonText="Update"
          form={
            <form className="w-full">
              <textarea
                onChange={(e) => {
                  setFormValue(e.target.value);
                }}
                className="p-2 rounded-sm border border-gray-300 resize-none w-full min-h-[200px]"
                value={formValue}
              />
            </form>
          }
        />
      )}
    </div>
  );
};

export default ProjectPage;
