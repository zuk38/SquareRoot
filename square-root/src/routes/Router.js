import React, { lazy } from "react";
import { Navigate } from "react-router-dom";
import Customize from "../pages/greenspaces/Customize";
import IndoorExample from "../pages/greenspaces/IndoorExample";
import Plants from "../pages/Plants";
import PN from "../pages/PN";
import Account from "../pages/user-pages/Account";
import AllProjects from "../pages/user-pages/AllProjects";
import Dashboard from "../pages/user-pages/Dashboard";
import Greenspace from "../pages/user-pages/Greenspace";

/* *** Landing page *** */
const Home = lazy(() => import("../pages/frontpages/Home"));
const Who = lazy(() => import("../pages/frontpages/Who"));
const Howitworks = lazy(() => import("../pages/frontpages/Howitworks"));
const About = lazy(() => import("../pages/frontpages/About"));
const Contact = lazy(() => import("../pages/frontpages/Contact"));
const Partner = lazy(() => import("../pages/frontpages/Partner"));
const What = lazy(() => import("../pages/frontpages/What"));
const Categories = lazy(() => import("../pages/frontpages/Categories"));
const SingleConcept = lazy(() => import("../pages/greenspaces/SingleConcept"));
const SingleCategory = lazy(() => import("../pages/frontpages/SingleCategory"));
const Error = lazy(() => import("../pages/Error"));

/* *** Auth *** */
const Login = lazy(() => import("../pages/LoginPage"));
const ResetPassword = lazy(() => import("../pages/ForgotPasswordPage"));

/* ****Routes***** */

const Router = (isLoggedIn) => [
  {
    path: "/",
    element: <Home />,
    children: [
      /* landing page */
      { path: "en", element: <Home /> },
      { path: "no", element: <Home /> },
      { path: "who-we-are", element: <Who /> },
      { path: "how-it-works", element: <Howitworks /> },
      { path: "about-us", element: <About /> },
      { path: "become-a-partner", element: <Partner /> },
      { path: "what-we-do", element: <What /> },
      { path: "contact-us", element: <Contact /> },
      { path: "categories", element: <Categories /> },
      { path: "plants", element: <Plants /> },
      { path: "indoor", element: <IndoorExample /> },
      { path: "concepts/:name", element: <SingleConcept /> },
      { path: "categories/:name", element: <SingleCategory /> },
      { path: "404", element: <Error /> },
      { path: "*", element: <Navigate to="/404" /> },
    ],
  },
  /* platform */
  {
    path: "projects",
    element: isLoggedIn ? <AllProjects /> : <Navigate to="/auth/login" />,
  },
  {
    path: "dashboard/:name",
    element: isLoggedIn ? <Dashboard /> : <Navigate to="/auth/login" />,
  },
  {
    path: "greenspace",
    element: isLoggedIn ? <Greenspace /> : <Navigate to="/auth/login" />,
  },
  {
    path: "account",
    element: isLoggedIn ? <Account /> : <Navigate to="/auth/login" />,
  },
  {
    path: "customize/:conceptName",
    element: isLoggedIn ? <Customize /> : <Navigate to="/auth/login" />,
  },
  {
    path: "pn",
    element: isLoggedIn ? <PN /> : <Navigate to="/auth/login" />,
  },
  { path: "*", element: <Navigate to="/404" /> },
  /* auth */
  {
    path: "login",
    element: !isLoggedIn ? <Login /> : <Navigate to="/projects" />,
  },
  {
    path: "forgotpassword",
    element: !isLoggedIn ? <ResetPassword /> : <Navigate to="/projects" />,
  },
];

export default Router;
