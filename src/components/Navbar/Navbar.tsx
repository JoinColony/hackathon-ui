import { useContext, useState } from 'react';

import { AuthContext } from 'components/AuthContext';
import LoginModal from 'components/LoginModal';
import ShortenedAddress from 'components/ShortenedAddress';
import Button from 'components/Button';
import NavLink from 'components/NavLink';
import { useNavigate } from 'react-router-dom';

const Logo = () => (
  <a href="/" className="relative leading-[30px] text-xl font-semibold">
    Budgetbox
  </a>
);

const Navbar = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const authContext = useContext(AuthContext);
  const navigate = useNavigate();
  return (
    <div
      className="self-stretch bg-light-base-white overflow-hidden flex flex-col items-center justify-start z-[0] text-light-base-black border-b"
      style={{ borderColor: '#E4E7EC' }}
    >
      <div className="w-full max-w-screen-xl h-[72px] flex flex-row py-0 px-4 md:px-8 box-border items-center justify-between">
        <div className="flex flex-row items-center justify-start gap-4">
          <Logo />
          <div className="hidden md:flex flex-row items-center justify-start gap-2 text-base text-light-gray-900">
            <NavLink label="Vote" href='/vote' isHighlighted={true} />
            <NavLink label="Promote" href='/promote' />
            <NavLink label="Leagues" href='/leagues' />
          </div>
        </div>
        <div className="flex flex-row items-center justify-start gap-4 text-center text-xs text-light-base-white">
          <div className="hidden md:block">
            <Button label="Add project" onClick={() => navigate('/setup')} />
          </div>
          {authContext.loggedIn ? (
            <>
              <div className="self-stretch px-3.5 py-2.5 bg-white rounded-lg border border-gray-200 justify-start items-center gap-3.5 flex">
                <div className="justify-start items-center gap-1 flex">
                  <div className="text-slate-700 text-xs font-medium leading-[18px]">8.9%</div>
                </div>      
              </div>
              <div className="self-stretch px-3.5 py-2.5 bg-white rounded-lg border border-gray-200 justify-start items-center gap-3.5 flex">
                <ShortenedAddress address={authContext.address ?? ''} />
              </div>
              <div className="self-stretch px-3.5 py-2.5 bg-white rounded-lg border border-gray-200 justify-start items-center gap-3.5 flex">
                <div className="text-slate-700 text-xs font-medium leading-[18px]">Admin</div>
              </div>
            </>
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