import React from "react";
import "./theme.css";

const Option = () => {
  return (
    <div className="flex relative top-1 border--header__justify border h-8 bg-blue-transparent rounded-3xl space-x-6 mr-20 text-white">
      <div className="w-10 mr-auto text-center">...</div>
      <p className="border--header__option"></p>
      <div className="w-10  mr-auto text-center">{/* divide-x-8 */}x</div>
    </div>
  );
};

export default Option;
