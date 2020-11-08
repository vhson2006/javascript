import React from 'react';
import { IntlProvider } from 'react-intl';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import RouterComponent from './router-component';
import vn from '../../languages/vn';
import en from '../../languages/en';

const mapPropsToState = (state) => ({
  language: state.global.language,
});

const MultiLanguageComponent = (props) => {
  const messages = {
    vn,
    en,
  };
  const { language } = props;
  return (
    <IntlProvider messages={messages[language]} locale="en" defaultLocale="en">
      <RouterComponent />
    </IntlProvider>
  );
};
MultiLanguageComponent.propTypes = {
  language: PropTypes.string.isRequired,
};
export default connect(mapPropsToState, null)(MultiLanguageComponent);
