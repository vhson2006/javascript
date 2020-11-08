import React from 'react';
import PropTypes from 'prop-types';
import Form from 'react-bootstrap/Form';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { FormattedMessage } from 'react-intl';

const checkInSettingRule = { required: 'Required' };
const CheckInSettingComponent = (props) => {
  const {
    controlId, defaultValue, register, errors,
  } = props;
  return (
    <Form.Group as={Row} controlId={controlId}>
      <Form.Label column sm={2}>
        <FormattedMessage id="checkInSetting" />
      </Form.Label>
      <Col sm={10}>
        <Form.Control type="text" name="checkIn" defaultValue={defaultValue} ref={register(checkInSettingRule)} />
        <Form.Text className="text-danger">
          {errors.checkIn && errors.checkIn.message}
        </Form.Text>
      </Col>
    </Form.Group>
  );
};
CheckInSettingComponent.propTypes = {
  controlId: PropTypes.string.isRequired,
  defaultValue: PropTypes.string,
  register: PropTypes.func.isRequired,
  errors: PropTypes.shape({
    checkIn: PropTypes.shape({
      message: PropTypes.string,
    }),
  }),
};
CheckInSettingComponent.defaultProps = {
  defaultValue: '',
  errors: { checkIn: '' },
};
export default CheckInSettingComponent;
