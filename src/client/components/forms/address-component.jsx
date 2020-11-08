import React from 'react';
import PropTypes from 'prop-types';
import Form from 'react-bootstrap/Form';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { FormattedMessage } from 'react-intl';
import { BsGeoAlt } from 'react-icons/bs';
import InputGroup from 'react-bootstrap/InputGroup';

const addressRule = { required: 'Required' };
const AddressComponent = (props) => {
  const {
    controlId, defaultValue, register, errors,
  } = props;
  return (
    <Form.Group as={Row} controlId={controlId}>
      <Col>
        <InputGroup>
          <InputGroup.Prepend>
            <InputGroup.Text>
              <BsGeoAlt />
            </InputGroup.Text>
          </InputGroup.Prepend>
          <FormattedMessage id="registerTagAddressPlaceHolder">
            {(msg) => <Form.Control type="text" name="address" placeholder={msg} defaultValue={defaultValue} ref={register(addressRule)} />}
          </FormattedMessage>
        </InputGroup>
        <Form.Text className="text-danger">
          {errors.address && errors.address.message}
        </Form.Text>
      </Col>
    </Form.Group>
  );
};
AddressComponent.propTypes = {
  controlId: PropTypes.string.isRequired,
  defaultValue: PropTypes.string,
  register: PropTypes.func.isRequired,
  errors: PropTypes.shape({
    address: PropTypes.shape({
      message: PropTypes.string,
    }),
  }),
};
AddressComponent.defaultProps = {
  defaultValue: '',
  errors: { address: '' },
};
export default AddressComponent;
