import React, { useState } from "react";

const FormInputPassword = ({
  id,
  labelText,
  name,
  required,
  onChange,
  validationError,
  disabled,
  minlength=6
}) => {
  const [type, setType] = useState("password");
  return (
    <>
      <div className="flex justify-between items-center">
        <label
          className="block text-gray-600 text-sm font-medium mb-2"
          htmlFor={id}
        >
          {labelText}
        </label>
        <button
          type="button"
          className="text-xs text-gray-500 hover:underline focus:outline-none cursor-pointer"
          onClick={() =>
            type === "password" ? setType("text") : setType("password")
          }
        >
          {type === "password" ? "Show" : "Hide"}&nbsp;password
        </button>
      </div>

      <input
        id={id}
        name={name}
        className={` ${
          validationError
            ? "ring-red-400 ring-2 border-red-500"
            : "focus:border-gray-500 focus:ring-gray-300 focus:ring "
        } bg-white text-gray-700 border border-gray-300 focus:outline-none rounded-lg py-2 px-4 block w-full transition-all ease-out duration-300`}
        type={type}
        onChange={onChange}
        disabled={disabled}
        required={required ?? false}
        minlength={minlength}
      />
    </>
  );
};
export default FormInputPassword;
