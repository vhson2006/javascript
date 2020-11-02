import React from 'react';
import Form from 'react-bootstrap/Form';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { FormattedMessage } from 'react-intl';

const JoinDateComponent = (props) => (
  <Form.Group as={Row} controlId={props.controlId}>
    <Form.Label column sm={2}>
      <FormattedMessage id="profileJoinDate" />
    </Form.Label>
    <Col sm={10}>
      <Form.Control type="text" name="joindate" defaultValue={props.defaultValue} disabled={!!props.disabled} ref={props.register({})} />
      <Form.Text className="text-danger">
        {props.errors.joindate && props.errors.joindate.message}
      </Form.Text>
    </Col>
  </Form.Group>
);

export default JoinDateComponent;
