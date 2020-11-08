import React from 'react';
import PropTypes from 'prop-types';
import Form from 'react-bootstrap/Form';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { FormattedMessage } from 'react-intl';

const ipAddressRule = { required: 'Required' };
const IpAddressSettingComponent = (props) => {
  const {
    controlId, defaultValue, register, errors,
  } = props;
  return (
    <Form.Group as={Row} controlId={controlId}>
      <Form.Label column sm={2}>
        <FormattedMessage id="ipAddressSetting" />
      </Form.Label>
      <Col sm={10}>
        <Form.Control type="text" name="ipAddress" defaultValue={defaultValue} ref={register(ipAddressRule)} />
        <Form.Text className="text-danger">
          {errors.ipAddress && errors.ipAddress.message}
        </Form.Text>
      </Col>
    </Form.Group>
  );
};
IpAddressSettingComponent.propTypes = {
  controlId: PropTypes.string.isRequired,
  defaultValue: PropTypes.string,
  register: PropTypes.func.isRequired,
  errors: PropTypes.shape({
    ipAddress: PropTypes.shape({
      message: PropTypes.string,
    }),
  }),
};
IpAddressSettingComponent.defaultProps = {
  defaultValue: '',
  errors: { ipAddress: '' },
};
export default IpAddressSettingComponent;
