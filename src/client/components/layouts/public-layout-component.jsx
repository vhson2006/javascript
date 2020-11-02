import React, { useEffect } from 'react';
import { useCookies } from 'react-cookie';
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
  const [cookies, setCookie] = useCookies('token');
  const navigate = useNavigate();

  useEffect(() => {
    if (cookies.token && cookies.token.length > 0) {
      navigate('/dashboard');
    }
  }, []);

  return (
    <div style={style}>
      { props.childComponent }
    </div>
  );
};

export default PublicLayoutComponent;
