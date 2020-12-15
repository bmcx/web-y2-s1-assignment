import React, { useState } from "react";

const ToggleSwitch = ({ label }) => {
  const [checked, setChecked] = useState(false);
  return (
    <div className="flex flex-row content-center">
      <p className="block text-sm pr-1 font-bold text-gray-600">{`${label}`}</p>
      <div
        className={`w-10 h-6 flex rounded-full p-1 cursor-pointer ease-out duration-200  ${
          checked ? "bg-green-600" : "bg-gray-300"
        }`}
        onClick={() => {
          setChecked(!checked);
        }}
      >
        <div
          className={`bg-white w-4 h-4 rounded-full shadow-md transform transition-all ease-out duration-200 ${
            checked ? "translate-x-4" : ""
          }`}
        ></div>
      </div>
    </div>
  );
};

export default ToggleSwitch;
