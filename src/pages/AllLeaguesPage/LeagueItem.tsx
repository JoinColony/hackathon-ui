interface LeagueItemProps {
  name: string;
  projectsCount: number;
  value: string;
  idx: number;
  curr?: string;
}

const LeagueItem = ({
  name,
  projectsCount,
  value,
  idx,
  curr = '$',
}: LeagueItemProps) => {
  return (
    <div className="flex items-center justify-between border border-light-gray-200 p-6">
      <div className="flex gap-x-6">
        <div className="bg-light-gray-200 h-14 w-14 flex items-center justify-center rounded-full">
          {idx}
        </div>
        <div className="flex flex-col">
          <div className="text-sm">{name}</div>
          <div className="text-lg font-semibold">{projectsCount} projects</div>
        </div>
      </div>
      <div className="flex gap-x-4">
        <div className="flex items-center font-semibold">
          {curr}
          {value}
        </div>
        <button className="border border-light-gray-200 py-2.5 px-3.5 rounded-md text-xs">
          View League
        </button>
      </div>
    </div>
  );
};

export default LeagueItem;
