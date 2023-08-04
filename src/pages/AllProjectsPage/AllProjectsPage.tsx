import Container from 'components/Container';
import Metrics from 'components/Metrics';
import Notification from 'components/Notification';
import ProjectItem from 'components/ProjectItem';
import { useEffect, useState } from 'react';
import { Project } from 'types';
import { Link } from 'react-router-dom';
import useApi from 'hooks/useApi';
import UserCircleAvatar from 'components/UserCircleAvatar';
import { calculateSingleProjectBudget, getLeagueTier } from 'helpers/tiers';

// const projects = [
//   {
//     name: 'Dog',
//     avatar: <UserCircleAvatar name="Dog" size="small" />,
//     amount: 45110,
//     percentage: 44,
//   },
//   {
//     name: 'Cat',
//     avatar: <UserCircleAvatar name="Cat" size="small" />,
//     amount: 34110,
//     percentage: 34,
//   },
//   {
//     name: 'Rabbit',
//     avatar: <UserCircleAvatar name="Rabbit" size="small" />,
//     amount: 22098,
//     percentage: 12,
//   },
//   {
//     name: 'Horse',
//     avatar: <UserCircleAvatar name="Horse" size="small" />,
//     amount: 6756,
//     percentage: 8,
//   },
// ];

const TOTAL_BUDGET = 100_000;

const AllProjectsPage = () => {
  const { getData } = useApi();

  const [projects, setProjects] = useState<Project[]>([]);
  const [votesCount, setVotesCount] = useState(0);

  useEffect(() => {
    const fetchProjects = async () => {
      const projects = await getData('projects?where={"leagueId": {"not": 0}}');

      const leagueProjects: Project[] = [];
      projects.forEach((project: Project) => {
        const { leagueId } = project;

        if (leagueProjects[leagueId]) {
          leagueProjects[leagueId].push(project);
        } else {
          leagueProjects[leagueId] = [project];
        }
      });

      const mappedProjects = [];
      console.log({ leagueProjects });

      for (const projects of leagueProjects) {
        if (!projects) {
          continue;
        }

        for (let i = 0; i < projects.length; i++) {
          const project = projects[i];
          const tier = getLeagueTier(project.leagueId);
          const budget = calculateSingleProjectBudget(
            tier,
            i + 1,
            TOTAL_BUDGET,
          );
          mappedProjects.push({ ...project, budget, tier });
        }
      }

      setProjects(mappedProjects);
    };

    const fetchVotesCount = async () => {
      const votes = await getData('votes');
      setVotesCount(votes?.length ?? 0);
    };

    fetchProjects();
    fetchVotesCount();
  }, [getData]);

  useEffect(() => {
    console.log(projects);
    const highestLeagueId = Math.max(
      ...projects.map((project) => project.leagueId),
    );
    const numberOfTiers = getLeagueTier(highestLeagueId);
    console.log({ numberOfTiers });
  }, [projects]);

  return (
    <div className="pt-12 pb-24 flex flex-col gap-6">
      <Container>
        <div className="flex flex-col justify-start items-start gap-6 self-stretch">
          <div className="self-stretch justify-start items-center gap-4 inline-flex">
            <div className="grow shrink basis-0 flex-col justify-start items-start gap-1 inline-flex">
              <div className="self-stretch text-gray-900 text-3xl font-semibold leading-[38px]">
                League Projects
              </div>
              <div className="self-stretch text-gray-500 text-base font-normal leading-normal">
                List of all projects in all leagues that are currently getting
                funded.
              </div>
            </div>
            <Link to="/vote">
              <button className="px-4 py-2.5 bg-blue-600 rounded-lg justify-center items-start gap-2.5 flex text-center text-white text-sm font-medium leading-tight">
                Vote
              </button>
            </Link>
          </div>
        </div>
      </Container>

      <Notification content="Your votes has been submitted. Results are available in 3d 22 hrs 34min" />

      <Container>
        <Metrics
          metrics={[
            {
              heading: 'Total projects getting funded',
              value: projects.length,
            },
            {
              heading: 'Total funding amount',
              value: (
                <>
                  <span className="text-gray-900 text-4xl font-semibold leading-[44px]">
                    {`$${new Intl.NumberFormat('en-US').format(
                      projects.reduce(
                        (total, project) => total + project.budget,
                        0,
                      ),
                    )}`}
                  </span>
                  <span className="text-gray-900 text-base font-semibold leading-[44px]">
                    USD
                  </span>
                </>
              ),
            },
            { heading: 'Total votes', value: votesCount },
          ]}
        />
      </Container>

      <Container>
        <div className="flex flex-col gap-4">
          <h3 className="text-gray-900 text-2xl font-semibold leading-[30px]">
            Project funding leaderboard
          </h3>
          {projects.map(({ leagueId, info, budget }, index) => {
            const projectInfo = JSON.parse(info);

            return (
              <>
                <ProjectItem
                  key={index}
                  rank={index + 1}
                  name={projectInfo.projectTitle}
                  avatar={
                    <UserCircleAvatar
                      name={projectInfo.projectTitle}
                      size="small"
                    />
                  }
                  isTop={index === 0}
                  // TODO
                  primaryMetric={`$${new Intl.NumberFormat('en-US').format(
                    budget,
                  )} USD`}
                />
              </>
            );
          })}
        </div>
      </Container>
    </div>
  );
};

export default AllProjectsPage;
