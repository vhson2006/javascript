import React from 'react';
import { IntlProvider } from 'react-intl';
import { connect } from 'react-redux';
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
  return (
    <IntlProvider messages={messages[props.language]} locale="en" defaultLocale="en">
      <RouterComponent />
    </IntlProvider>
  );
};

export default connect(mapPropsToState, null)(MultiLanguageComponent);
