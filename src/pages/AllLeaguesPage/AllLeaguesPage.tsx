import TitleContainer from 'components/TitleContainer/TitleContainer';
import LeagueItem from './LeagueItem';
import Container from 'components/Container/Container';

const leagues = [
  { name: 'League tier 1', projectsCount: 10, value: '100,000' },
  { name: 'League tier 2', projectsCount: 20, value: '100,000' },
  { name: 'League tier 3', projectsCount: 40, value: '100,000' },
  { name: 'League tier 4', projectsCount: 80, value: '100,000' },
];

const AllLeaguesPage = () => {
  return (
    <div>
      <TitleContainer
        title="All Leagues"
        subtitle="Lorem Ipsum"
        button={null}
      />
      <Container>
        <div className="px-8 flex flex-col gap-y-4">
          <h3 className="text-2xl">Finished Leagues</h3>
          <ul className="flex flex-col gap-y-4">
            {leagues.map(({ name, projectsCount, value }, idx) => (
              <LeagueItem
                name={name}
                projectsCount={projectsCount}
                value={value}
                idx={idx + 1}
              />
            ))}
          </ul>
        </div>
      </Container>
    </div>
  );
};

export default AllLeaguesPage;
