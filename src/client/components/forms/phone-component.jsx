import React from 'react';
import Form from 'react-bootstrap/Form';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { FormattedMessage } from 'react-intl';
import { ImPhone } from 'react-icons/im';
import InputGroup from 'react-bootstrap/InputGroup';

const phoneRule = { required: 'Required' };
const PhoneComponent = (props) => (
  <Form.Group as={Row} controlId={props.controlId}>
    <Col>
      <InputGroup>
        <InputGroup.Prepend>
          <InputGroup.Text>
            <ImPhone />
          </InputGroup.Text>
        </InputGroup.Prepend>
        <FormattedMessage id="registerTagPhonePlaceHolder">
          {(msg) => <Form.Control type="text" name="phone" placeholder={msg} defaultValue={props.defaultValue} ref={props.register(phoneRule)} />}
        </FormattedMessage>

      </InputGroup>
      <Form.Text className="text-danger">
        {props.errors.phone && props.errors.phone.message}
      </Form.Text>
    </Col>
  </Form.Group>
);

export default PhoneComponent;
