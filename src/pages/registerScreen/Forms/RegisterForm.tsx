import { Formik } from 'formik';
import { Form, Button, InputGroup } from 'react-bootstrap';
import * as yup from 'yup';

const schema = yup.object().shape({
  email: yup.string().required(),
  password: yup.string().required(),
  terms: yup.bool().required().oneOf([true], 'É preciso aceitar os termos.'),
});

function RegisterForm() {
  const initialValues = {
    email: '',
    password: '',
    terms: false,
  };
  return (
    <Formik
      validationSchema={schema}
      initialValues={initialValues}
      onSubmit={() => {
        console.log('conta criada');
      }
      }
      validateOnChange={false}
    >
      {({
        handleSubmit, handleChange, values, errors,
      }) => (
        <>
          <Form className='mt-4' onSubmit={handleSubmit}>
            <Form.Group className="mb-3" controlId="formEmail">
              <Form.Label>Nome de usuario</Form.Label>
              <InputGroup className="mb-3">
                <InputGroup.Text id="basic-addon1">@</InputGroup.Text>
                <Form.Control
                  name='username'
                  placeholder="Nome De usuário"
                  value={values.email}
                  onChange={handleChange}
                  isInvalid={!!errors.email} />
              </InputGroup>
              <Form.Control.Feedback type="invalid">
                {errors.email}
              </Form.Control.Feedback>
            </Form.Group>

            <Form.Group className="mb-3" controlId="formEmail">
              <Form.Label>Endereço de email</Form.Label>
              <Form.Control
                name='email'
                type='email'
                placeholder="Email@email.com"
                value={values.email}
                onChange={handleChange}
                isInvalid={!!errors.email} />
              <Form.Control.Feedback type="invalid">
                {errors.email}
              </Form.Control.Feedback>
            </Form.Group>

            <Form.Group className="mb-3" controlId="formPassword">
              <Form.Label>Senha</Form.Label>
              <Form.Control
                type='password'
                name='password'
                placeholder="Senha"
                value={values.password}
                onChange={handleChange}
                isInvalid={!!errors.password} />
              <Form.Control.Feedback type="invalid">
                {errors.password}
              </Form.Control.Feedback>
            </Form.Group>
            <Form.Group className="mb-3" controlId="formCheckbox">
              <Form.Check
                required
                type='checkbox'
                name='terms'
                label='Concordo com os termos de uso'
                onChange={handleChange}
                feedback={errors.terms} />
            </Form.Group>
            <Button variant="primary" className="w-100" type="submit">
              login
            </Button>
          </Form>
        </>
      )}
    </Formik>
  );
}

export default RegisterForm;
