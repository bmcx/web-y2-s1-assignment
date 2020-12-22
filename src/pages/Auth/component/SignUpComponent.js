import React, { useState, useEffect } from "react";
import { connect } from "react-redux";
import FormInput from "../../../common/components/FormInput";
import FormInputPassword from "../../../common/components/FormInputPassword";
import { IconSpinner } from "../../../common/components/Icons";
import LogoLong from "../../../common/components/LogoLong";
import SignInWithGoogleButton from "../../../common/components/SignInWithGoogleButton";
import {
  hideAuthModal,
  resetAuthError,
  signInWithGoogleAction,
  signUpAction,
} from "../../../state/auth/authActions";

const SignUpForm = (props) => {
  const [loading, setLoading] = useState(false);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [nic, setNic] = useState("");
  const [phone, setPhone] = useState("");

  const { authError } = props;

  useEffect(() => {
    if (authError) {
      setLoading(false);
    }
  }, [authError]);

  const handleSubmit = (e) => {
    e.preventDefault();
    setLoading(true);
    props.signUp({
      firstName,
      lastName,
      nic,
      phone,
      email,
      password,
    });
  };
  return (
    <div className="bg-gray-50 rounded-lg w-96 shadow-lg p-4 z-20">
      <button
        onClick={() => props.hideAuthModal()}
        className="absolute bg-gray-100 w-8 h-8 top-0 right-0 rounded-lg flex items-center hover:shadow-md justify-center transition-all ease-out duration-400 focus:outline-none"
      >
        🗙
      </button>
      <LogoLong />
      <p className="text-xl text-gray-600 text-center">Welcome!</p>
      <SignInWithGoogleButton onClick={() => props.signInWithGoogle()} />
      <div className="mt-4 flex items-center justify-between">
        <span className="border-b w-1/5 lg:w-1/4"></span>

        <span className="text-xs text-center text-gray-500 uppercase">
          or sign up with email
        </span>

        <span className="border-b w-1/5 lg:w-1/4"></span>
      </div>
      <form onSubmit={handleSubmit}>
        <div className="mt-4 flex space-x-2">
          <div className="w-1/2">
            <FormInput
              id="firstName"
              labelText="First Name"
              name="firstName"
              type="text"
              required={true}
              disabled={loading}
              onChange={(e) => {
                setFirstName(e.target.value);
              }}
              autoFocus={true}
            />
          </div>
          <div className="w-1/2">
            <FormInput
              id="lastName"
              labelText="Last Name"
              name="lastName"
              type="text"
              required={true}
              disabled={loading}
              onChange={(e) => {
                setLastName(e.target.value);
              }}
            />
          </div>
        </div>
        <div className="mt-4">
          <FormInput
            id="email"
            labelText="Email Address"
            name="email"
            type="email"
            required={true}
            disabled={loading}
            onChange={(e) => {
              setEmail(e.target.value);
            }}
            validationError={authError ? true : false}
          />
        </div>
        <div className="mt-4">
          <FormInputPassword
            id="password"
            labelText="Password"
            name="password"
            required={true}
            disabled={loading}
            onChange={(e) => {
              setPassword(e.target.value);
            }}
            validationError={authError ? true : false}
          />
        </div>
        <div className="mt-4 flex space-x-2">
          <div className="w-1/2">
            <FormInput
              id="nic"
              labelText="NIC Number"
              name="nic"
              type="text"
              required={true}
              tooltipText="NIC will be used to only confirm your identity"
              onChange={(e) => {
                setNic(e.target.value);
              }}
              minLength={10}
              disabled={loading}
              maxLength={13}
            />
          </div>
          <div className="w-1/2">
            <FormInput
              id="phone"
              labelText="Phone"
              name="phone"
              type="text"
              required={true}
              tooltipText="Phone will be shared with keels staff"
              onChange={(e) => {
                setPhone(e.target.value);
              }}
              minLength={10}
              disabled={loading}
              maxLength={10}
            />
          </div>
        </div>
        <div className="mt-8">
          <button
            disabled={loading}
            type="submit"
            className="bg-gray-700 text-white uppercase font-bold py-2 px-4 w-full rounded-lg hover:bg-gray-600 focus:outline-none focus:bg-gray-600 ease-out duration-300"
          >
            {loading ? (
              <div className="w-6 h-6 mx-auto">
                <IconSpinner colorClass="text-gray-300" />
              </div>
            ) : (
              "Sign in"
            )}
          </button>
        </div>
      </form>
      <div className="mt-4 flex items-center justify-between">
        <span className="border-b w-1/5 md:w-1/4"></span>

        <button
          onClick={() => {
            props.resetAuthError();
            props.setPage("SignIn");
          }}
          className="text-xs text-gray-500 uppercase hover:underline focus:outline-none"
        >
          or sign in
        </button>

        <span className="border-b w-1/5 md:w-1/4"></span>
      </div>
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    authError: state.auth.authError,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    signUp: (data) => dispatch(signUpAction(data)),
    signInWithGoogle: () => dispatch(signInWithGoogleAction()),
    hideAuthModal: () => dispatch(hideAuthModal()),
    resetAuthError: () => dispatch(resetAuthError()),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(SignUpForm);
