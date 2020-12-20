import React from "react";
import { IconInfoOutline } from "./Icons";
import Tooltip from "./Tooltip";

const FormInput = ({ id, labelText, name, type, required, tooltipText }) => (
  <>
    <div className="flex justify-between items-center">
      <label className="block text-gray-600 text-sm font-medium mb-2" for={id}>
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
      className="bg-white text-gray-700 border border-gray-300 rounded-lg py-2 px-4 block w-full focus:border-gray-500 focus:outline-none focus:ring focus:ring-gray-300 transition-all ease-out duration-300"
      type={type}
      required={required ?? false}
    />
  </>
);
export default FormInput;
