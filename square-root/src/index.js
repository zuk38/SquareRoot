import React, { Suspense } from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { Provider } from 'react-redux';
import store from './redux/ConfigureStore';
import reportWebVitals from './reportWebVitals';
import { BrowserRouter as Router } from 'react-router-dom';
import './components/utility/i18n';
import 'flag-icon-css/css/flag-icon.min.css';

import Spinner from './views/spinner/Spinner';
import Amplify from 'aws-amplify';
import config from './aws-exports';

const updatedAwsConfig = {
  ...config,
  oauth: {
    ...config.oauth,
    redirectSignIn: config.oauth.redirectSignIn,
    redirectSignOut: config.oauth.redirectSignOut,
  },
};

Amplify.configure(updatedAwsConfig);
require('dotenv').config();

store.subscribe(() => {
  // When state will be updated(in our case, when items will be fetched),
  // we will update local component state and force component to rerender
  // with new data.

  console.log(store.getState());
});

ReactDOM.render(
  <Provider store={store}>
    <Suspense fallback={<Spinner />}>
      <Router>
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
