import actionTypes from "../actionTypes";

const initState = {
  authError: null,
};

const auth = (state = initState, action) => {
  console.log(action);
  switch (action.type) {
    case actionTypes.LOGIN_SUCCESS:
      return {
        ...state,
        authError: null,
      };
    case actionTypes.LOGIN_ERROR:
      return {
        ...state,
        authError: action?.err?.message ?? "There was an error!",
      };

    default:
      return state;
  }
};

export default auth;
