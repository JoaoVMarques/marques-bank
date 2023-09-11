import HomeNavbar from './components/HomeNavbar.tsx';
import RecentPanel from './components/recent/RecentPanel.tsx';
import Summary from './components/summary/Summary.tsx';

function HomePage() {
  return (
    <>
      <HomeNavbar />
      <hr className='navbarLine mb-4  ' />
      <Summary />
      <RecentPanel />
    </>
  );
}

export default HomePage;
