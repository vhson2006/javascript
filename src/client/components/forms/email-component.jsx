import React from 'react';
import Form from 'react-bootstrap/Form';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import InputGroup from 'react-bootstrap/InputGroup';
import { FormattedMessage } from 'react-intl';
import { BsFillEnvelopeFill } from 'react-icons/bs';

const emailRule = {
  required: 'Required',
  pattern: {
    value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
    message: 'invalid email address',
  },
};

const EmailComponent = (props) => (
  <Form.Group as={Row} controlId={props.controlId}>

    <Col>
      <InputGroup>
        <InputGroup.Prepend>
          <InputGroup.Text>
            <BsFillEnvelopeFill />
          </InputGroup.Text>
        </InputGroup.Prepend>

        <FormattedMessage id="registerTagEmailPlaceHolder">
          {(msg) => <Form.Control type="email" name="email" placeholder={msg} defaultValue={props.defaultValue} ref={props.register(emailRule)} />}
        </FormattedMessage>
      </InputGroup>

      <Form.Text className="text-danger">
        {props.errors.email && props.errors.email.message}
      </Form.Text>
      <Form.Text className="text-muted">
        <FormattedMessage id="registerTagHint" />
      </Form.Text>
    </Col>
  </Form.Group>
);

export default EmailComponent;
