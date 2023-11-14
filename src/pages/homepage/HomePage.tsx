import { useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import HomeNavbar from './components/HomeNavbar.tsx';
import RecentPanel from './components/recent/RecentPanel.tsx';
import Summary from './components/summary/Summary.tsx';
import { IDataContext } from '../../hooks/interfaces/dataContext.ts';
import UserDataContext from '../../hooks/contexts/userDataContext.ts';

function HomePage() {
  const { getUserData } = useContext(UserDataContext) as IDataContext;
  const navigate = useNavigate();
  const userData = getUserData();
  if(getUserData() == null) {
    navigate('login');
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
