import { useContext, useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import HomeNavbar from './components/HomeNavbar.tsx';
import RecentPanel from './components/recent/RecentPanel.tsx';
import Summary from './components/summary/Summary.tsx';
import UserDataContext from '../../hooks/contexts/userDataContext.ts';
import { IAccountInfo } from '../../localstorage/interfaces/accountInfo.ts';

function HomePage() {
  const { getUserData } = useContext(UserDataContext);
  const [userData, setUserData] = useState<undefined | IAccountInfo>(undefined);
  const navigate = useNavigate();
  useEffect(() => {
    setUserData(getUserData());

    if(!getUserData()) {
      navigate('login');
    }
  }, []);

  if(userData === undefined) {
    return (
      <h1>carregando..</h1>
    );
  }

  return (
    <>
      <HomeNavbar username={userData.username} />
      <hr className='navbarLine mb-4' />
      <Summary userData={userData} />
      <RecentPanel transactions={userData.transactions} />
    </>
  );
}

export default HomePage;
