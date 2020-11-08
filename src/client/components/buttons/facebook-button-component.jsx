import React from 'react';
import PropTypes from 'prop-types';
import Form from 'react-bootstrap/Form';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button';
import { FormattedMessage } from 'react-intl';
import { FiFacebook } from 'react-icons/fi';

const FacebookButtonComponent = (props) => {
  const { controlId } = props;
  return (
    <Form.Group as={Row} controlId={controlId}>
      <Col>
        <Button type="submit" variant="primary" className="text-white">
          <FiFacebook />
          <FormattedMessage id="loginTagFacebook" />
        </Button>
      </Col>
    </Form.Group>
  );
};
FacebookButtonComponent.propTypes = {
  controlId: PropTypes.string.isRequired,
};
export default FacebookButtonComponent;
