import { AuthContext } from 'components/AuthContext';
import LoginModal from 'components/LoginModal';
import ShortenedAddress from 'components/ShortenedAddress/ShortenedAddress';
import React, { useContext, useState } from 'react';

const Navbar: React.FC = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const authContext = useContext(AuthContext);

  return (
    <>
      <div className="self-stretch bg-light-base-white overflow-hidden flex flex-col items-center justify-start z-[0] text-light-base-black">
        <div className="w-[1280px] h-[72px] flex flex-row py-0 px-8 box-border items-center justify-between">
          <div className="flex flex-row items-center justify-start gap-[16px]">
            <div className="relative leading-[30px] font-semibold">
              Budgetbox
            </div>
            <div className="flex flex-row items-center justify-start gap-[4px] text-base text-light-gray-900">
              <div className="rounded-md bg-light-gray-50 overflow-hidden flex flex-row py-2 px-3 items-center justify-start">
                <div className="flex flex-row items-center justify-start">
                  <div className="relative leading-[24px] font-medium">
                    Vote
                  </div>
                </div>
              </div>
              <div className="rounded-md bg-light-base-white overflow-hidden flex flex-row py-2 px-3 items-center justify-start">
                <div className="flex flex-row items-center justify-start">
                  <div className="relative leading-[24px] font-medium">
                    Leaderboard
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="flex flex-row items-center justify-start gap-[16px] text-center text-xs text-light-base-white">
            <div className="self-stretch rounded-lg bg-light-blue-400 flex flex-row py-2 px-3 items-center justify-center border-[1px] border-solid border-light-blue-400">
              <div className="relative leading-[18px] font-medium">
                Add project
              </div>
            </div>
            <div className="self-stretch rounded-lg bg-light-base-white flex flex-row py-2.5 px-3.5 items-center justify-start text-left text-light-gray-700 border-[1px] border-solid border-light-gray-200">
              {authContext.loggedIn ? (
                <ShortenedAddress address={authContext.address ?? ''} />
              ) : (
                <button
                  className="relative leading-[18px] font-medium"
                  onClick={() => {
                    setIsModalOpen(true);
                  }}
                >
                  Login
                </button>
              )}
            </div>
          </div>
        </div>
        <img
          className="self-stretch relative max-w-full overflow-hidden h-px shrink-0"
          alt=""
          src="/divider.svg"
        />
        <img
          className="self-stretch relative max-w-full overflow-hidden h-px shrink-0"
          alt=""
          src="/divider1.svg"
        />
      </div>

      {isModalOpen && <LoginModal onClose={() => setIsModalOpen(false)} />}
    </>
  );
};

export default Navbar;
