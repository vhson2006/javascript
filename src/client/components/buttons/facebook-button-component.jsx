import React from 'react';
import Form from 'react-bootstrap/Form';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button';
import { FormattedMessage } from 'react-intl';
import { FiFacebook } from 'react-icons/fi';

const FacebookButtonComponent = (props) => (
  <Form.Group as={Row} controlId={props.controlId}>
    <Col>
      <Button type="submit" variant="primary" className="text-white">
        <FiFacebook />
        <FormattedMessage id="loginTagFacebook" />
      </Button>
    </Col>
  </Form.Group>
);

export default FacebookButtonComponent;
