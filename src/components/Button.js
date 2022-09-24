import React from "react";

const Button = ({ classN, bg, children }) => {
  return (
    <button
      className={`${classN} pc:text-tl ip11pro:text-rtx font-bold shadow-md cursor-pointer z-[9999]`}
    >
      {children}
    </button>
  );
};

export default Button;
