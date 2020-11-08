import React from 'react';
import PropTypes from 'prop-types';
import Form from 'react-bootstrap/Form';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { FormattedMessage } from 'react-intl';

const longitudeSettingRule = { required: 'Required' };
const LongitudeSettingComponent = (props) => {
  const {
    controlId, defaultValue, register, errors,
  } = props;
  return (
    <Form.Group as={Row} controlId={controlId}>
      <Form.Label column sm={2}>
        <FormattedMessage id="longitudeSetting" />
      </Form.Label>
      <Col sm={10}>
        <Form.Control type="text" name="longitude" defaultValue={defaultValue} ref={register(longitudeSettingRule)} />
        <Form.Text className="text-danger">
          {errors.longitude && errors.longitude.message}
        </Form.Text>
      </Col>
    </Form.Group>
  );
};
LongitudeSettingComponent.propTypes = {
  controlId: PropTypes.string.isRequired,
  defaultValue: PropTypes.string,
  register: PropTypes.func.isRequired,
  errors: PropTypes.shape({
    longitude: PropTypes.shape({
      message: PropTypes.string,
    }),
  }),
};
LongitudeSettingComponent.defaultProps = {
  defaultValue: '',
  errors: { longitude: '' },
};
export default LongitudeSettingComponent;
