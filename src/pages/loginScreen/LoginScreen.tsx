import {
  Col, Container, Row, Button,
} from 'react-bootstrap';
import logo from '../../imgs/logo.png';
import LoginForm from './Forms/LoginForm.tsx';
import Slogan from './components/Slogan.tsx';

function LoginScreen() {
  return (
    <Container className='p-5'>
      <Row className="justify-content-md-center">
        <Col sm={8} md={true}>
          <img className="rounded mx-auto d-block" src={logo} alt='logo da empresa Marques-Bank' />
          <h3 className='text-center mb-5 text-primary'>Marques-Bank</h3>
          <Slogan />
        </Col>
        <Col sm={12} md={true} className='p-5 background-white container-rounded'>
          <h1>Entrar</h1>
          <LoginForm />
          <div className='separator-box'>
            <div className='separator'>OU</div>
          </div>
          <Button variant='secondary' className='w-100'>Criar conta</Button>
        </Col>
      </Row>
    </Container>
  );
}

export default LoginScreen;
