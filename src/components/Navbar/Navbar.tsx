import React, { useContext, useState } from 'react';

import { AuthContext } from 'components/AuthContext';
import LoginModal from 'components/LoginModal';
import ShortenedAddress from 'components/ShortenedAddress';
import Button from 'components/Button';
import NavLink from 'components/NavLink';

const Logo: React.FC = () => (
  <a href="/" className="relative leading-[30px] text-xl font-semibold">
    Budgetbox
  </a>
);

const Navbar = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const authContext = useContext(AuthContext);

  return (
    <div className="self-stretch bg-light-base-white overflow-hidden flex flex-col items-center justify-start z-[0] text-light-base-black border-b" style={{borderColor: '#E4E7EC'}}>
      <div className="w-full max-w-screen-xl h-[72px] flex flex-row py-0 px-4 md:px-8 box-border items-center justify-between">
        <div className="flex flex-row items-center justify-start gap-4">
          <Logo />
          <div className="hidden md:flex flex-row items-center justify-start gap-2 text-base text-light-gray-900">
            <NavLink label="Vote" isHighlighted={true} />
            <NavLink label="Leaderboard" />
          </div>
        </div>
        <div className="flex flex-row items-center justify-start gap-4 text-center text-xs text-light-base-white">
          <div className="hidden md:block">
            <Button label="Add project" onClick={() => true} />
          </div>
          {authContext.loggedIn ? (
            <ShortenedAddress address={authContext.address ?? ''} />
          ) : (
            <Button
              label="Login"
              variant="secondary"
              onClick={() => {
                setIsModalOpen(true);
              }}
            />
          )}
        </div>
      </div>
      {isModalOpen && <LoginModal onClose={() => setIsModalOpen(false)} />}
    </div>
  );
};

export default Navbar;
