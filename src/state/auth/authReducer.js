import { toast } from "react-toastify";
import actionTypes from "../actionTypes";

const initState = {
  authError: null,
  authModalVisible: false,
};

const auth = (state = initState, action) => {
  console.log(action);
  let msg = action?.err?.message ?? "There was an error!";
  switch (action.type) {
    case actionTypes.LOGIN_SUCCESS:
      return {
        ...state,
        authError: null,
        authModalVisible: false,
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
        authModalVisible: false,
      };
    case actionTypes.GOOGLE_LOGIN_ERROR:
      toast.error(msg);
      return {
        ...state,
        authError: null,
      };
    case actionTypes.SHOW_AUTH_MODAL:
      return {
        ...state,
        authModalVisible: true,
      };
    case actionTypes.HIDE_AUTH_MODAL:
      return {
        ...state,
        authModalVisible: false,
      };

    default:
      return state;
  }
};

export default auth;
