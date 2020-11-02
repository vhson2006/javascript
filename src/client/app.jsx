import React from 'react';
import { createStore, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
import createSagaMidleware from 'redux-saga';
import { CookiesProvider } from 'react-cookie';
import { Helmet } from 'react-helmet';

import RootReducer from './reducers';
import sagas from './sagas';
import MultiLanguageComponent from './components/commons/multi-language-component';

const sagaMiddleware = createSagaMidleware();
const store = createStore(RootReducer, applyMiddleware(sagaMiddleware));
sagaMiddleware.run(sagas);

const App = () => (
  <>
    <Helmet>
      <meta charset="UTF-8" />
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      <meta httpEquiv="X-UA-Compatible" content="ie=edge" />
      <title>Welcome to my Kampir Portal</title>
      <link rel="canonical" href="#" />
      <meta name="description" content="" />
      <meta name="keywords" content="" />
      <meta name="author" content="" />
      <meta name="copyright" content="" />
      <meta name="application-name" content="" />
      <meta property="og:title" content="" />
      <meta property="og:type" content="article" />
      <meta property="og:image" content="" />
      <meta property="og:url" content="" />
      <meta property="og:description" content="" />
      <meta name="twitter:card" content="summary" />
      <meta name="twitter:title" content="" />
      <meta name="twitter:description" content="" />
      <meta name="twitter:image" content="" />
    </Helmet>
    <CookiesProvider>
      <Provider store={store}>
        <MultiLanguageComponent />
      </Provider>
    </CookiesProvider>
  </>
);

export default App;
