import React, { useEffect } from 'react';
import { useCookies } from 'react-cookie';
import PropTypes from 'prop-types';
import { useNavigate } from 'react-router-dom';

const style = {

  height: '100vh',
  margin: '0 0 0 0',

};
const PrivateLayoutComponent = (props) => {
  const [cookies] = useCookies('token');
  const { childComponent } = props;
  const navigate = useNavigate();

  useEffect(() => {
    if (Object.prototype.hasOwnProperty.call(cookies, 'token') === false || cookies.token.length <= 0) {
      navigate('/');
    }
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <div style={style}>
      { childComponent }
    </div>
  );
};
PrivateLayoutComponent.propTypes = {
  childComponent: PropTypes.oneOfType([PropTypes.element, PropTypes.func]).isRequired,
};
export default PrivateLayoutComponent;
