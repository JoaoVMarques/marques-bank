import 'bootstrap/dist/css/bootstrap.min.css';
import './styles.css';
import { BrowserRouter } from 'react-router-dom';
import Router from './routes/Router.tsx';

function App() {
  return (
    <BrowserRouter>
      <Router />
    </BrowserRouter>
  );
}

export default App;
