import { Tier } from './AllLeaguesPage';
import TierItem from './TierItem';

interface TiersListProps {
  leagues: Tier[];
}

const TiersList = ({ leagues }: TiersListProps) => {
  return (
    <>
      <h3 className="text-2xl">Finished Leagues</h3>
      <ul className="flex flex-col gap-y-4">
        {leagues.map(({ name, projectsCount, value }, idx) => (
          <TierItem
            name={name}
            projectsCount={projectsCount}
            value={value}
            idx={idx + 1}
            key={`${name} ${projectsCount} ${value}`}
          />
        ))}
      </ul>
    </>
  );
};

export default TiersList;
