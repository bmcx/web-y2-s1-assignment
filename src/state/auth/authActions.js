import actionTypes from "../actionTypes";

export const signInAction = (data) => {
  return async (dispatch, getState, { getFirebase }) => {
    const firebase = getFirebase();
    try {
      var res = await firebase
        .auth()
        .signInWithEmailAndPassword(data.email, data.password);
      dispatch({ type: actionTypes.LOGIN_SUCCESS, res });
    } catch (err) {
      dispatch({ type: actionTypes.LOGIN_ERROR, err });
    }
  };
};
export const signInWithGoogleAction = () => {
  return async (dispatch, getState, { getFirebase }) => {
    const firebase = getFirebase();
    var provider = new firebase.auth.GoogleAuthProvider();
    try {
      var res = await firebase
        .auth()
        .signInWithPopup(provider);
      dispatch({ type: actionTypes.GOOGLE_LOGIN_SUCCESS, res });
    } catch (err) {
      dispatch({ type: actionTypes.GOOGLE_LOGIN_ERROR, err });
    }
  };
};
