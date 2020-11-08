import React from 'react';
import PropTypes from 'prop-types';
import Form from 'react-bootstrap/Form';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button';
import { FormattedMessage } from 'react-intl';

const ButtonComponent = (props) => {
  const { controlId, label } = props;
  return (
    <Form.Group as={Row} controlId={controlId}>
      <Col>
        <Button type="submit" variant="info" className="text-white">
          <FormattedMessage id={label} />
        </Button>
      </Col>
    </Form.Group>
  );
};
ButtonComponent.propTypes = {
  controlId: PropTypes.string.isRequired,
  label: PropTypes.string.isRequired,
};
export default ButtonComponent;
