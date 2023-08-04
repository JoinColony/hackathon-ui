import React, { createContext, useState, useEffect } from 'react';
import useApi from 'hooks/useApi';
import { getAddress } from 'ethers';

interface AuthContextType {
  loggedIn: boolean;
  address: string | null;
  logIn: (address: string) => void;
  logOut: () => void;
  refreshCurrentUserProjects: () => void;
  profile: string | null;
}

export const AuthContext = createContext<AuthContextType>({
  loggedIn: false,
  address: null,
  logIn: () => {},
  logOut: () => {},
  refreshCurrentUserProjects: () => {},
  profile: null,
});

export const AuthProvider: React.FC<React.PropsWithChildren<{}>> = ({
  children,
}) => {
  const [loggedIn, setLoggedIn] = useState<boolean>(false);
  const [address, setAddress] = useState<string | null>(null);
  const [profile, setProfile] = useState<string | null>(null);
  const {
    postData,
    getData,
  } = useApi();

  useEffect(() => {
    const address = localStorage.getItem('address');
    const profile = localStorage.getItem('profile');
    if (address) {
      setLoggedIn(true);
      setAddress(address);
      setProfile(profile);
      refreshCurrentUserProjects();
    }
  }, []);

  const getCurrentUserReputationPercent = async (address: string) => {
    const data = await getData('users') || [];
    const totalReputation = data.reduce((total: number, user: any) => {
      return total + parseInt(user.reputation, 10);
    }, 0);
    const currentUser = data.find((user: any) => user.id === address);
    return Number(parseInt(currentUser.reputation, 10) / totalReputation * 100).toFixed(2);
  };

  const getCurrentUserProjects = async (address: string) => {
    const data = await getData(`users/${address}`) || {};

    if (!data || !data.projects) {
      return []
    }

    return data.projects.map(({ id, leagueId, info }: any) => {
      return {
        id,
        leagueId,
        ...(info ? JSON.parse(info) : {}),
      }
    });
  };

  const refreshCurrentUserProjects = async () => {
    const address = localStorage.getItem('address') || ''; // address should already be checksummed
    const projects = await getCurrentUserProjects(address);
    const profile = localStorage.getItem('profile');
    const parsedProfile = JSON.parse(profile || '{}');
    const newProfile = JSON.stringify({
      ...parsedProfile,
      projects,
    });
    localStorage.setItem('profile', newProfile);
    setProfile(newProfile);
  };

  const logIn = (address: string) => {
    const checksummedUserAddress = getAddress(address);
    const apiRequest = async () => {
      const data = await postData('users/login', { id: checksummedUserAddress });
      if (data && data.id === checksummedUserAddress) {
        const projects = await getCurrentUserProjects(checksummedUserAddress);
        const profile = JSON.stringify({
          ...data.profile,
          reputationPercent: await getCurrentUserReputationPercent(checksummedUserAddress),
          projects,
        });
        localStorage.setItem('address', checksummedUserAddress);
        localStorage.setItem('profile', profile);
        setLoggedIn(true);
        setAddress(checksummedUserAddress);
        setProfile(profile);
      }
    };
    apiRequest();
  };

  const logOut = () => {
    localStorage.removeItem('address');
    localStorage.removeItem('profile');
    setLoggedIn(false);
    setAddress(null);
    setProfile(null);
  };

  return (
    <AuthContext.Provider value={{ loggedIn, address, logIn, logOut, profile, refreshCurrentUserProjects }}>
      {children}
    </AuthContext.Provider>
  );
};
