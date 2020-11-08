import React from 'react';
import PropTypes from 'prop-types';
import Form from 'react-bootstrap/Form';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { FormattedMessage } from 'react-intl';

const chekOutSettingRule = { required: 'Required' };
const CheckOutSettingComponent = (props) => {
  const {
    controlId, defaultValue, register, errors,
  } = props;
  return (
    <Form.Group as={Row} controlId={controlId}>
      <Form.Label column sm={2}>
        <FormattedMessage id="checkOutSetting" />
      </Form.Label>
      <Col sm={10}>
        <Form.Control type="text" name="checkOut" defaultValue={defaultValue} ref={register(chekOutSettingRule)} />
        <Form.Text className="text-danger">
          {errors.checkOut && errors.checkOut.message}
        </Form.Text>
      </Col>
    </Form.Group>
  );
};
CheckOutSettingComponent.propTypes = {
  controlId: PropTypes.string.isRequired,
  defaultValue: PropTypes.string,
  register: PropTypes.func.isRequired,
  errors: PropTypes.shape({
    checkOut: PropTypes.shape({
      message: PropTypes.string,
    }),
  }),
};
CheckOutSettingComponent.defaultProps = {
  defaultValue: '',
  errors: { checkOut: '' },
};
export default CheckOutSettingComponent;
