import React from 'react';
import PropTypes from 'prop-types';
import Form from 'react-bootstrap/Form';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { FormattedMessage } from 'react-intl';
import { RiLockPasswordFill } from 'react-icons/ri';
import InputGroup from 'react-bootstrap/InputGroup';

const passwordRule = { required: 'Required' };
const PasswordComponent = (props) => {
  const {
    controlId, defaultValue, register, errors,
  } = props;
  return (
    <Form.Group as={Row} controlId={controlId}>
      <Col>
        <InputGroup>
          <InputGroup.Prepend>
            <InputGroup.Text>
              <RiLockPasswordFill />
            </InputGroup.Text>
          </InputGroup.Prepend>
          <FormattedMessage id="registerTagPasswordPlaceHolder">
            {(msg) => <Form.Control type="password" name="password" placeholder={msg} defaultValue={defaultValue} autoComplete="off" ref={register(passwordRule)} />}
          </FormattedMessage>
        </InputGroup>
        <Form.Text className="text-danger">
          {errors.password && errors.password.message}
        </Form.Text>
      </Col>
    </Form.Group>
  );
};

PasswordComponent.propTypes = {
  controlId: PropTypes.string.isRequired,
  defaultValue: PropTypes.string,
  register: PropTypes.func.isRequired,
  errors: PropTypes.shape({
    password: PropTypes.shape({
      message: PropTypes.string,
    }),
  }),
};
PasswordComponent.defaultProps = {
  defaultValue: '',
  errors: { password: '' },
};

export default PasswordComponent;
