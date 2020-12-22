import React, { useState } from "react";
import { connect } from "react-redux";
import { animated, useTransition } from "react-spring";
import { hideAuthModal } from "../../state/auth/authActions";
import SignInForm from "./component/SignInComponent";
import SignUpForm from "./component/SignUpComponent";


const AuthContainer = (props) => {
  const [page, setPage] = useState("SignIn");
  const authFormTransitions = useTransition(page, null, {
    from: {
      opacity: 0,
      transform: "translateY(-10%)",
    },
    enter: {
      opacity: 1,
      transform: "translateY(0%)",
    },
    leave: {
      opacity: 0,
      transform: "translateY(10%)",
    },
  });

  return (
    <div className="w-screen h-screen absolute z-20 flex flex-col items-center justify-center">
      {authFormTransitions.map(
        ({ item, key, props: style }) =>
          item && (
            <animated.div
              key={key}
              style={style}
              className="z-20 absolute"
            >
              {item === "SignIn" ? <SignInForm setPage={setPage} /> : <SignUpForm setPage={setPage} /> }
            </animated.div>
          )
      )}

      <div className="z-20" onClick={() => setPage("SignIn")}>sign in</div>
      <div className="z-20" onClick={() => setPage("SignUp")}>sign up</div>
      <div
        className="w-screen h-screen absolute bg-black opacity-40"
        onClick={() => props.hideAuthModal()}
      ></div>
    </div>
  );
};

const mapDispatchToProps = (dispatch) => {
  return {
    hideAuthModal: () => dispatch(hideAuthModal()),
  };
};

export default connect(null, mapDispatchToProps)(AuthContainer);
