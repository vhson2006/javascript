import React from 'react';
import PropTypes from 'prop-types';
import Form from 'react-bootstrap/Form';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { FormattedMessage } from 'react-intl';

const JoinDateComponent = (props) => {
  const {
    controlId, defaultValue, register, errors, disabled,
  } = props;
  return (
    <Form.Group as={Row} controlId={controlId}>
      <Form.Label column sm={2}>
        <FormattedMessage id="profileJoinDate" />
      </Form.Label>
      <Col sm={10}>
        <Form.Control type="text" name="joindate" defaultValue={defaultValue} disabled={!!disabled} ref={register({})} />
        <Form.Text className="text-danger">
          {errors.joindate && errors.joindate.message}
        </Form.Text>
      </Col>
    </Form.Group>
  );
};
JoinDateComponent.propTypes = {
  controlId: PropTypes.string.isRequired,
  defaultValue: PropTypes.string,
  disabled: PropTypes.bool.isRequired,
  register: PropTypes.func.isRequired,
  errors: PropTypes.shape({
    joindate: PropTypes.shape({
      message: PropTypes.string,
    }),
  }),
};
JoinDateComponent.defaultProps = {
  defaultValue: '',
  errors: { joindate: '' },
};
export default JoinDateComponent;
