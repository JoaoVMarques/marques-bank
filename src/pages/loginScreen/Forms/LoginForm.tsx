import { Formik } from 'formik';
import { Form, Button } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';
import * as yup from 'yup';
import { useContext, useState } from 'react';
import validateLogin from '../../../localstorage/loginAccount.ts';
import PasswordModal from './PasswordModal.tsx';
import UserDataContext from '../../../hooks/contexts/userDataContext.ts';
import { IDataContext } from '../../../hooks/interfaces/dataContext.ts';
import { IAccountInfo } from '../../../localstorage/interfaces/accountInfo.ts';

const schema = yup.object().shape({
  email: yup.string().required(),
  password: yup.string().required(),
});

function LoginForm() {
  const { setUser } = useContext(UserDataContext) as IDataContext;
  const [show, setShow] = useState(false);
  const navigate = useNavigate();
  const initialValues = {
    email: '',
    password: '',
  };

  const handleClose = () => setShow(false);

  function saveAccountAndRedirect(accountInfo: IAccountInfo) {
    setUser(accountInfo);
    navigate('/marques');
  }

  return (
    <Formik
      validationSchema={schema}
      initialValues={initialValues}
      onSubmit={(account, { resetForm }) => {
        validateLogin(account, saveAccountAndRedirect);
        setShow(true);
        resetForm({
          values: {
            email: account.email,
            password: '',
          },
        });
      }}
      validateOnChange={false}
    >
      {({
        handleSubmit, handleChange, values, errors,
      }) => (
        <>
          <PasswordModal show={show} handleClose={handleClose} />
          <Form className='mt-4' onSubmit={handleSubmit}>
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
            <Button variant="primary" className="w-100" type="submit">
              login
            </Button>
          </Form>
        </>
      )}
    </Formik>
  );
}

export default LoginForm;
