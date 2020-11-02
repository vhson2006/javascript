import React, { useEffect } from 'react';
import { useCookies } from 'react-cookie';
import { useNavigate } from 'react-router-dom';

const style = {

  height: '100vh',
  margin: '0 0 0 0',

};
const PrivateLayoutComponent = (props) => {
  const [cookies, setCookie] = useCookies('token');
  const navigate = useNavigate();

  useEffect(() => {
    if (cookies.hasOwnProperty('token') === false || cookies.token.length <= 0) {
      navigate('/');
    }
  }, []);

  return (
    <div style={style}>
      { props.childComponent }
    </div>
  );
};

export default PrivateLayoutComponent;
