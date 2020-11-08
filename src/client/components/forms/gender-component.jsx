import React from 'react';
import PropTypes from 'prop-types';
import Form from 'react-bootstrap/Form';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { FormattedMessage } from 'react-intl';
import { ImUsers } from 'react-icons/im';
import InputGroup from 'react-bootstrap/InputGroup';

const GenderComponent = (props) => {
  const {
    controlId, onChangeGender,
  } = props;
  return (
    <Form.Group as={Row} controlId={controlId} onChange={onChangeGender}>
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
};
GenderComponent.propTypes = {
  controlId: PropTypes.string.isRequired,
  onChangeGender: PropTypes.func.isRequired,
};

export default GenderComponent;
