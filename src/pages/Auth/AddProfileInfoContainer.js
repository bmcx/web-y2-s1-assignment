import React, { useEffect, useState } from "react";
import { connect } from "react-redux";
import FormInput from "../../common/components/FormInput";
import { IconSpinner } from "../../common/components/Icons";
import LogoLong from "../../common/components/LogoLong";
import { completeProfileAction } from "../../state/auth/authActions";

const AddProfileInfoContainer = ({ auth, authError, completeProfile }) => {
  const [loading, setLoading] = useState(false);
  const [image, setImage] = useState({ preview: "", raw: null });
  const [email, setEmail] = useState(auth.email);
  const [firstName, setFirstName] = useState(
    localStorage.getItem("firstName") ?? ""
  );
  const [lastName, setLastName] = useState(
    localStorage.getItem("lastName") ?? ""
  );
  const [nic, setNic] = useState(localStorage.getItem("nic") ?? "");
  const [phone, setPhone] = useState(localStorage.getItem("phone") ?? "");
  const [inputError, setInputError] = useState({
    firstName: false,
    lastName: false,
    nic: false,
    phone: false,
    photo: false,
  });

  useEffect(() => {
    if (authError) {
      setLoading(false);
    }
  }, [authError]);

  const handleFileChange = async (e) => {
    if (e.target.files && e.target.files[0]) {
      let src = await new Promise((resolve) => {
        const reader = new FileReader();
        reader.readAsDataURL(e.target.files[0]);
        reader.onload = () => resolve(reader.result);
      });
      setImage({
        preview: src,
        raw: e.target.files[0],
      });
    }
  };

  const validateInput = () => {
    let check = false;
    let _inputError = inputError;
    if (!image.raw) {
      _inputError = { ..._inputError, photo: true };
      check = true;
    } else {
      _inputError = { ..._inputError, photo: false };
    }
    if (firstName.trim().length < 1) {
      _inputError = { ..._inputError, firstName: true };
      check = true;
    } else {
      _inputError = { ..._inputError, firstName: false };
    }
    if (lastName.trim().length < 1) {
      _inputError = { ..._inputError, lastName: true };
      check = true;
    } else {
      _inputError = { ..._inputError, lastName: false };
    }
    if (nic.trim().length < 1) {
      _inputError = { ..._inputError, nic: true };
      check = true;
    } else {
      _inputError = { ..._inputError, nic: false };
    }
    //TODO: phone validation
    if (phone.trim().length < 1) {
      _inputError = { ..._inputError, phone: true };
      check = true;
    } else {
      _inputError = { ..._inputError, phone: false };
    }
    setInputError(_inputError);
    return check;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const validation = validateInput();
    console.log(inputError);
    if (validation) return;

    setLoading(true);
    // completeProfile({
    //   firstName,
    //   lastName,
    //   nic,
    //   phone,
    //   email,
    // });
  };

  return (
    <div
      style={{ backdropFilter: "blur(5px)" }}
      className="w-screen h-screen absolute z-20 flex flex-col items-center justify-center"
    >
      <div
        className="bg-gray-50 rounded-lg shadow-lg p-4 z-20"
        style={{ width: "30rem" }}
      >
        <p className="text-xl text-gray-800 text-center">Welcome Back!</p>
        <div className="mt-4 flex items-center justify-between">
          <span className="border-b w-1/5 lg:w-1/4"></span>

          <span className="text-xs text-center text-gray-500 uppercase">
            Complete your profile
          </span>

          <span className="border-b w-1/5 lg:w-1/4"></span>
        </div>
        <form onSubmit={handleSubmit}>
          <div className="mt-4 flex space-x-2">
            <div className="w-1/3">
              <div className="flex flex-row items-center justify-center">
                <label htmlFor="photo">
                  <div className="w-32 h-32 bg-gray-300 shadow-md overflow-hidden rounded-full flex items-center justify-center">
                    {image.preview ? (
                      <img
                        src={image.preview}
                        alt="profile"
                        className="min-h-full w-max"
                      />
                    ) : (
                      <>
                        <p className="text-sm text-center">
                          Select a profile photo
                        </p>
                      </>
                    )}
                  </div>
                </label>
                <input
                  hidden={true}
                  id="photo"
                  type="file"
                  onChange={handleFileChange}
                  accept="image/png"
                />
              </div>
            </div>
            <div className="w-2/3">
              <FormInput
                id="firstName"
                labelText="First Name"
                name="firstName"
                type="text"
                required={true}
                onChange={(e) => {
                  validateInput();
                  setFirstName(e.target.value);
                }}
                defaultValue={firstName}
                validationError={inputError.firstName}
              />
              <FormInput
                id="lastName"
                labelText="Last Name"
                name="lastName"
                type="text"
                required={true}
                onChange={(e) => {
                  validateInput();
                  setLastName(e.target.value);
                }}
                defaultValue={lastName}
                validationError={inputError.lastName}
              />
            </div>
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
                  validateInput();
                  setNic(e.target.value);
                }}
                defaultValue={nic}
                validationError={inputError.nic}
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
                  validateInput();
                  setPhone(e.target.value);
                }}
                defaultValue={[phone]}
                validationError={inputError.phone}
              />
            </div>
          </div>
          <div className="mt-8">
            <button
              // disabled={loading}
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
      </div>
      <div className="w-screen h-screen absolute bg-black opacity-40"></div>
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
    completeProfile: (data) => dispatch(completeProfileAction(data)),
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(AddProfileInfoContainer);
