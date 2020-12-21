import React from "react";
import { IconInfoOutline } from "./Icons";
import Tooltip from "./Tooltip";

const FormInput = ({
  id,
  labelText,
  name,
  type,
  required = false,
  tooltipText,
  onChange,
  validationError = false,
  disabled = false,
  autoFocus = false,
}) => (
  <>
    <div className="flex justify-between items-center">
      <label
        className="block text-gray-600 text-sm font-medium mb-2"
        htmlFor={id}
      >
        {labelText}
      </label>
      <div className="mb-2 text-xs text-gray-500 hover:text-gray-800 focus:outline-none cursor-pointer">
        {tooltipText ? (
          <Tooltip tooltipText={tooltipText}>
            <div className="w-4 h-4">
              <IconInfoOutline strokeWidth={2} />
            </div>
          </Tooltip>
        ) : null}
      </div>
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
      autoFocus={autoFocus}
      required={required}
    />
  </>
);
export default FormInput;
