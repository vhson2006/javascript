import React from 'react';
import { FormattedMessage } from 'react-intl';

const GreetingTitleComponent = () => (
  <div className="clearfix">
    <div className="float-right">
      <FormattedMessage id="myMessage" defaultMessage="Today is {ts, date, ::yyyyMMdd}" values={{ ts: Date.now() }} />
    </div>
  </div>
);

export default GreetingTitleComponent;
