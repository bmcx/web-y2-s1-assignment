import { toast } from "react-toastify";
import actionTypes from "../actionTypes";

const initState = {
  authError: null,
};

const auth = (state = initState, action) => {
  let msg = action?.err?.message ?? "There was an error!";
  switch (action.type) {
    case actionTypes.LOGIN_SUCCESS:
      return {
        ...state,
        authError: null,
      };
    case actionTypes.LOGIN_ERROR:
      toast.error(msg);
      return {
        ...state,
        authError: msg,
      };
    case actionTypes.GOOGLE_LOGIN_SUCCESS:
      return {
        ...state,
        authError: null,
      };
    case actionTypes.GOOGLE_LOGIN_ERROR:
      toast.error(msg);
      return {
        ...state,
        authError: null,
      };

    default:
      return state;
  }
};

export default auth;
