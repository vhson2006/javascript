import React from 'react';
import { connect } from 'react-redux';
import { FormattedMessage } from 'react-intl';
import PropTypes from 'prop-types';
import Container from 'react-bootstrap/Container';
import Alert from 'react-bootstrap/Alert';
import Card from 'react-bootstrap/Card';
import { css } from '@emotion/core';
import HashLoader from 'react-spinners/HashLoader';
import GreetingTitleComponent from '../../components/commons/greeting-title-component';
import ProfileComponent from './profile-component';
import constants from '../../constants';

const override = css`
  display: block;
  margin: 0 auto;
  border-color: red;
`;

const cover = {
  height: '100%',
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
};

const box = {
  maxWidth: '800px',
  height: '800px',
};

const mapStateToProps = (state) => ({
  show: state.requestStatus.status,
});

const ProfileView = (props) => {
  const { show } = props;
  return (
    <div style={cover}>
      <Container style={box}>
        <Card>
          <Card.Header>
            <GreetingTitleComponent />
            <h1>
              <FormattedMessage id="profileTitle" />
            </h1>
          </Card.Header>
          <Card.Body>
            <Alert variant="success" show={show === constants.SUCCESSFUL_REQUEST_STATUS}> Update success </Alert>
            <Alert variant="danger" show={show === constants.UNSUCCESSFUL_REQUEST_STATUS}> Update fail </Alert>
            <HashLoader css={override} size={150} color="#123abc" loading={show === constants.LOADING_REQUEST_STATUS} />
            <ProfileComponent />
          </Card.Body>
        </Card>
      </Container>
    </div>
  );
};

ProfileView.propTypes = {
  show: PropTypes.number.isRequired,
};

export default connect(mapStateToProps, null)(ProfileView);
