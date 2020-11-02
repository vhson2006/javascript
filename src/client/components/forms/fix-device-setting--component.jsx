import React from 'react';
import Form from 'react-bootstrap/Form';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { FormattedMessage } from 'react-intl';
import { getTextContent } from '../../helpers/language-helper';

const FixDeviceSettingComponent = (props) => (
  <fieldset>
    <Form.Group as={Row} controlId={props.controlId}>
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
          checked={props.defaultValue == 1}
          onChange={props.onChange}
        />
        <Form.Check
          inline
          type="radio"
          name="fixDeviceSetting"
          id="disableFixDeviceSetting"
          value="0"
          label={getTextContent('disableFixDeviceSetting')}
          checked={props.defaultValue == 0}
          onChange={props.onChange}
        />
      </Col>
    </Form.Group>
  </fieldset>
);

export default FixDeviceSettingComponent;
