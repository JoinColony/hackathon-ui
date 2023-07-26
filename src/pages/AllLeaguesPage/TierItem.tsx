import { Link } from 'react-router-dom';
import BaseItem from './BaseItem';

interface LeagueItemProps {
  name: string;
  projectsCount: number;
  value: string;
  idx: number;
  curr?: string;
}

const TierItem = ({
  name,
  projectsCount,
  value,
  idx,
  curr = '$',
}: LeagueItemProps) => {
  return (
    <Link to={`/tier/${idx}`}>
      <BaseItem
        title={`${projectsCount} projects`}
        subtitle={<div className="text-sm">{name}</div>}
        curr={curr}
        value={value}
        icon={
          <div className="bg-light-gray-200 group-hover:text-white h-14 w-14 flex items-center justify-center rounded-full group-hover:bg-light-blue-400">
            {idx}
          </div>
        }
        extra={
          <button className="border border-light-gray-200 py-2.5 px-3.5 rounded-md text-xs group-hover:bg-light-blue-400 group-hover:text-white">
            View League Tier
          </button>
        }
      />
    </Link>
  );
};

export default TierItem;
