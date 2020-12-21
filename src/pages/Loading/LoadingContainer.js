import React from "react";
import { IconSpinner } from "../../common/components/Icons";

const LoadingContainer = () => {
  return (
    <div className="w-screen h-screen bg-gray-50 flex flex-col justify-center items-center">
      <div className="animate-pulse w-10 h-10 text-gray-500">
        <IconSpinner />
      </div>
      <div className="text-md font-lato animate-pulse text-gray-900">
        Loading...
      </div>
    </div>
  );
};

export default LoadingContainer;
