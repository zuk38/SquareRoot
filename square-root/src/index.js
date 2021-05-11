import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import { BrowserRouter as Router } from "react-router-dom";
import "@fortawesome/fontawesome-free/css/all.min.css";
import { ProjectProvider } from "./context/projects"
import Amplify from "aws-amplify";
import config from "./aws-exports";
Amplify.configure(config);
import WebFont from 'webfontloader';

WebFont.load({
  google: {
    families: ['Poppins Web:100,200,300,400,500,600,700,800', 'sans-serif']
  }
});

require('dotenv').config()

ReactDOM.render(
  <ProjectProvider>
    <Router>
      <App />
    </Router>
  </ProjectProvider>,
  document.getElementById("root")
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
