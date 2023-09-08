import HomeNavbar from './components/HomeNavbar.tsx';
import Summary from './components/summary/Summary.tsx';

function HomePage() {
  return (
    <>
      <HomeNavbar />
      <hr className='navbarLine mb-4  ' />
      <Summary />
    </>
  );
}

export default HomePage;
