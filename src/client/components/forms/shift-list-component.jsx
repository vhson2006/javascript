import React from 'react';
import Form from 'react-bootstrap/Form';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { FormattedMessage } from 'react-intl';
import { BiListPlus } from 'react-icons/bi';
import InputGroup from 'react-bootstrap/InputGroup';

const ShiftListComponent = (props) => (
  <Form.Group as={Row} controlId={props.controlId}>
    <Col>

      <InputGroup>
        <InputGroup.Prepend>
          <InputGroup.Text>
            <BiListPlus />
          </InputGroup.Text>
        </InputGroup.Prepend>

        <Form.Control as="select" defaultValue={props.defaultValue}>
          <option value="1">Create New</option>
          <option value="2">09:00 ~ 18:00</option>
        </Form.Control>
      </InputGroup>
    </Col>
  </Form.Group>
);

export default ShiftListComponent;
