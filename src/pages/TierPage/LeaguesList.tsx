import LeagueItem from './LeagueItem';

interface League {
  leagueName: string;
  value: string;
}

interface LeagueListProps {
  leagues: League[];
}

const LeaguesList = ({ leagues }: LeagueListProps) => {
  return (
    <div className="my-8">
      <h3 className="text-2xl mb-4 font-semibold">Finished League</h3>
      <ul className="flex flex-col gap-y-4">
        {leagues.map(({ leagueName, value }, idx) => (
          <LeagueItem
            icon={
              <div className="w-14 h-14 rounded-full border border-black"></div>
            }
            leagueIdx={idx + 1}
            leagueName={leagueName}
            value={value}
            key={`${leagueName}`}
          />
        ))}
      </ul>
    </div>
  );
};

export default LeaguesList;
