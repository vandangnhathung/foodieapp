import React, { Children } from "react";

const Feature = ({ children, classN }) => {
  return (
    <div
      className={`${classN}  pc:text-left ip11pro:text-center
  flex pc:flex-row items-center`}
    >
      {children}
    </div>
  );
};

export default Feature;
