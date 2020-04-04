import { LOGIN_USER, CREATE_USER } from "../actions/userActions";

const defaultState = {
  id: null,
  loggedIn: false,
  username: null,
  bankroll: null,
  newUser: false
};

export default (state = defaultState, action) => {
  switch (action.type) {
    case LOGIN_USER: {
      return {
        ...state,
        loggedIn: true,
        id: action.user.id,
        username: action.user.username,
        bankroll: action.user.bankroll,
        createFailed: false
      };
    }
    case CREATE_USER: {
      return {
        ...state,
        loggedIn: true,
        id: action.user.id,
        username: action.user.username,
        bankroll: action.user.bankroll,
        newUser: true,
        createFailed: false
      };
    }
    default: {
      return state;
    }
  }
};
