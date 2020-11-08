import React, { useState } from 'react';
import { FormattedMessage } from 'react-intl';
import Container from 'react-bootstrap/Container';
import Tabs from 'react-bootstrap/Tabs';
import Tab from 'react-bootstrap/Tab';
import Card from 'react-bootstrap/Card';
import ReactMapGL from 'react-map-gl';

import LoginComponent from './login-component';
import RegisterComponent from './register-component';
import { getTextContent } from '../../helpers/language-helper';

const cover = {
  height: '100%',
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
};

const box = {
  maxWidth: '480px',
  height: '560px',
};
const HomeView = () => {
  const [viewport, setViewport] = useState({
    width: '100%',
    height: 300,
    latitude: 37.7577,
    longitude: -122.4376,
    zoom: 8,
  });

  return (
    <div style={cover}>
      <Container style={box}>
        <Card>
          <Card.Header as="h1" className="bg-dark text-white text-center">
            <FormattedMessage id="jumbotron" />
          </Card.Header>
          <Card.Body>
            <Tabs defaultActiveKey="login" id="uncontrolled-tab-example" className="p-2">
              <Tab
                className="pt-3 border"
                eventKey="login"
                title={getTextContent('loginTagTitle')}
                style={{
                  backgroundColor: 'transparent', border: 0, outline: 'none', boxShadow: 'none', padding: 0,
                }}
              >
                <LoginComponent />
              </Tab>
              <Tab className="pt-3 border " eventKey="register" title={getTextContent('registerTagTitle')}>
                <RegisterComponent />
              </Tab>
            </Tabs>
            <ReactMapGL
              mapboxApiAccessToken="pk.eyJ1Ijoic29udmgyMDIwIiwiYSI6ImNrZzh3YnNiNzAxN2cyeHBoNGkyOXg5aG4ifQ.7dH9fFOZUR6A50ga0BeVfw"
              width={viewport.width}
              height={viewport.height}
              latitude={viewport.latitude}
              longitude={viewport.longitude}
              zoom={viewport.zoom}
              onViewportChange={(nextViewport) => setViewport(nextViewport)}
            />
          </Card.Body>
        </Card>
      </Container>
    </div>
  );
};

export default HomeView;
