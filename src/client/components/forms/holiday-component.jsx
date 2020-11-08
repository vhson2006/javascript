import React from 'react';
import PropTypes from 'prop-types';
import Form from 'react-bootstrap/Form';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { MdDateRange } from 'react-icons/md';
import InputGroup from 'react-bootstrap/InputGroup';

const HolidayComponent = (props) => {
  const {
    controlId, defaultValue,
  } = props;
  return (
    <Form.Group as={Row} controlId={controlId}>
      <Col>
        <InputGroup>
          <InputGroup.Prepend>
            <InputGroup.Text>
              <MdDateRange />
            </InputGroup.Text>
          </InputGroup.Prepend>
          <Form.Control as="select" defaultValue={defaultValue}>
            <option value="1">Create New</option>
          </Form.Control>
        </InputGroup>
      </Col>
    </Form.Group>
  );
};
HolidayComponent.propTypes = {
  controlId: PropTypes.string.isRequired,
  defaultValue: PropTypes.number,
};
HolidayComponent.defaultProps = {
  defaultValue: 1,
};
export default HolidayComponent;
