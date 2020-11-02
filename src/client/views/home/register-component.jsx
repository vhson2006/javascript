import React, { useState } from 'react';
import Form from 'react-bootstrap/Form';
import Container from 'react-bootstrap/Container';
import Alert from 'react-bootstrap/Alert';
import { useForm } from 'react-hook-form';
import { register as registerService } from '../../services/home-service';
import FullnameComponent from '../../components/forms/fullname-component';
import EmailComponent from '../../components/forms/email-component';
import PasswordComponent from '../../components/forms/password-component';
import GenderComponent from '../../components/forms/gender-component';
import PhoneComponent from '../../components/forms/phone-component';
import AddressComponent from '../../components/forms/address-component';
import ButtonComponent from '../../components/buttons/button-component';
import CheckboxComponent from '../../components/forms/checkbox-component';

const RegisterComponent = () => {
  const [show, setShow] = useState(0);
  const { handleSubmit, register, errors } = useForm();
  const [gender, setGender] = useState('Male');

  const registerHandler = async (e) => {
    const result = await registerService({
      fullname: e.fullname,
      email: e.email,
      password: e.password,
      gender,
      phone: e.phone,
      address: e.address,
    });
    if (result && result.register === true) {
      setShow(1);
      window.setTimeout(() => setShow(0), 2000);
    } else {
      setShow(2);
      window.setTimeout(() => setShow(0), 2000);
    }
  };
  const onChangeGender = (e) => {
    setGender(e.target.value);
  };

  return (
    <Container className="mt-3">
      <Alert variant="success" show={show === 1}> Register success </Alert>
      <Alert variant="danger" show={show === 2}> Register fail </Alert>
      <Form onSubmit={handleSubmit(registerHandler)}>
        <FullnameComponent controlId="registerFullname" register={register} errors={errors} />
        <EmailComponent controlId="registerEmail" register={register} errors={errors} />
        <PasswordComponent controlId="registerPassword" register={register} errors={errors} />
        <AddressComponent controlId="registerAddress" register={register} errors={errors} />
        <GenderComponent controlId="registerGender" onChangeGender={onChangeGender} />
        <PhoneComponent controlId="registerPhone" register={register} errors={errors} />

        <div className="d-flex justify-content-between">
          <CheckboxComponent controlId="registerTagPolicy" label="registerTagPolicy" />
          <ButtonComponent controlId="registerTagButton" label="registerTagButton" />
        </div>

      </Form>
    </Container>
  );
};

export default RegisterComponent;
