import DropdownMenu from 'components/DropdownMenu';
import ProjectCard from 'components/ProjectCard';

import { SyntheticEvent, useState } from 'react';

interface ColonyPoolCardProps {
  onClick: (event: SyntheticEvent, projectId: number) => void;
  title: string;
  subtitle: string;
  projectId: number;
  lastUpdated: number;
}

const ColonyPoolCard = ({
  onClick,
  title,
  subtitle,
  projectId,
  lastUpdated,
}: ColonyPoolCardProps) => {
  const [dropdownOpen, setDropdownOpen] = useState(false);

  const handleDropdownClick = () => {
    setDropdownOpen(!dropdownOpen);
  };

  // handle what to do when the dropdown menu is clicked
  const handleDropdownState = (isOpen: any) => {
    setDropdownOpen(isOpen);
  };

  const handleDropdownItemGeneric = (event: any) => {
    event.preventDefault();
    event.stopPropagation();
    alert('clicked');
  };

  const dropdownItems = [
    {
      name: 'View on Colony',
      handler: handleDropdownItemGeneric,
    },
    {
      name: 'View Project',
      handler: handleDropdownItemGeneric,
    },
    {
      name: 'View Website',
      handler: handleDropdownItemGeneric,
    },
  ];

  const formatter = new Intl.RelativeTimeFormat(undefined, {
    numeric: 'auto',
  });

  const DIVISIONS = [
    { amount: 60, name: 'seconds' },
    { amount: 60, name: 'minutes' },
    { amount: 24, name: 'hours' },
    { amount: 7, name: 'days' },
    { amount: 4.34524, name: 'weeks' },
    { amount: 12, name: 'months' },
    { amount: Number.POSITIVE_INFINITY, name: 'years' },
  ];

  function formatTimeAgo(date: number) {
    let duration = (date - (new Date() as any)) / 1000;

    for (let i = 0; i < DIVISIONS.length; i++) {
      const division = DIVISIONS[i];
      if (Math.abs(duration) < division.amount) {
        return formatter.format(Math.round(duration), division.name as any);
      }
      duration /= division.amount;
    }
  }

  const timeInLeagurePlaceholder = 1690411442667;

  return (
    <div
      className="cursor-pointer group grow shrink basis-0 h-full p-6 bg-white rounded-lg border border-gray-200 justify-between items-center gap-6 flex hover:bg-blue-100 hover:border-light-blue-400 relative"
      onClick={(e) => onClick(e, projectId)}
    >
      <div className="grow shrink basis-0 flex-col justify-start items-center gap-6 inline-flex">
        <ProjectCard title={title} subtitle={subtitle} />
        <div className="self-stretch text-gray-500 text-sm font-normal leading-tight border-t group-hover:border-t-light-blue-400 group-hover:text-light-blue-400 pt-4 flex justify-between">
          <span>Total Funding: $XYZ</span>
          <span>Last Updated: {formatTimeAgo(lastUpdated)}</span>
          <span>Time in League: {formatTimeAgo(timeInLeagurePlaceholder)}</span>
        </div>
      </div>
      <div className="absolute top-0 right-0 mt-2 mr-2">
        <DropdownMenu
          onClick={handleDropdownClick}
          onStateChange={handleDropdownState}
          items={dropdownItems}
        >
          <button type="button" className="relative z-10">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <circle cx="12" cy="12" r="1"></circle>
              <circle cx="12" cy="5" r="1"></circle>
              <circle cx="12" cy="19" r="1"></circle>
            </svg>
          </button>
        </DropdownMenu>
      </div>
    </div>
  );
};

export default ColonyPoolCard;
