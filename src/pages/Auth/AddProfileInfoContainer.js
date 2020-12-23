import React, { useState } from "react";
import FormInput from "../../common/components/FormInput";
import LogoLong from "../../common/components/LogoLong";

const AddProfileInfoContainer = (props) => {
  const [image, setImage] = useState({ preview: "", raw: null });
  const [email, setEmail] = useState("");
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [nic, setNic] = useState("");
  const [phone, setPhone] = useState("");

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

  return (
    <div
      style={{ backdropFilter: "blur(5px)" }}
      className="w-screen h-screen absolute z-20 flex flex-col items-center justify-center"
    >
      <div className="bg-gray-50 rounded-lg w-96 shadow-lg p-4 z-20">
        <LogoLong />

        <p className="text-xl text-gray-600 text-center">Welcome Back!</p>
        <div className="mt-4 flex items-center justify-between">
          <span className="border-b w-1/5 lg:w-1/4"></span>

          <span className="text-xs text-center text-gray-500 uppercase">
            Confirm your profile info
          </span>

          <span className="border-b w-1/5 lg:w-1/4"></span>
        </div>
        <form>
          <div className="mt-4 flex space-x-2">
            <div className="w-1/2">
              <div className="flex flex-row items-center justify-center">
                <label htmlFor="photo">
                  <div className="w-32 h-32 bg-gray-300 shadow-md overflow-hidden rounded-full flex items-center justify-center">
                    {image.preview ? (
                      <img
                        src={image.preview}
                        alt="dummy"
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
            <div className="w-1/2">
              <FormInput
                id="firstName"
                labelText="First Name"
                name="firstName"
                type="text"
                required={true}
                onChange={(e) => {
                  setFirstName(e.target.value);
                }}
                defaultValue={firstName}
              />
              <FormInput
                id="lastName"
                labelText="Last Name"
                name="lastName"
                type="text"
                required={true}
                onChange={(e) => {
                  setLastName(e.target.value);
                }}
                defaultValue={lastName}
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
              onChange={(e) => {
                setEmail(e.target.value);
              }}
              defaultValue={email}
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
                defaultValue={nic}
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
                defaultValue={[phone]}
              />
            </div>
          </div>
          <div className="mt-8">
            <button className="bg-gray-700 text-white uppercase font-bold py-2 px-4 w-full rounded-lg hover:bg-gray-600 focus:outline-none focus:bg-gray-600 ease-out duration-300">
              Save
            </button>
          </div>
        </form>
      </div>
      <div className="w-screen h-screen absolute bg-black opacity-40"></div>
    </div>
  );
};

export default AddProfileInfoContainer;
