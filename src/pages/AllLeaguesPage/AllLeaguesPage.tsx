import PageTitle from 'components/TitleContainer/TitleContainer';
import Container from 'components/Container/Container';
import TiersList from './TiersList';

export interface Tier {
  name: string;
  projectsCount: number;
  value: string;
}

const tiers: Tier[] = [
  { name: 'League tier 1', projectsCount: 10, value: '100,000' },
  { name: 'League tier 2', projectsCount: 20, value: '100,000' },
  { name: 'League tier 3', projectsCount: 40, value: '100,000' },
  { name: 'League tier 4', projectsCount: 80, value: '100,000' },
];

const AllLeaguesPage = () => {
  return (
    <div>
      <Container>
        <PageTitle
          title="All League Tiers"
          subtitle="Overview of all league tiers, projects, and total available funding."
          button={null}
        />
        <div className="px-8 flex flex-col gap-y-4">
          <TiersList leagues={tiers} />
        </div>
      </Container>
    </div>
  );
};

export default AllLeaguesPage;
