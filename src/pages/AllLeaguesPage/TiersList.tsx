import { Project } from 'types';
import TierItem from './TierItem';

interface TiersListProps {
  tiers: Record<number, Project[]>;
}

<ul className="flex flex-col gap-y-4"></ul>;

const TiersList = ({ tiers }: TiersListProps) => {
  return (
    <>
      <h3 className="text-2xl">Finished Leagues</h3>
      <ul className="flex flex-col gap-y-4">
        {Object.keys(tiers).map((tier) => (
          <TierItem
            key={tier}
            projectsCount={tiers[Number(tier)].length}
            value="123,456"
            idx={Number(tier)}
            name={`League tier ${tier}`}
          />
        ))}
      </ul>
    </>
  );
};

export default TiersList;
