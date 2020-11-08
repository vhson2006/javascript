/* eslint-disable jsx-a11y/interactive-supports-focus */
import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { Link, useNavigate } from 'react-router-dom';
import { FormattedMessage } from 'react-intl';
import { useCookies } from 'react-cookie';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import NavDropdown from 'react-bootstrap/NavDropdown';
import ReactCountryFlag from 'react-country-flag';
import Image from 'react-bootstrap/Image';
import { RiLogoutBoxRFill } from 'react-icons/ri';
import { ImProfile } from 'react-icons/im';
import logo from '../../assets/images/logo.png';
import actions from '../../actions';
import avatar from '../../assets/images/avatar.jpg';

const mapStateToProps = (state) => ({
  language: state.global.language,
});
const mapDispatchToProps = (dispatch) => ({
  changeLanguage: (params) => dispatch({ type: actions.CHANGE_LANGUAGE, value: params }),
});

const flagStyle = {
  width: '1.5em',
  height: '1.5em',
};

const NavigationComponent = (props) => {
  const {
    language, changeLanguage,
  } = props;
  const [cookies, , removeCookie] = useCookies(['token']);
  const navigate = useNavigate();
  const changeLanguageEvent = (e) => {
    changeLanguage(e.target.dataset.tag);
  };

  const logoutHandler = (e) => {
    removeCookie('token');
    navigate('/');
  };

  return (
    <Navbar fixed="top" expand="lg">
      { (cookies.token && cookies.token.length > 0)
        ? (
          <Navbar.Brand to="/dashboard" as={Link} className="ml-5 pl-5">
            <img alt="" width="30" height="30" className="d-inline-block align-top" src={logo} />
          </Navbar.Brand>
        ) : ''}

      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
        { (cookies.token && cookies.token.length > 0)
          ? (
            // <Nav>
            //   <Nav.Link to="/dashboard" as={Link}>
            //     <FormattedMessage id="dashboard" />
            //   </Nav.Link>
            // </Nav>
            ''
          ) : ''}
        <Nav className="ml-auto">
          <NavDropdown id="basic-nav-dropdown" title={<ReactCountryFlag countryCode={language === 'en' ? 'us' : language} svg style={flagStyle} className="mr-2" />} alignRight>
            <NavDropdown.Item className=" d-lg-inline-flex">
              <ReactCountryFlag countryCode="US" svg style={flagStyle} className="mr-2" />
              <div role="button" data-tag="en" onClick={changeLanguageEvent} onKeyDown={changeLanguageEvent}>English</div>
            </NavDropdown.Item>
            <NavDropdown.Item className="d-lg-inline-flex">
              <ReactCountryFlag countryCode="VN" svg style={flagStyle} className="mr-2" />
              <div role="button" data-tag="vn" onClick={changeLanguageEvent} onKeyDown={changeLanguageEvent}>Việt Nam</div>
            </NavDropdown.Item>
          </NavDropdown>
          { (cookies.token && cookies.token.length > 0)
            ? (
              <NavDropdown id="basic-nav-dropdown-2" title={<Image src={avatar} roundedCircle width="40" height="40" />} className="mr-5" alignRight>
                <NavDropdown.Item onClick={logoutHandler}>
                  <RiLogoutBoxRFill />
&nbsp;
                  <FormattedMessage id="logout" />
                </NavDropdown.Item>
                <NavDropdown.Item href="/profile">
                  <ImProfile />
&nbsp;
                  <FormattedMessage id="profile" />
                </NavDropdown.Item>
              </NavDropdown>
            ) : ''}
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
};
NavigationComponent.propTypes = {
  language: PropTypes.string.isRequired,
  changeLanguage: PropTypes.func.isRequired,
};

export default connect(mapStateToProps, mapDispatchToProps)(NavigationComponent);
