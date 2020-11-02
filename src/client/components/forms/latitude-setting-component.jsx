import React from 'react';
import Form from 'react-bootstrap/Form';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { FormattedMessage } from 'react-intl';

const latitudeSettingRule = { required: 'Required' };
const LatitudeSettingComponent = (props) => (
  <Form.Group as={Row} controlId={props.controlId}>
    <Form.Label column sm={2}>
      <FormattedMessage id="latitudeSetting" />
    </Form.Label>
    <Col sm={10}>
      <Form.Control type="text" name="latitude" defaultValue={props.defaultValue} ref={props.register(latitudeSettingRule)} />
      <Form.Text className="text-danger">
        {props.errors.latitude && props.errors.latitude.message}
      </Form.Text>
    </Col>
  </Form.Group>
);

export default LatitudeSettingComponent;
