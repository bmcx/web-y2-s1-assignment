import React, { useState } from "react";
import SignInForm from "./component/SignInComponent";
import SignUpForm from "./component/SignUpComponent";

const AuthContainer = (props) => {
  const [, setChecked] = useState(false);
  return (
    <div
      style={{ backdropFilter: "blur(5px)" }}
      className="w-screen h-screen absolute z-10 flex items-center justify-center"
    >
      <SignUpForm />
      <div className="w-screen h-screen absolute bg-black opacity-40"></div>
    </div>
  );
};
export default AuthContainer;
