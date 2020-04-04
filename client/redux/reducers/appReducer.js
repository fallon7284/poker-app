import { CREATE_USER, LOGIN_USER } from "../actions/userActions";

export const CREATE_USER_FAILED = "CREATE_USER_FAILED";
export const createUserFailed = user => ({ type: CREATE_USER_FAILED, user });

const defaultState = {
  socket: null,
  createUserFailed: false
};

export default (state = defaultState, action) => {
  switch (action.type) {
    case CREATE_USER_FAILED: {
      return {
        ...state,
        createUserFailed: true
      };
    }
    case CREATE_USER: {
      return {
        ...state,
        createUserFailed: false
      };
    }
    case LOGIN_USER: {
      return {
        ...state,
        createUserFailed: false
      };
    }
    default: {
      return state;
    }
  }
};
