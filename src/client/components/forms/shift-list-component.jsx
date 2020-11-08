import React from 'react';
import PropTypes from 'prop-types';
import Form from 'react-bootstrap/Form';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { BiListPlus } from 'react-icons/bi';
import InputGroup from 'react-bootstrap/InputGroup';

const ShiftListComponent = (props) => {
  const {
    controlId, defaultValue,
  } = props;
  return (
    <Form.Group as={Row} controlId={controlId}>
      <Col>
        <InputGroup>
          <InputGroup.Prepend>
            <InputGroup.Text>
              <BiListPlus />
            </InputGroup.Text>
          </InputGroup.Prepend>
          <Form.Control as="select" defaultValue={defaultValue}>
            <option value="1">Create New</option>
            <option value="2">09:00 ~ 18:00</option>
          </Form.Control>
        </InputGroup>
      </Col>
    </Form.Group>
  );
};
ShiftListComponent.propTypes = {
  controlId: PropTypes.string.isRequired,
  defaultValue: PropTypes.number.isRequired,
};
export default ShiftListComponent;
