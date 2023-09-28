import { Routes, Route } from 'react-router-dom';
import Login from '../pages/loginScreen/LoginScreen.tsx';
import HomePage from '../pages/homepage/HomePage.tsx';
import RegisterScreen from '../pages/registerScreen/RegisterScreen.tsx';

function Router() {
  return (
    <Routes>
      <Route path='/' element={ <Login /> } />
      <Route path='/marques/' element={ <HomePage /> } />
      <Route path='/register/' element={ <RegisterScreen /> } />
    </Routes>
  );
}

export default Router;
