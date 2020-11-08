import React from 'react';
import PropTypes from 'prop-types';
import Form from 'react-bootstrap/Form';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button';
import { FormattedMessage } from 'react-intl';
import { IoLogoGoogle } from 'react-icons/io';

const GoogleButtonComponent = (props) => {
  const { controlId } = props;
  return (
    <Form.Group as={Row} controlId={controlId}>
      <Col>
        <Button type="submit" variant="danger" className="text-white">
          <IoLogoGoogle />
          <FormattedMessage id="loginTagGoogle" />
        </Button>
      </Col>
    </Form.Group>
  );
};
GoogleButtonComponent.propTypes = {
  controlId: PropTypes.string.isRequired,
};
export default GoogleButtonComponent;
