import React, { useState } from 'react';
import { useCookies } from 'react-cookie';
import { useNavigate } from 'react-router-dom';
import { useForm } from 'react-hook-form';
import Form from 'react-bootstrap/Form';
import Container from 'react-bootstrap/Container';
import Alert from 'react-bootstrap/Alert';
import { authenticate } from '../../services/home-service';
import EmailComponent from '../../components/forms/email-component';
import PasswordComponent from '../../components/forms/password-component';
import CheckboxComponent from '../../components/forms/checkbox-component';
import ButtonComponent from '../../components/buttons/button-component';
import FacebookBtutton from '../../components/buttons/facebook-button-component';
import GoogleBtutton from '../../components/buttons/google-button-component';

const LoginComponent = () => {
  const navigate = useNavigate();
  const [cookies, setCookie] = useCookies(['token']);
  const { handleSubmit, register, errors } = useForm();
  const [show, setShow] = useState(0);
  const loginHandler = async (e) => {
    const result = await authenticate({ username: e.email, password: e.password });
    if (result) {
      navigate('/dashboard');
      setCookie('token', result.authenticate);
    } else {
      setShow(1);
      window.setTimeout(() => setShow(0), 2000);
    }
  };

  return (
    <Container className="mt-3 main">
      <Alert variant="danger" show={show === 1}> Login fail </Alert>
      <Form onSubmit={handleSubmit(loginHandler)}>
        <EmailComponent controlId="loginEmail" register={register} errors={errors} />
        <PasswordComponent controlId="loginPassword" register={register} errors={errors} />
        <div className="d-flex justify-content-between center">
          <CheckboxComponent controlId="loginRememberMe" label="rememberMe" />
          <FacebookBtutton controlId="loginFacebook" />
          <GoogleBtutton controlId="loginButton" />
          <ButtonComponent controlId="loginGoogle" label="loginTagButton" />
        </div>
      </Form>
    </Container>
  );
};

export default LoginComponent;
