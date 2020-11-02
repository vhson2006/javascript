import React from 'react';
import Form from 'react-bootstrap/Form';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { FormattedMessage } from 'react-intl';
import { ImUsers } from 'react-icons/im';
import InputGroup from 'react-bootstrap/InputGroup';
import { getTextContent } from '../../helpers/language-helper';

const GenderComponent = (props) => (
  <Form.Group as={Row} controlId={props.controlId} onChange={props.onChangeGender}>
    <Col className="">
      <InputGroup>
        <InputGroup.Prepend>
          <InputGroup.Text>
            <ImUsers />
          </InputGroup.Text>
        </InputGroup.Prepend>

        <Form.Control as="select">
          <FormattedMessage id="registerTagMaleGender">
            {(msg) => <option value="Male">{msg}</option>}
          </FormattedMessage>
          <FormattedMessage id="registerTagFemaleGender">
            {(msg) => <option value="Female">{msg}</option>}
          </FormattedMessage>
        </Form.Control>
      </InputGroup>
    </Col>
  </Form.Group>
);

export default GenderComponent;
