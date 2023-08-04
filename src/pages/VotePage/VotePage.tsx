import { Link } from 'react-router-dom';
import { useState, useContext, useEffect, SyntheticEvent } from 'react';

import { AuthContext } from 'components/AuthContext';
import LoginModal from 'components/LoginModal';
import useApi from 'hooks/useApi';

import ColonyPoolCard from './ColonyPoolCard';

function generateCombinations(projects: any[]): any[][] {
  let combinations = [];

  for (let i = 0; i < projects.length - 1; i++) {
    for (let j = i + 1; j < projects.length; j++) {
      if (projects[i].leagueId === projects[j].leagueId) {
        combinations.push([projects[i], projects[j]]);
      }
    }
  }

  // todo filter out already voted combinations, only if user is logged in
  return combinations;
}

const VotePage = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const { loggedIn } = useContext(AuthContext);
  const api = useApi();
  const [projects, setProjects] = useState([]);
  const [uniqueCombinations, setUniqueCombinations] = useState<any[][]>([]);
  const [leagues, setLeagues] = useState<{ id: number }[]>([]);
  const [currentLeague, setCurrentLeague] = useState(null);
  const [currentCombinationIndexes, setCurrentCombinationIndexes] = useState<Record<number, number>>({});

  const ITEMS_COUNT_TO_VOTE_IN_LEAGUE = 5;
  const currentLeagueId = (currentLeague as any)?.id;
  const uniqueCombinationsInCurrentLeague = uniqueCombinations.filter(combination => combination[0].leagueId === (currentLeague as unknown as { id: number })?.id);
  const [currentCombination] = uniqueCombinationsInCurrentLeague.slice(currentCombinationIndexes[currentLeagueId] || 0, currentCombinationIndexes[currentLeagueId] + 1 || 1);

  useEffect(() => {
    const storedIndexes = localStorage.getItem('currentCombinationIndexes');
    if (storedIndexes) {
      setCurrentCombinationIndexes(JSON.parse(storedIndexes || '{}') || {});
    }
    (async () => {
      let fetchedProjects = await api.getData('projects');
      fetchedProjects = fetchedProjects.filter((p:any) => p.leagueId);
      setProjects(fetchedProjects);
    })();
    // If api is inside the dependency array it will cause a infinite fetch loop
    //
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const updateCombinationIndex = (leagueId: number) => {
    const newIndex = currentCombinationIndexes[leagueId] ? currentCombinationIndexes[leagueId] + 1 : 1;
    if (newIndex <= uniqueCombinationsInCurrentLeague.length) {
      const newCombinationIndexes = { ...currentCombinationIndexes, [leagueId]: newIndex };
      localStorage.setItem('currentCombinationIndexes', JSON.stringify(newCombinationIndexes));
      setCurrentCombinationIndexes(newCombinationIndexes);
    }
  };

  useEffect(() => {
    if (projects && projects.length > 0) {
      const combinations = generateCombinations(projects);
      setUniqueCombinations(combinations)
    }
  }, [projects]);

  const handleVote = (event: SyntheticEvent, projectId: number) => {
    event.preventDefault();

    if (loggedIn) {
      const votedCombinations = JSON.parse(
        localStorage.getItem('votedCombinations') || '[]',
      );

      // prevent voting if no more conbinations in the league
      if (uniqueCombinationsInCurrentLeague.slice(currentCombinationIndexes[currentLeagueId] || 1).length >= 1) {
        const alpha = uniqueCombinationsInCurrentLeague[currentCombinationIndexes[currentLeagueId] || 0][0].id;
        const beta = uniqueCombinationsInCurrentLeague[currentCombinationIndexes[currentLeagueId] || 0][1].id;
        const vote = projectId === alpha ? 1 : 0;

        votedCombinations.push({ alpha, beta, vote });

        localStorage.setItem(
          'votedCombinations',
          JSON.stringify(votedCombinations),
        );

        updateCombinationIndex(currentLeagueId);

        const remainingLeagues = leagues
          .filter(({ id }) => {
            const uniqueCombinationsInLeague = uniqueCombinations.filter(combination => combination[0].leagueId === id);
            return uniqueCombinationsInLeague.length >= (currentCombinationIndexes[id] || 0);
          });

        if (remainingLeagues.length) {
          const randMax = remainingLeagues.length - 1;
          const randMin = 0;
          const randomLeagueId = Math.floor(Math.random() * (randMax - randMin + 1) + randMin);
          const newLeague = remainingLeagues[randomLeagueId];

          if (currentCombinationIndexes[currentLeagueId] % ITEMS_COUNT_TO_VOTE_IN_LEAGUE === 0) {
            setCurrentLeague(newLeague as any);
          }
        }

      } else {
        alert('voted on everything in this league')
      }
    } else {
      // force user to log in
      setIsModalOpen(true);
    }
  };

  useEffect(() => {
    const remainingLeagues = leagues
      .filter(({ id }) => {
        const uniqueCombinationsInLeague = uniqueCombinations.filter(combination => combination[0].leagueId === id);
        return uniqueCombinationsInLeague.length >= (currentCombinationIndexes[id] || 0);
      });
    if ((currentCombination || []).length <= 0 && remainingLeagues.length >= 0) {
      // @ts-ignore
      setCurrentLeague(remainingLeagues[0]);
    }
  }, [currentCombination, currentCombinationIndexes, leagues, uniqueCombinations]);

  const handleSkip = () => {
    updateCombinationIndex((currentLeague as any)?.id);
  };

  // post votes to the server
  useEffect(() => {
    const votedCombinations = JSON.parse(localStorage.getItem('votedCombinations') || '[]');

    // todo: post after voting on just a couple of items in the league
    if (votedCombinations.length === uniqueCombinations.length) {
      votedCombinations.forEach((combination: any) => {
        api.postData('votes', combination);
      });
      localStorage.removeItem('votedCombinations');
      localStorage.removeItem('currentCombinationIndexes');
    }
  }, [api, currentCombinationIndexes, uniqueCombinations, currentLeague]);

  // update leagues and current league
  useEffect(() => {
    if (uniqueCombinations.length > 0) {
      // extract leagues
      const allLeagues = uniqueCombinations.reduce((leagueAcc: { id: number }[] = [], project) => {
        const [{ leagueId }] = project;
        const leagueExists = leagueAcc.find(({ id }: { id: number }) => id === leagueId);
        if (!leagueExists) {
          return [...leagueAcc, { id: leagueId }];
        }
        return leagueAcc;
      }, []).sort(({ id: leagueIdA }: { id: number }, { id: leagueIdB }: { id: number }) => leagueIdA - leagueIdB);
      setLeagues(allLeagues);
      setCurrentLeague(allLeagues[0]);
    }
  }, [uniqueCombinations]);

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
              <p>currently voting in league: {(currentLeague as unknown as { id: number })?.id}</p>
              <div className="self-stretch justify-start items-start gap-6 inline-flex">
                {currentCombination.map((project: any) => {
                  const { projectTitle, projectDescription, updates = [] } = JSON.parse(
                    project.info,
                  );
                  const [lastUpdate] = updates.sort((
                    { timestamp: timestampA }: { timestamp: number },
                    { timestamp: timestampB }: { timestamp: number }
                  ) => timestampB - timestampA);
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
                  to="#"
                  className="text-center text-gray-900 text-xs font-medium leading-[18px] hover:text-light-blue-400"
                >
                  View league
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
            <div className="self-stretch h-full flex-col justify-start items-center gap-6 flex">
              <div className="w-full h-full px-8 flex-col justify-start items-start gap-6 flex">
                <div className="self-stretch justify-start items-start gap-6 inline-flex">
                  <div>There's nothing to vote on in this epoch</div>
                </div>
              </div>
            </div>)}
      </div>
      {isModalOpen && <LoginModal onClose={() => setIsModalOpen(false)} />}
    </div>
  );
};

export default VotePage;
