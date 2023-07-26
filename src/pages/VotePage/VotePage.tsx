import { Link } from 'react-router-dom';
import CircleComponent from 'components/UserCircleAvatar';
import DropdownMenu from 'components/DropdownMenu';
import { useState, useContext } from 'react';
import { AuthContext } from 'components/AuthContext';
import LoginModal from 'components/LoginModal';
import ColonyPoolCard from './ColonyPoolCard';

const VotePage = () => {
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const authContext = useContext(AuthContext);

  const handleDropdownClick = () => {
    setDropdownOpen(!dropdownOpen);
  };

  // handle what to do when the dropdown menu is clicked
  const handleDropdownState = (isOpen: any) => {
    setDropdownOpen(isOpen);
  };

  const handleVote = (event: any) => {
    event.preventDefault();
    if (authContext.loggedIn) {
      alert('voted old school');
    } else {
      setIsModalOpen(true);
    }
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
    <div className="mx-auto flex justify-center items-center">
      <div className="w-full h-full pt-12 pb-24 bg-white rounded-tl-[40px] rounded-bl-[40px] flex-col justify-start items-start gap-8 inline-flex">
        <div className="self-stretch w-full h-full flex-col justify-start items-center gap-6 flex">
          <div className="w-full h-full px-8 flex-col justify-start items-start gap-6 flex mb-16">
            <div className="self-stretch h-full flex-col justify-start items-start gap-5 flex">
              <div className="self-stretch justify-start items-start gap-4 inline-flex">
                <div className="w-full flex-col justify-start items-start gap-1 inline-flex">
                  <div className="self-stretch justify-start items-center gap-1 inline-flex">
                    <div className="grow shrink basis-0 text-gray-900 text-3xl font-semibold leading-[38px]">
                      Choose A Project
                    </div>
                    <Link
                      to="#"
                      className="text-blue-400 text-base font-semibold leading-normal"
                    >
                      Funding Pool $100,000
                    </Link>
                  </div>
                  <div className="self-stretch justify-start items-center gap-1 inline-flex">
                    <div className="grow shrink basis-0 text-gray-500 text-base font-normal leading-normal">
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                      sed do eiusmod tempor incididunt ut labore et dolore magna
                      aliqua.
                    </div>
                    <div className="justify-start items-center gap-1 flex">
                      <div className="w-4 h-4 relative" />
                      <Link
                        to="/all-leagues"
                        className="text-center text-gray-900 text-xs font-medium leading-[18px] hover:text-blue-400"
                      >
                        View All Leagues
                      </Link>
                    </div>
                  </div>
                </div>
                <div className="justify-start items-center gap-3 flex">
                  <div className="rounded-lg" />
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="self-stretch h-full flex-col justify-start items-center gap-6 flex">
          <div className="w-full h-full px-8 flex-col justify-start items-start gap-6 flex">
            <div className="self-stretch justify-start items-start gap-6 inline-flex">
              <ColonyPoolCard
                handleClick={handleVote}
                title="Cat"
                subtitle="Lorem Ipsum"
              />
              <ColonyPoolCard
                handleClick={handleVote}
                title="Cat"
                subtitle="Lorem Ipsum"
              />
            </div>
          </div>
          <div className="self-stretch justify-center items-center gap-2.5 inline-flex">
            <div className="justify-start items-center gap-1 flex">
              <Link
                to="#"
                className="text-center text-gray-900 text-xs font-medium leading-[18px] hover:text-blue-400"
              >
                View league
              </Link>
            </div>
            <div className="px-3 py-2 bg-white rounded-lg border border-gray-300 justify-center items-center gap-2 flex hover:bg-blue-400 cursor-pointer">
              <button
                type="submit"
                className="text-center text-slate-700 text-xs font-medium leading-[18px]"
                onClick={handleVote}
              >
                Skip choice
              </button>
            </div>
          </div>
        </div>
      </div>
      {isModalOpen && <LoginModal onClose={() => setIsModalOpen(false)} />}
    </div>
  );
};

export default VotePage;
