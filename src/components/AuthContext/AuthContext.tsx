import React, { createContext, useState, useEffect } from 'react';

interface AuthContextType {
  loggedIn: boolean;
  address: string | null;
  logIn: (address: string) => void;
  logOut: () => void;
}

export const AuthContext = createContext<AuthContextType>({
  loggedIn: false,
  address: null,
  logIn: () => {},
  logOut: () => {},
});

export const AuthProvider: React.FC<React.PropsWithChildren<{}>> = ({
  children,
}) => {
  const [loggedIn, setLoggedIn] = useState<boolean>(false);
  const [address, setAddress] = useState<string | null>(null);

  useEffect(() => {
    const address = localStorage.getItem('address');
    if (address) {
      setLoggedIn(true);
      setAddress(address);
    }
  }, []);

  const logIn = (address: string) => {
    localStorage.setItem('address', address);
    setLoggedIn(true);
    setAddress(address);
  };

  const logOut = () => {
    localStorage.removeItem('address');
    setLoggedIn(false);
    setAddress(null);
  };

  return (
    <AuthContext.Provider value={{ loggedIn, address, logIn, logOut }}>
      {children}
    </AuthContext.Provider>
  );
};
