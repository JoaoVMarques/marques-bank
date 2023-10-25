import { useContext } from 'react';
import HomeNavbar from './components/HomeNavbar.tsx';
import RecentPanel from './components/recent/RecentPanel.tsx';
import Summary from './components/summary/Summary.tsx';
import { IDataContext } from '../../hooks/interfaces/dataContext.ts';
import UserDataContext from '../../hooks/contexts/userDataContext.ts';
import { useNavigate } from 'react-router-dom';

function HomePage() {
  const { userData } = useContext(UserDataContext) as IDataContext;
  const navigate = useNavigate();
  if(userData == null) {
    navigate('login')
  }

  return (
    <>
      <HomeNavbar />
      <hr className='navbarLine mb-4  ' />
      <Summary />
      <RecentPanel transactions={userData!.transactions}  />
    </>
  );
}

export default HomePage;
