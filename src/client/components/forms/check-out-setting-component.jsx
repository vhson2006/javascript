import React from 'react';
import Form from 'react-bootstrap/Form';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { FormattedMessage } from 'react-intl';

const chekOutSettingRule = { required: 'Required' };
const CheckOutSettingComponent = (props) => (
  <Form.Group as={Row} controlId={props.controlId}>
    <Form.Label column sm={2}>
      <FormattedMessage id="checkOutSetting" />
    </Form.Label>
    <Col sm={10}>
      <Form.Control type="text" name="checkOut" defaultValue={props.defaultValue} ref={props.register(chekOutSettingRule)} />
      <Form.Text className="text-danger">
        {props.errors.checkOut && props.errors.checkOut.message}
      </Form.Text>
    </Col>
  </Form.Group>
);

export default CheckOutSettingComponent;
