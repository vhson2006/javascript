import React from 'react';
import Form from 'react-bootstrap/Form';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { FormattedMessage } from 'react-intl';
import { BsFillPersonFill } from 'react-icons/bs';
import InputGroup from 'react-bootstrap/InputGroup';

const fullnameRule = { required: 'Required' };
const FullnameComponent = (props) => (
  <Form.Group as={Row} controlId={props.controlId}>
    <Col>
      <InputGroup>
        <InputGroup.Prepend>
          <InputGroup.Text>
            <BsFillPersonFill />
          </InputGroup.Text>
        </InputGroup.Prepend>
        <FormattedMessage id="registerTagFullnamePlaceHolder">
          {(msg) => <Form.Control type="text" name="fullname" placeholder={msg} defaultValue={props.defaultValue} ref={props.register(fullnameRule)} />}
        </FormattedMessage>
      </InputGroup>
      <Form.Text className="text-danger">
        {props.errors.fullname && props.errors.fullname.message}
      </Form.Text>
    </Col>
  </Form.Group>
);

export default FullnameComponent;
