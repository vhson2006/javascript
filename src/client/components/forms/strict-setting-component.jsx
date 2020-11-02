import React from 'react';
import Form from 'react-bootstrap/Form';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { FormattedMessage } from 'react-intl';
import { Gi3DStairs } from 'react-icons/gi';
import InputGroup from 'react-bootstrap/InputGroup';

const StrictSettingComponent = (props) => (
  <Form.Group as={Row} controlId={props.controlId}>
    <Col>

      <InputGroup>
        <InputGroup.Prepend>
          <InputGroup.Text>
            <Gi3DStairs />
          </InputGroup.Text>
        </InputGroup.Prepend>

        <Form.Control as="select" defaultValue={props.defaultValue}>
          <option value="1">Easy</option>
          <option value="2">Moderate</option>
          <option value="3">Hard</option>
          <option value="4">Hardest</option>
        </Form.Control>
      </InputGroup>
    </Col>
  </Form.Group>
);

export default StrictSettingComponent;
