import React, {Suspense} from "react";
import ReactDOM from "react-dom";
import App from "./App";
import { Provider } from 'react-redux';
import { configureStore } from './redux/Store';
import reportWebVitals from "./reportWebVitals";
import { BrowserRouter as Router } from "react-router-dom";
import "@fortawesome/fontawesome-free/css/all.min.css";
import { ProjectProvider } from "./context/projects";
import { PlantProvider } from "./context/plants";
import { ConceptProvider } from "./context/concepts";
import { UserProvider } from "./context/user";
import WebFont from "webfontloader";
import "./components/utility/i18n";
import 'flag-icon-css/css/flag-icon.min.css'

import Spinner from './views/spinner/Spinner';
import Loading from "./components/Loading";
//mport Amplify from "aws-amplify";
//import config from "./aws-exports";
//Amplify.configure(config);
require("dotenv").config();

WebFont.load({
  google: {
    families: [
      "Poppins Web:100,200,300,400,500,600,700,800",
      "sans-serif",
      "IBM Plex Serif: 700",
    ],
  },
});

{/*const loadingMarkup = (<Loading />)*/}

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
  document.getElementById("root")
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();