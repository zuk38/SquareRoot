import { Route, Navigate } from "react-router-dom";

function PrivateRoute({ component: Component, authed, auth, path, ...rest }) {
  return (
    <Route
      element={(props) =>
        authed === true ? (
          <Route path={path} element={<Component {...props} auth={auth} />} />
        ) : (
          <Navigate
            to={{ pathname: "/login", state: { from: props.location } }}
          />
        )
      }
    />
  );
}

export default PrivateRoute;
