import { Link } from 'react-router-dom';
import { useState, useContext, useEffect, SyntheticEvent } from 'react';

import { AuthContext } from 'components/AuthContext';
import LoginModal from 'components/LoginModal';
import useApi from 'hooks/useApi';

import ColonyPoolCard from './ColonyPoolCard';
import { getTierFromLeague } from 'utils/leagues';
import Container from 'components/Container/Container';

function generateCombinations(projects: any[]): any[][] {
  let combinations = [];

  for (let i = 0; i < projects.length - 1; i++) {
    for (let j = i + 1; j < projects.length; j++) {
      if (projects[i].leagueId === projects[j].leagueId) {
        combinations.push([projects[i], projects[j]]);
      }
    }
  }

  return combinations;
}

const VotePage = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const { loggedIn } = useContext(AuthContext);
  const api = useApi();
  const [projects, setProjects] = useState([]);

  const [currentCombinationIndex, setCurrentCombinationIndex] =
    useState<number>(0);

  useEffect(() => {
    const storedIndex = localStorage.getItem('currentCombinationIndex');
    if (storedIndex) {
      setCurrentCombinationIndex(Number(storedIndex) || 0);
    }
    (async () => {
      const fetchedProjects = await api.getData('projects');
      setProjects(fetchedProjects);
    })();
    // don't include api in dependencies as it causes an infinite loop
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const updateCombinationIndex = () => {
    const newIndex = currentCombinationIndex + 1;
    localStorage.setItem('currentCombinationIndex', String(newIndex));
    setCurrentCombinationIndex(newIndex);
  };
  const uniqueCombinations = generateCombinations(projects);

  const handleVote = (event: SyntheticEvent, projectId: number) => {
    event.preventDefault();

    if (loggedIn) {
      const votedCombinations = JSON.parse(
        localStorage.getItem('votedCombinations') || '[]',
      );
      const alpha = uniqueCombinations[currentCombinationIndex][0].id;
      const beta = uniqueCombinations[currentCombinationIndex][1].id;
      const vote = projectId === alpha ? 1 : 0;

      votedCombinations.push({ alpha, beta, vote });

      localStorage.setItem(
        'votedCombinations',
        JSON.stringify(votedCombinations),
      );
      updateCombinationIndex();
    } else {
      setIsModalOpen(true);
    }
  };

  const handleSkip = () => {
    updateCombinationIndex();
  };

  const currentCombination = uniqueCombinations[currentCombinationIndex];

  useEffect(() => {
    const votedCombinations = JSON.parse(
      localStorage.getItem('votedCombinations') || '[]',
    );

    if (
      uniqueCombinations.length > 0 &&
      currentCombinationIndex > uniqueCombinations.length - 1
    ) {
      votedCombinations.forEach((combination: any) => {
        api.postData('votes', combination);
      });
      localStorage.removeItem('votedCombinations');
      localStorage.removeItem('currentCombinationIndex');
    }
  }, [api, currentCombinationIndex, uniqueCombinations]);

  return (
    <div className="mx-auto flex justify-center items-center">
      <div className="w-full h-full pt-12 pb-24 bg-white rounded-tl-[40px] rounded-bl-[40px] flex-col justify-start items-start gap-8 inline-flex">
        <div className="self-stretch w-full h-full flex-col justify-start items-center gap-6 flex">
          <div className="w-full h-full px-8 flex-col justify-start items-start gap-6 flex mb-16">
            <div className="self-stretch h-full flex-col justify-start items-start gap-5 flex">
              <div className="self-stretch justify-start items-start gap-4 inline-flex">
                <div className="w-full flex-col justify-start items-start gap-1 inline-flex">
                  <div className="self-stretch justify-start items-center gap-1 inline-flex">
                    <div className="grow shrink basis-0 text-gray-900 text-3xl font-semibold leading-[38px]">
                      Choose A Project
                    </div>
                    <Link
                      to="#"
                      className="text-blue-400 text-base font-semibold leading-normal"
                    >
                      Funding Pool $100,000
                    </Link>
                  </div>
                  <div className="self-stretch justify-start items-center gap-1 inline-flex">
                    <div className="grow shrink basis-0 text-gray-500 text-base font-normal leading-normal">
                      Use your reputation to support a project, the higher their
                      ranking the more funding they will receive.
                    </div>
                    <div className="justify-start items-center gap-1 flex">
                      <div className="w-4 h-4 relative" />
                      <Link
                        to="/all-leagues"
                        className="text-center text-gray-900 text-xs font-medium leading-[18px] hover:text-blue-400"
                      >
                        View All Leagues
                      </Link>
                    </div>
                  </div>
                </div>
                <div className="justify-start items-center gap-3 flex">
                  <div className="rounded-lg" />
                </div>
              </div>
            </div>
          </div>
        </div>
        {currentCombination ? (
          <div className="self-stretch h-full flex-col justify-start items-center gap-6 flex">
            <div className="w-full h-full px-8 flex-col justify-start items-start gap-6 flex">
              <div className="self-stretch justify-start items-start gap-6 inline-flex">
                {currentCombination.map((project: any) => {
                  const {
                    projectTitle,
                    projectDescription,
                    updates = [],
                  } = JSON.parse(project.info);
                  const [lastUpdate] = updates.sort(
                    (
                      { timestamp: timestampA }: { timestamp: number },
                      { timestamp: timestampB }: { timestamp: number },
                    ) => timestampB - timestampA,
                  );
                  return (
                    <ColonyPoolCard
                      key={project.id}
                      projectId={project.id}
                      onClick={handleVote}
                      title={projectTitle}
                      subtitle={projectDescription}
                      lastUpdated={lastUpdate?.timestamp || 1000000000000}
                    />
                  );
                })}
              </div>
            </div>
            <div className="self-stretch justify-center items-center gap-2.5 inline-flex">
              <div className="justify-start items-center gap-1 flex">
                <Link
                  to={`/tier/${getTierFromLeague(
                    currentCombination[0].leagueId,
                  )}`}
                  className="text-center text-gray-900 text-xs font-medium leading-[18px] hover:text-light-blue-400"
                >
                  View league tier
                </Link>
              </div>
              <div className="px-3 py-2 bg-white rounded-lg border border-gray-300 hover:border-light-blue-400 justify-center items-center gap-2 flex group cursor-pointer">
                <button
                  type="submit"
                  className="group-hover:text-light-blue-400 text-center text-slate-700 text-xs font-medium leading-[18px]"
                  onClick={handleSkip}
                >
                  Skip choice
                </button>
              </div>
            </div>
          </div>
        ) : (
          <Container>
            <div className="flex justify-center">
              <div className="font-bold">You're all caught up!</div>
            </div>
          </Container>
        )}
      </div>
      {isModalOpen && <LoginModal onClose={() => setIsModalOpen(false)} />}
    </div>
  );
};

export default VotePage;
