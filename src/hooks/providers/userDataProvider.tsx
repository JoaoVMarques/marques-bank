import {
  useEffect, useState, FunctionComponent, ReactNode,
} from 'react';
import UserDataContext from '../contexts/userDataContext.ts';
import { IAccountInfo } from '../../localstorage/interfaces/accountInfo.ts';
import findAccountInfo from '../../localstorage/findAccountInfo.ts';

export interface BaseLayoutProps {
  children?: ReactNode;
}

const UserDataProvider: FunctionComponent<BaseLayoutProps> = (props) => {
  const [userData, setUserData] = useState<IAccountInfo | null>(null);

  function setUser(data : IAccountInfo) {
    setUserData(data);
    const login = { email: data.email };
    localStorage.setItem('login', JSON.stringify(login));
  }

  function getUserData() {
    if(!userData) {
      const logged = localStorage.getItem('login');
      const parseLogin = JSON.parse(logged!);
      const accountInfo = findAccountInfo(parseLogin.email);
      setUserData(accountInfo!);
      return accountInfo!;
    }
    return userData;
  }

  useEffect(() => {

  }, [userData]);

  const { children } = props;

  const contextValue = {
    getUserData,
    setUser,
  };
  return (
    <UserDataContext.Provider value={ contextValue }>
      {children}
    </UserDataContext.Provider>
  );
};

export default UserDataProvider;
