import React from "react";
import "./theme.css";

const Option = () => {
  return (
    <div className="flex relative left-20 md:left-0 top-1 border--header__justify border h-12 bg-blue-transparent rounded-3xl space-x-4 mr-20 text-white">
      <div className="w-12 mb-6 text-2xl text-center">...</div>
      <p className="border--header__option"></p>
      <div className="w-12 mr-4 text-3xl font-extralight text-center">
        {/* divide-x-8 */}x
      </div>
    </div>
  );
};

export default Option;
