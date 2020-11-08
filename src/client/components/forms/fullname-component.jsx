import React from 'react';
import PropTypes from 'prop-types';
import Form from 'react-bootstrap/Form';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { FormattedMessage } from 'react-intl';
import { BsFillPersonFill } from 'react-icons/bs';
import InputGroup from 'react-bootstrap/InputGroup';

const fullnameRule = { required: 'Required' };
const FullnameComponent = (props) => {
  const {
    controlId, defaultValue, register, errors,
  } = props;
  return (
    <Form.Group as={Row} controlId={controlId}>
      <Col>
        <InputGroup>
          <InputGroup.Prepend>
            <InputGroup.Text>
              <BsFillPersonFill />
            </InputGroup.Text>
          </InputGroup.Prepend>
          <FormattedMessage id="registerTagFullnamePlaceHolder">
            {(msg) => <Form.Control type="text" name="fullname" placeholder={msg} defaultValue={defaultValue} ref={register(fullnameRule)} />}
          </FormattedMessage>
        </InputGroup>
        <Form.Text className="text-danger">
          {errors.fullname && errors.fullname.message}
        </Form.Text>
      </Col>
    </Form.Group>
  );
};
FullnameComponent.propTypes = {
  controlId: PropTypes.string.isRequired,
  defaultValue: PropTypes.string,
  register: PropTypes.func.isRequired,
  errors: PropTypes.shape({
    fullname: PropTypes.shape({
      message: PropTypes.string,
    }),
  }),
};
FullnameComponent.defaultProps = {
  defaultValue: '',
  errors: { fullname: '' },
};
export default FullnameComponent;
