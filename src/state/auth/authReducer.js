import { toast } from "react-toastify";
import actionTypes from "../actionTypes";

const initState = {
  authError: null,
  authModalVisible: false,
  harvestModalVisible: false,
};

const auth = (state = initState, action) => {
  // console.log(action);
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
    case actionTypes.SIGN_UP_SUCCESS:
      window.location.reload();
      return {
        ...state,
        authError: null,
        authModalVisible: false,
      };
    case actionTypes.SIGN_UP_ERROR:
      toast.error(msg);
      return {
        ...state,
        authError: msg,
      };
    case actionTypes.SIGN_OUT_SUCCESS:
      toast.success("Signed out successfully");
      return {
        ...state,
        authError: null,
        authModalVisible: false,
      };
    case actionTypes.SIGN_OUT_ERROR:
      toast.error(msg);
      return {
        ...state,
        authError: null,
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
        authError: null,
        authModalVisible: true,
      };
    case actionTypes.HIDE_AUTH_MODAL:
      return {
        ...state,
        authError: null,
        authModalVisible: false,
      };
    case actionTypes.SHOW_HARVEST_MODAL:
      return {
        ...state,
        harvestModalVisible: true,
      };
    case actionTypes.HIDE_HARVEST_MODAL:
      return {
        ...state,
        harvestModalVisible: false,
      };
    case actionTypes.RESET_AUTH_ERROR:
      return {
        ...state,
        authError: null,
      };
    case actionTypes.PROFILE_COMPLETE_SUCCESS:
      return {
        ...state,
        authError: null,
      };
    case actionTypes.PROFILE_COMPLETE_ERROR:
      return {
        ...state,
        authError: null,
      };

    default:
      return state;
  }
};

export default auth;
