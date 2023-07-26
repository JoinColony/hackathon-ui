import Container from 'components/Container/Container';
import Metrics from 'components/Metrics/Metrics';
import PageTitle from 'components/TitleContainer/TitleContainer';
import LeaguesList from './LeaguesList';

const leagues = [
  { leagueName: 'League 1', value: '45,110' },
  { leagueName: 'League 2', value: '46,110' },
  { leagueName: 'League 3', value: '47,110' },
  { leagueName: 'League 4', value: '48,110' },
  { leagueName: 'League 5', value: '459,110' },
];

const TierPage = () => {
  return (
    <>
      <Container>
        <PageTitle
          title="Tier 2 League Projects"
          subtitle="List of all projects in the tier 2 league that is currently getting funded."
        />
        <Metrics
          metrics={[
            { heading: 'Total projects in league', value: '10' },
            {
              heading: 'Total funding amount',
              value: (
                <>
                  <span className="text-gray-900 text-4xl font-semibold leading-[44px]">
                    $100,000
                  </span>
                  <span className="text-gray-900 text-base font-semibold leading-[44px]">
                    USD
                  </span>
                </>
              ),
            },
            { heading: 'Total votes', value: '10' },
          ]}
        />
        <LeaguesList leagues={leagues} />
      </Container>
    </>
  );
};

export default TierPage;
