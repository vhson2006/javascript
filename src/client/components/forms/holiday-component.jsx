import React from 'react';
import Form from 'react-bootstrap/Form';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { FormattedMessage } from 'react-intl';
import { MdDateRange } from 'react-icons/md';
import InputGroup from 'react-bootstrap/InputGroup';

const HolidayComponent = (props) => (
  <Form.Group as={Row} controlId={props.controlId}>
    <Col>

      <InputGroup>
        <InputGroup.Prepend>
          <InputGroup.Text>
            <MdDateRange />
          </InputGroup.Text>
        </InputGroup.Prepend>

        <Form.Control as="select" defaultValue={props.defaultValue}>
          <option value="1">Create New</option>
        </Form.Control>
      </InputGroup>
    </Col>
  </Form.Group>
);

export default HolidayComponent;
