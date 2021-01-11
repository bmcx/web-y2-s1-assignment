import React, { useState } from "react";

const ToggleSwitch = (props) => {
  const [checked, setChecked] = useState(props.initialValue);
  return (
    <div className="flex flex-row content-center">
      <p className="block text-sm pr-1 font-bold text-gray-600">{`${props.label}`}</p>
      <div
        className={`w-10 h-6 flex rounded-lg p-1 cursor-pointer ease-out duration-200  ${
          checked ? "bg-green-600" : "bg-gray-300"
        }`}
        onClick={() => {
          let c = !checked;
          setChecked(c);
          props.setValue(c);
        }}
      >
        <div
          className={`bg-white w-4 h-4 rounded-md shadow-md transform transition-all ease-out duration-200 ${
            checked ? "translate-x-4" : ""
          }`}
        ></div>
      </div>
    </div>
  );
};

export default ToggleSwitch;
