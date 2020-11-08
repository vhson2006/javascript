import React, { useEffect } from 'react';
import { useCookies } from 'react-cookie';
import PropTypes from 'prop-types';
import { useNavigate } from 'react-router-dom';
import img from '../../assets/images/background.jpg';

const style = {
  backgroundImage: `linear-gradient(rgba(255,255,255,0.5), rgba(255,255,255,0.5)), url(${img})`,
  backgroundPosition: 'center',
  backgroundSize: 'cover',
  backgroundRepeat: 'no-repeat',
  height: '100vh',
  margin: '0 0 0 0',

};
const PublicLayoutComponent = (props) => {
  const [cookies] = useCookies('token');
  const { childComponent } = props;
  const navigate = useNavigate();

  useEffect(() => {
    if (cookies.token && cookies.token.length > 0) {
      navigate('/dashboard');
    }
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <div style={style}>
      { childComponent }
    </div>
  );
};
PublicLayoutComponent.propTypes = {
  childComponent: PropTypes.oneOfType([PropTypes.element, PropTypes.func]).isRequired,
};

export default PublicLayoutComponent;
