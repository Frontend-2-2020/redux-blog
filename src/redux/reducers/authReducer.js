const initialState = false;

function authReducer(state = initialState, action) {
  switch (action.type) {
    case "LOGIN":
      return true;
    case "LOGOUT":
      return false;
    default:
      return state;
  }
}

export default authReducer;
