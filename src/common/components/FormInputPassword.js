import React, { useState } from "react";

const FormInputPassword = ({ id, labelText, name, required }) => {
  const [type, setType] = useState("password");
  return (
    <>
      <div className="flex justify-between items-center">
        <label
          className="block text-gray-600 text-sm font-medium mb-2"
          for={id}
        >
          {labelText}
        </label>
        <div
          className="text-xs text-gray-500 hover:underline focus:outline-none cursor-pointer"
          onClick={() =>
            type === "password" ? setType("text") : setType("password")
          }
        >
          {type === "password" ?"Show":"Hide"}&nbsp;password
        </div>
      </div>

      <input
        id={id}
        name={name}
        className=" ring ring-red-300 bg-white text-gray-700 border border-gray-300 rounded-lg py-2 px-4 block w-full focus:border-gray-500 focus:outline-none focus:ring focus:ring-gray-300 transition-all ease-out duration-300"
        type={type}
        required={required ?? false}
      />
    </>
  );
};
export default FormInputPassword;
