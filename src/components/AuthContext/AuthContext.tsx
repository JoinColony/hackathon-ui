import React, { createContext, useState, useEffect } from 'react';
import useApi from 'hooks/useApi';

interface AuthContextType {
  loggedIn: boolean;
  address: string | null;
  logIn: (address: string) => void;
  logOut: () => void;
  profile: string | null;
}

export const AuthContext = createContext<AuthContextType>({
  loggedIn: false,
  address: null,
  logIn: () => {},
  logOut: () => {},
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

  const logIn = (address: string) => {
    const apiRequest = async () => {
      const data = await postData('users/login', { id: address });
      if (data && data.id === address) {
        const profile = JSON.stringify({
          ...data.profile,
          reputationPercent: await getCurrentUserReputationPercent(address),
        });
        localStorage.setItem('address', address);
        localStorage.setItem('profile', profile);
        setLoggedIn(true);
        setAddress(address);
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
    <AuthContext.Provider value={{ loggedIn, address, logIn, logOut, profile }}>
      {children}
    </AuthContext.Provider>
  );
};
