import React from 'react';
import Form from 'react-bootstrap/Form';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { FormattedMessage } from 'react-intl';
import { BsGeoAlt } from 'react-icons/bs';
import InputGroup from 'react-bootstrap/InputGroup';

const addressRule = { required: 'Required' };
const AddressComponent = (props) => (
  <Form.Group as={Row} controlId={props.controlId}>

    <Col>

      <InputGroup>
        <InputGroup.Prepend>
          <InputGroup.Text>
            <BsGeoAlt />
          </InputGroup.Text>
        </InputGroup.Prepend>
        <FormattedMessage id="registerTagAddressPlaceHolder">
          {(msg) => <Form.Control type="text" name="address" placeholder={msg} defaultValue={props.defaultValue} ref={props.register(addressRule)} />}
        </FormattedMessage>
      </InputGroup>

      <Form.Text className="text-danger">
        {props.errors.address && props.errors.address.message}
      </Form.Text>
    </Col>
  </Form.Group>
);

export default AddressComponent;
