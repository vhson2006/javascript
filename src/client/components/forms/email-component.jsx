import React from 'react';
import PropTypes from 'prop-types';
import Form from 'react-bootstrap/Form';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import InputGroup from 'react-bootstrap/InputGroup';
import { FormattedMessage } from 'react-intl';
import { BsFillEnvelopeFill } from 'react-icons/bs';

const emailRule = {
  required: 'Required',
  pattern: {
    value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
    message: 'invalid email address',
  },
};

const EmailComponent = (props) => {
  const {
    controlId, defaultValue, register, errors,
  } = props;
  return (
    <Form.Group as={Row} controlId={controlId}>
      <Col>
        <InputGroup>
          <InputGroup.Prepend>
            <InputGroup.Text>
              <BsFillEnvelopeFill />
            </InputGroup.Text>
          </InputGroup.Prepend>
          <FormattedMessage id="registerTagEmailPlaceHolder">
            {(msg) => <Form.Control type="email" name="email" placeholder={msg} defaultValue={defaultValue} ref={register(emailRule)} />}
          </FormattedMessage>
        </InputGroup>
        <Form.Text className="text-danger">
          {errors.email && errors.email.message}
        </Form.Text>
        <Form.Text className="text-muted">
          <FormattedMessage id="registerTagHint" />
        </Form.Text>
      </Col>
    </Form.Group>
  );
};
EmailComponent.propTypes = {
  controlId: PropTypes.string.isRequired,
  defaultValue: PropTypes.string,
  register: PropTypes.func.isRequired,
  errors: PropTypes.shape({
    email: PropTypes.shape({
      message: PropTypes.string,
    }),
  }),
};
EmailComponent.defaultProps = {
  defaultValue: '',
  errors: { email: '' },
};
export default EmailComponent;
