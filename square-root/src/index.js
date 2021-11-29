import React, { Suspense } from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { Provider } from 'react-redux';
import store from './redux/ConfigureStore';
import reportWebVitals from './reportWebVitals';
import { Router } from 'react-router-dom';
import history from './history';
import './components/utility/i18n';
import 'flag-icon-css/css/flag-icon.min.css';

import Spinner from './views/spinner/Spinner';
import Amplify from 'aws-amplify';
import config from './aws-exports';
Amplify.configure(config);
require('dotenv').config();

ReactDOM.render(
  <Provider store={store}>
    <Suspense fallback={<Spinner />}>
      <Router history={history}>
        <App />
      </Router>
    </Suspense>
  </Provider>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
