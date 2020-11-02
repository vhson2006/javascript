import React from 'react';
import Form from 'react-bootstrap/Form';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button';
import { FormattedMessage } from 'react-intl';
import { IoLogoGoogle } from 'react-icons/io';

const GoogleButtonComponent = (props) => (
  <Form.Group as={Row} controlId={props.controlId}>
    <Col>

      <Button type="submit" variant="danger" className="text-white">
        <IoLogoGoogle />
        <FormattedMessage id="loginTagGoogle" />
      </Button>
    </Col>
  </Form.Group>
);

export default GoogleButtonComponent;
