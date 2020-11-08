import React from 'react';
import PropTypes from 'prop-types';
import Form from 'react-bootstrap/Form';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { FormattedMessage } from 'react-intl';

const latitudeSettingRule = { required: 'Required' };
const LatitudeSettingComponent = (props) => {
  const {
    controlId, defaultValue, register, errors,
  } = props;
  return (
    <Form.Group as={Row} controlId={controlId}>
      <Form.Label column sm={2}>
        <FormattedMessage id="latitudeSetting" />
      </Form.Label>
      <Col sm={10}>
        <Form.Control type="text" name="latitude" defaultValue={defaultValue} ref={register(latitudeSettingRule)} />
        <Form.Text className="text-danger">
          {errors.latitude && errors.latitude.message}
        </Form.Text>
      </Col>
    </Form.Group>
  );
};
LatitudeSettingComponent.propTypes = {
  controlId: PropTypes.string.isRequired,
  defaultValue: PropTypes.string,
  register: PropTypes.func.isRequired,
  errors: PropTypes.shape({
    latitude: PropTypes.shape({
      message: PropTypes.string,
    }),
  }),
};
LatitudeSettingComponent.defaultProps = {
  defaultValue: '',
  errors: { latitude: '' },
};
export default LatitudeSettingComponent;
