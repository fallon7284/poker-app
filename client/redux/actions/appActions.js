export const SET_SOCKET = "SET_SOCKET";
export const CREATE_USER_FAILED = "CREATE_USER_FAILED";

export const createUserFailed = user => ({ type: CREATE_USER_FAILED, user });
export const setSocket = socket => ({ type: SET_SOCKET, socket });
