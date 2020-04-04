import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import io from "socket.io-client";
import PrivateRoute from "./PrivateRoute";
import Lobby from "./components/Lobby";
import { connect } from "react-redux";
import { loginUser, createUser } from "./redux/actions/userActions";
import { createUserFailed } from "./redux/actions/appActions";

const socket = io(window.location.pathname);

const App = props => {
  const [connected, setConnected] = useState(false);
  const [clientId, setClientId] = useState("");
  const [rooms, setRooms] = useState({});
  const [words, setWords] = useState("");

  useEffect(() => {
    socket.on("connected", state => {
      setConnected(true);
      setClientId(socket.id);
      setRooms(state);
    });
    socket.on("submitted message", state => {
      setRooms(state[window.location.pathname.slice(1)]);
    });
    socket.on("logged in user", user => {
      props.loginUser(user);
    });
    socket.on("created user", user => {
      props.createUser(user);
    });
    socket.on("username taken", user => {
      props.createUserFailed(user);
    });
  }, [clientId]);

  const handleChange = e => {
    setWords(e.target.value);
  };

  return (
    <Router>
      <PrivateRoute
        exact
        path="/"
        component={rooms => <Lobby rooms={rooms} />}
        socket={socket}
      ></PrivateRoute>
    </Router>
  );
};

const mapState = state => {
  return {
    user: state.user
  };
};

const mapDispatch = dispatch => {
  return {
    loginUser: user => dispatch(loginUser(user)),
    createUser: user => dispatch(createUser(user)),
    createUserFailed: user => dispatch(createUserFailed(user))
  };
};

export default connect(
  mapState,
  mapDispatch
)(App);
