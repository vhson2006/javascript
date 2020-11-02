import React, { useState } from 'react';
import Form from 'react-bootstrap/Form';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { FormattedMessage } from 'react-intl';
import Switch from 'react-switch';
import OverlayTrigger from 'react-bootstrap/OverlayTrigger';
import Tooltip from 'react-bootstrap/Tooltip';
import Button from 'react-bootstrap/Button';

const CheckboxComponent = (props) => {
  const [flag, setFlag] = useState(false);
  const handleChange = () => setFlag(!flag);
  const placement = 'top';
  return (
    <Form.Group as={Row} controlId={props.controlId}>
      <Col>

        <OverlayTrigger
          key={placement}
          placement={placement}
          overlay={(
            <Tooltip id={`tooltip-${placement}`}>
              <FormattedMessage id={props.label} />
            </Tooltip>
          )}
        >
          <Button style={{
            backgroundColor: 'transparent', border: 0, outline: 'none', boxShadow: 'none', paddingLeft: '0',
          }}
          >

            <Switch
              onChange={handleChange}
              checked={flag}
              onColor="#86d3ff"
              onHandleColor="#2693e6"
              handleDiameter={20}
              uncheckedIcon={false}
              checkedIcon={false}
              boxShadow="0px 1px 5px rgba(0, 0, 0, 0.6)"
              activeBoxShadow="0px 0px 1px 10px rgba(0, 0, 0, 0.2)"
              height={20}
              width={48}
              className="react-switch"
              id="material-switch"
            />
          </Button>

        </OverlayTrigger>

      </Col>
    </Form.Group>
  );
};

export default CheckboxComponent;
