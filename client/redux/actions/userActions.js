export const LOGIN_USER = "LOGIN_USER";
export const CREATE_USER = "CREATE_USER";

export const loginUser = user => ({ type: LOGIN_USER, user });

export const createUser = user => ({ type: CREATE_USER, user });
