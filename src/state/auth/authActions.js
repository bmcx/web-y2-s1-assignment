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
      var res = await firebase.auth().signInWithPopup(provider);
      dispatch({ type: actionTypes.GOOGLE_LOGIN_SUCCESS, res });
    } catch (err) {
      dispatch({ type: actionTypes.GOOGLE_LOGIN_ERROR, err });
    }
  };
};

export const showAuthModal = () => {
  return (dispatch) => {
    dispatch({ type: actionTypes.SHOW_AUTH_MODAL });
  };
};
export const hideAuthModal = () => {
  return (dispatch) => {
    dispatch({ type: actionTypes.HIDE_AUTH_MODAL });
  };
};
export const showHarvestModal = () => {
  return (dispatch) => {
    dispatch({ type: actionTypes.SHOW_HARVEST_MODAL });
  };
};
export const hideHarvestModal = () => {
  return (dispatch) => {
    dispatch({ type: actionTypes.HIDE_HARVEST_MODAL });
  };
};
export const resetAuthError = () => {
  return (dispatch) => {
    dispatch({ type: actionTypes.RESET_AUTH_ERROR });
  };
};

export const signOutAction = () => {
  return async (dispatch, getState, { getFirebase }) => {
    const firebase = getFirebase();
    try {
      var res = await firebase.auth().signOut();
      dispatch({ type: actionTypes.SIGN_OUT_SUCCESS, res });
    } catch (err) {
      dispatch({ type: actionTypes.SIGN_OUT_ERROR, err });
    }
  };
};
export const signUpAction = (data) => {
  return async (dispatch, getState, { getFirebase }) => {
    const firebase = getFirebase();
    try {
      var res = await firebase
        .auth()
        .createUserWithEmailAndPassword(data.email, data.password);
      // await res.updateProfile({
      //   displayName: `${data.firstName} ${data.lastName}`,
      // });
      localStorage.setItem("firstName", data.firstName);
      localStorage.setItem("lastName", data.lastName);
      localStorage.setItem("nic", data.nic);
      localStorage.setItem("phone", data.phone);
      localStorage.setItem("email", data.email);
      localStorage.setItem("uid", res.uid);
      dispatch({ type: actionTypes.SIGN_UP_SUCCESS, res });
    } catch (err) {
      dispatch({ type: actionTypes.SIGN_UP_ERROR, err });
    }
  };
};

export const completeProfileAction = (data) => {
  return async (dispatch, getState, { getFirebase, getFirestore }) => {
    const firebase = getFirebase();
    const firestore = getFirestore();
    let state = getState();
    let userId = state?.firebase?.auth?.uid;
    var storageRef = firebase.storage().ref();
    var photoRef = storageRef.child(`/users/${userId}/profilePicture.png`);
    await photoRef.put(data.photo);
    let photoUrl = await photoRef.getDownloadURL();
    try {
      await firestore.collection("users").doc(userId).set({
        firstName: data.firstName,
        lastName: data.lastName,
        nic: data.nic,
        phone: data.phone,
        photo: photoUrl,
        profileCompleted: true,
      });

      dispatch({ type: actionTypes.PROFILE_COMPLETE_SUCCESS, res: "" });
    } catch (err) {
      dispatch({ type: actionTypes.PROFILE_COMPLETE_ERROR, err });
    }
  };
};

export const sendMessage = (data) => {
  return async (dispatch, getState, { getFirebase, getFirestore }) => {
    const firebase = getFirebase();
    const firestore = getFirestore();
    let state = getState();
    let userId = state?.firebase?.auth?.uid;

    try {
      await firestore
        .collection("harvests")
        .doc(data.harvestId)
        .collection("messages")
        .add({
          body: data.body,
          created_at: new Date(),
          sentByOwner: data.sentByOwner,
          user: firestore.doc("/users/" + userId),
        });

      dispatch({ type: actionTypes.SEND_MESSAGE_SUCCESS, res: "" });
    } catch (err) {
      dispatch({ type: actionTypes.SEND_MESSAGE_ERROR, err });
    }
  };
};
