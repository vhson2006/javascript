import React from 'react';
import Form from 'react-bootstrap/Form';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { FormattedMessage } from 'react-intl';

const longitudeSettingRule = { required: 'Required' };
const LongitudeSettingComponent = (props) => (
  <Form.Group as={Row} controlId={props.controlId}>
    <Form.Label column sm={2}>
      <FormattedMessage id="longitudeSetting" />
    </Form.Label>
    <Col sm={10}>
      <Form.Control type="text" name="longitude" defaultValue={props.defaultValue} ref={props.register(longitudeSettingRule)} />
      <Form.Text className="text-danger">
        {props.errors.longitude && props.errors.longitude.message}
      </Form.Text>
    </Col>
  </Form.Group>
);

export default LongitudeSettingComponent;
