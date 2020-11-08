import React from 'react';
import PropTypes from 'prop-types';
import Form from 'react-bootstrap/Form';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { FormattedMessage } from 'react-intl';

const DueDateComponent = (props) => {
  const {
    controlId, defaultValue, disabled, register, errors,
  } = props;
  return (
    <Form.Group as={Row} controlId={controlId}>
      <Form.Label column sm={2}>
        <FormattedMessage id="profileDueDate" />
      </Form.Label>
      <Col sm={10}>
        <Form.Control type="text" name="duedate" defaultValue={defaultValue} disabled={!!disabled} ref={register({})} />
        <Form.Text className="text-danger">
          {errors.duedate && errors.duedate.message}
        </Form.Text>
      </Col>
    </Form.Group>
  );
};
DueDateComponent.propTypes = {
  controlId: PropTypes.string.isRequired,
  defaultValue: PropTypes.string,
  disabled: PropTypes.bool.isRequired,
  register: PropTypes.func.isRequired,
  errors: PropTypes.shape({
    duedate: PropTypes.shape({
      message: PropTypes.string,
    }),
  }),
};
DueDateComponent.defaultProps = {
  defaultValue: '',
  errors: { duedate: '' },
};
export default DueDateComponent;
