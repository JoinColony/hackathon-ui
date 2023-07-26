import { Medal } from 'icons/Medal';
import BaseItem from 'pages/AllLeaguesPage/BaseItem';

interface LeagueItemProps {
  icon: React.ReactNode;
  leagueIdx: number;
  leagueName: string;
  value: string;
  curr?: string;
}

const LeagueItem = ({
  icon,
  leagueIdx,
  leagueName,
  curr,
  value,
}: LeagueItemProps) => {
  return (
    <BaseItem
      title={leagueName}
      subtitle={<div className="text-light-blue-400 text-sm">#{leagueIdx}</div>}
      icon={icon}
      curr={curr}
      value={value}
      extra={<div>78%</div>}
      top={
        leagueIdx === 1 && (
          <div className="flex items-center gap-x-1 justify-center">
            <Medal />
            <div className="bg-light-blue-100 py-1 px-3 rounded-md">Top</div>
          </div>
        )
      }
    />
  );
};

export default LeagueItem;
