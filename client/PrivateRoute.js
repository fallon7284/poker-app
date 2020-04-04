import React from "react";
import { Route } from "react-router-dom";
import Login from "./components/Login";
import { connect } from "react-redux";

const PrivateRoute = ({ path, component: Component, loggedIn, socket }) => {
  return (
    <Route
      path={path}
      component={
        loggedIn
          ? () => <Component socket={socket} />
          : () => <Login socket={socket} />
      }
    ></Route>
  );
};

const mapState = state => {
  return {
    loggedIn: state.user.loggedIn
  };
};

export default connect(mapState)(PrivateRoute);
