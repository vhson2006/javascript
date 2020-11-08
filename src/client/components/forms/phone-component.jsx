import React from 'react';
import PropTypes from 'prop-types';
import Form from 'react-bootstrap/Form';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { FormattedMessage } from 'react-intl';
import { ImPhone } from 'react-icons/im';
import InputGroup from 'react-bootstrap/InputGroup';

const phoneRule = { required: 'Required' };
const PhoneComponent = (props) => {
  const {
    controlId, defaultValue, register, errors,
  } = props;
  return (
    <Form.Group as={Row} controlId={controlId}>
      <Col>
        <InputGroup>
          <InputGroup.Prepend>
            <InputGroup.Text>
              <ImPhone />
            </InputGroup.Text>
          </InputGroup.Prepend>
          <FormattedMessage id="registerTagPhonePlaceHolder">
            {(msg) => <Form.Control type="text" name="phone" placeholder={msg} defaultValue={defaultValue} ref={register(phoneRule)} />}
          </FormattedMessage>

        </InputGroup>
        <Form.Text className="text-danger">
          {errors.phone && errors.phone.message}
        </Form.Text>
      </Col>
    </Form.Group>
  );
};
PhoneComponent.propTypes = {
  controlId: PropTypes.string.isRequired,
  defaultValue: PropTypes.string,
  register: PropTypes.func.isRequired,
  errors: PropTypes.shape({
    phone: PropTypes.shape({
      message: PropTypes.string,
    }),
  }),
};
PhoneComponent.defaultProps = {
  defaultValue: '',
  errors: { phone: '' },
};
export default PhoneComponent;
