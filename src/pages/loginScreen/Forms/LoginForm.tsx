import { Form, Button } from 'react-bootstrap';

function LoginForm() {
  return (
    <Form className='mt-4'>
    <Form.Group className="mb-3" controlId="formBasicEmail">
      <Form.Label>Endereço de email</Form.Label>
      <Form.Control type="email" placeholder="Email@email.com" required />
    </Form.Group>

    <Form.Group className="mb-3" controlId="formBasicPassword">
      <Form.Label>Senha</Form.Label>
      <Form.Control type="password" placeholder="Senha" required />
    </Form.Group>
    <Form.Group className="mb-3" controlId="formBasicCheckbox">
      <Form.Check type="checkbox" label="Concordo com os termos de uso" required />
    </Form.Group>
    <Button variant="primary" className="w-100" type="submit">
      login
    </Button>
  </Form>
  );
}

export default LoginForm;
