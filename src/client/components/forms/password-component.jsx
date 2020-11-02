import React from 'react';
import Form from 'react-bootstrap/Form';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { FormattedMessage } from 'react-intl';
import { RiLockPasswordFill } from 'react-icons/ri';
import InputGroup from 'react-bootstrap/InputGroup';

const passwordRule = { required: 'Required' };
const PasswordComponent = (props) => (
  <Form.Group as={Row} controlId={props.controlId}>

    <Col>
      <InputGroup>
        <InputGroup.Prepend>
          <InputGroup.Text>
            <RiLockPasswordFill />
          </InputGroup.Text>
        </InputGroup.Prepend>
        <FormattedMessage id="registerTagPasswordPlaceHolder">
          {(msg) => <Form.Control type="password" name="password" placeholder={msg} defaultValue={props.defaultValue} autoComplete="off" ref={props.register(passwordRule)} />}
        </FormattedMessage>
      </InputGroup>

      <Form.Text className="text-danger">
        {props.errors.password && props.errors.password.message}
      </Form.Text>
    </Col>
  </Form.Group>
);

export default PasswordComponent;
