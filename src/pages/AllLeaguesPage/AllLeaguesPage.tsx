import PageTitle from 'components/Title';
import Container from 'components/Container/Container';
import TiersList from './TiersList';

import useApi from 'hooks/useApi';
import { useEffect, useState } from 'react';
import { Project } from 'types';

// league tier is floored log2 of leagueId, plus 1
const getLeagueTier = (leagueId: number) => Math.floor(Math.log2(leagueId)) + 1;

const AllLeaguesPage = () => {
  const { getData } = useApi();

  const [tiers, setTiers] = useState<Record<number, Project[]>>([]);

  useEffect(() => {
    const fetchProjects = async () => {
      const projects = await getData('projects');

      // Map between league tier and projects
      const tiers: Record<number, Project> = {};
      projects.forEach((project: Project) => {
        const tier = getLeagueTier(project.leagueId);
        if (!tiers[tier]) {
          tiers[tier] = [project];
        } else {
          tiers[tier].push(project);
        }
      });

      setTiers(tiers);
    };

    fetchProjects();
  }, [getData]);

  return (
    <div>
      <Container>
        <PageTitle
          title="All League Tiers"
          subtitle="Overview of all league tiers, projects, and total available funding."
          button={null}
        />
        <div className="px-8 flex flex-col gap-y-4">
          <TiersList tiers={tiers} />
        </div>
      </Container>
    </div>
  );
};

export default AllLeaguesPage;
