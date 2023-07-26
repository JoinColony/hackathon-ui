import DropdownMenu from 'components/DropdownMenu';
import ProjectCard from 'components/ProjectCard';

import { SyntheticEvent, useState } from 'react';

interface ColonyPoolCardProps {
  handleClick: (event: SyntheticEvent) => void;
  title: string;
  subtitle: string;
}

const ColonyPoolCard = ({
  handleClick,
  title,
  subtitle,
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

  return (
    <div
      className="group grow shrink basis-0 h-full p-6 bg-white rounded-lg border border-gray-200 justify-between items-center gap-6 flex hover:bg-blue-100 hover:border-light-blue-400 relative"
      onClick={handleClick}
    >
      <div className="grow shrink basis-0 flex-col justify-start items-center gap-6 inline-flex">
        <ProjectCard title={title} subtitle={subtitle} />
        <div className="self-stretch text-gray-500 text-sm font-normal leading-tight border-t group-hover:border-t-light-blue-400 group-hover:text-light-blue-400 pt-4 flex justify-between">
          <span>Total Funding: $XYZ</span>
          <span>Last Updated: XYZ days ago</span>
          <span>Time in League: XYZ days</span>
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
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              className="h-6 w-6"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M4 8h16M4 16h16"
              />
            </svg>
          </button>
        </DropdownMenu>
      </div>
    </div>
  );
};

export default ColonyPoolCard;
