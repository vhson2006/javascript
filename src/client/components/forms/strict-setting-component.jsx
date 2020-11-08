import React from 'react';
import PropTypes from 'prop-types';
import Form from 'react-bootstrap/Form';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { Gi3DStairs } from 'react-icons/gi';
import InputGroup from 'react-bootstrap/InputGroup';

const StrictSettingComponent = (props) => {
  const {
    controlId, defaultValue,
  } = props;
  return (
    <Form.Group as={Row} controlId={controlId}>
      <Col>
        <InputGroup>
          <InputGroup.Prepend>
            <InputGroup.Text>
              <Gi3DStairs />
            </InputGroup.Text>
          </InputGroup.Prepend>
          <Form.Control as="select" defaultValue={defaultValue}>
            <option value="1">Easy</option>
            <option value="2">Moderate</option>
            <option value="3">Hard</option>
            <option value="4">Hardest</option>
          </Form.Control>
        </InputGroup>
      </Col>
    </Form.Group>
  );
};
StrictSettingComponent.propTypes = {
  controlId: PropTypes.string.isRequired,
  defaultValue: PropTypes.number.isRequired,
};
export default StrictSettingComponent;
