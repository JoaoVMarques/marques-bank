import { Formik } from 'formik';
import { Form, Button } from 'react-bootstrap';
import * as yup from 'yup';
import { useNavigate } from 'react-router-dom';
import { useContext } from 'react';
import { insertAccount } from '../../../localstorage/createAccount.ts';
import validateRegister from '../../../localstorage/validateRegister.ts';
import { IRegisterAcount } from '../../../localstorage/interfaces/account.ts';
import UserDataContext from '../../../hooks/contexts/userDataContext.ts';
import { IDataContext } from '../../../hooks/interfaces/dataContext.ts';

const schema = yup.object().shape({
  username: yup.string().required(),
  email: yup.string().required(),
  password: yup.string().required(),
  terms: yup.bool().required().oneOf([true], 'É preciso aceitar os termos.'),
});

function RegisterForm() {
  const { setUser } = useContext(UserDataContext) as IDataContext;
  const navigate = useNavigate();
  const initialValues = {
    username: '',
    email: '',
    password: '',
    terms: false,
  };

  function saveAndRedirect(account: IRegisterAcount) {
    navigate('/marques');
    const accountInfo = insertAccount(account);
    setUser(accountInfo!);
  }

  return (
    <Formik
      validationSchema={schema}
      initialValues={initialValues}
      onSubmit={(account) => {
        const validAccount = validateRegister(account);
        if(validAccount) {
          saveAndRedirect(account);
        }
        console.log(validAccount);
      }}
      validateOnChange={false}
    >
      {({
        handleSubmit, handleChange, values, errors,
      }) => (
        <>
          <Form className='mt-4' onSubmit={handleSubmit}>
            <Form.Group className="mb-3" controlId="username">
              <Form.Label>Nome de usuario</Form.Label>
              <Form.Control
                name='username'
                placeholder="Nome De usuário"
                value={values.username}
                onChange={handleChange}
                isInvalid={!!errors.username} />
              <Form.Control.Feedback type="invalid">
                {errors.username}
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
