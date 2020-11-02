import React from 'react';
import Form from 'react-bootstrap/Form';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { FormattedMessage } from 'react-intl';

const checkInSettingRule = { required: 'Required' };
const CheckInSettingComponent = (props) => (
  <Form.Group as={Row} controlId={props.controlId}>
    <Form.Label column sm={2}>
      <FormattedMessage id="checkInSetting" />
    </Form.Label>
    <Col sm={10}>
      <Form.Control type="text" name="checkIn" defaultValue={props.defaultValue} ref={props.register(checkInSettingRule)} />
      <Form.Text className="text-danger">
        {props.errors.checkIn && props.errors.checkIn.message}
      </Form.Text>
    </Col>
  </Form.Group>
);

export default CheckInSettingComponent;
