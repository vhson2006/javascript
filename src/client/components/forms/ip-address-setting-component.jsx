import React from 'react';
import Form from 'react-bootstrap/Form';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { FormattedMessage } from 'react-intl';

const ipAddressRule = { required: 'Required' };
const IpAddressSettingComponent = (props) => (
  <Form.Group as={Row} controlId={props.controlId}>
    <Form.Label column sm={2}>
      <FormattedMessage id="ipAddressSetting" />
    </Form.Label>
    <Col sm={10}>
      <Form.Control type="text" name="ipAddress" defaultValue={props.defaultValue} ref={props.register(ipAddressRule)} />
      <Form.Text className="text-danger">
        {props.errors.ipAddress && props.errors.ipAddress.message}
      </Form.Text>
    </Col>
  </Form.Group>
);

export default IpAddressSettingComponent;
