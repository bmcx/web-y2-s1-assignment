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
