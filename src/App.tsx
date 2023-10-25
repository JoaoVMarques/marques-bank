import 'bootstrap/dist/css/bootstrap.min.css';
import './styles.css';
import { BrowserRouter } from 'react-router-dom';
import Router from './routes/Router.tsx';
import UserDataProvider from './hooks/providers/userDataProvider.tsx';

function App() {
  return (
    <BrowserRouter>
      <UserDataProvider>
        <Router />
      </UserDataProvider>
    </BrowserRouter>
  );
}

export default App;
