import React, { useState, useEffect } from 'react';
import { FormattedMessage } from 'react-intl';
import Container from 'react-bootstrap/Container';
import Card from 'react-bootstrap/Card';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import GreetingTitleComponent from '../../components/commons/greeting-title-component';
import RealTimeSummaryComponent from './real-time-summary-component';
import GeneralSummaryComponent from './general-summary-component';
import EmployeesComponent from './employees-component';

const cover = {
  height: '100%',
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
};

const box = {
  maxWidth: '1280px',
  height: '800px',
};

const DashboardView = () => (
  <div style={cover}>
    <Container fluid style={box}>
      <Row>
        <Col>
          <Card>
            <Card.Header>
              <h1><FormattedMessage id="dashboardTitle" /></h1>
            </Card.Header>
            <Card.Body>
              <GeneralSummaryComponent />
            </Card.Body>
          </Card>
        </Col>
        <Col>
          <Card>
            <Card.Header>
              <h1>Today</h1>
            </Card.Header>
            <Card.Body>
              <RealTimeSummaryComponent />
            </Card.Body>
          </Card>
        </Col>
      </Row>
      <Row className="mt-4">
        <Col>
          <EmployeesComponent />
        </Col>
      </Row>
    </Container>
  </div>
);

export default DashboardView;
