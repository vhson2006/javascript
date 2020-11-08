import React from 'react';
import PropTypes from 'prop-types';
import Form from 'react-bootstrap/Form';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { FormattedMessage } from 'react-intl';
import { getTextContent } from '../../helpers/language-helper';

const FixDeviceSettingComponent = (props) => {
  const {
    controlId, defaultValue, onChange,
  } = props;
  return (
    <fieldset>
      <Form.Group as={Row} controlId={controlId}>
        <Form.Label as="legend" column sm={2}>
          <FormattedMessage id="fixDeviceSetting" />
        </Form.Label>
        <Col sm={10}>
          <Form.Check
            inline
            type="radio"
            name="fixDeviceSetting"
            id="enableFixDeviceSetting"
            value="1"
            label={getTextContent('enableFixDeviceSetting')}
            checked={defaultValue === 1}
            onChange={onChange}
          />
          <Form.Check
            inline
            type="radio"
            name="fixDeviceSetting"
            id="disableFixDeviceSetting"
            value="0"
            label={getTextContent('disableFixDeviceSetting')}
            checked={defaultValue === 0}
            onChange={onChange}
          />
        </Col>
      </Form.Group>
    </fieldset>
  );
};
FixDeviceSettingComponent.propTypes = {
  controlId: PropTypes.string.isRequired,
  defaultValue: PropTypes.string,
  onChange: PropTypes.func.isRequired,
};
FixDeviceSettingComponent.defaultProps = {
  defaultValue: '',
};
export default FixDeviceSettingComponent;
