import React, { Suspense } from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { Provider } from 'react-redux';
import { configureStore } from './redux/Store';
import reportWebVitals from './reportWebVitals';
import { BrowserRouter as Router } from 'react-router-dom';
import { ProjectProvider } from './context/projects';
import { PlantProvider } from './context/plants';
import { ConceptProvider } from './context/concepts';
import { UserProvider } from './context/user';
import './components/utility/i18n';
import 'flag-icon-css/css/flag-icon.min.css';

import Spinner from './views/spinner/Spinner';
import Amplify from 'aws-amplify';
import config from './aws-exports';
Amplify.configure(config);
require('dotenv').config();

ReactDOM.render(
  <Provider store={configureStore()}>
    <Suspense fallback={<Spinner />}>
      <ConceptProvider>
        <ProjectProvider>
          <PlantProvider>
            <UserProvider>
              <Router>
                <App />
              </Router>
            </UserProvider>
          </PlantProvider>
        </ProjectProvider>
      </ConceptProvider>
    </Suspense>
  </Provider>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
