import React from "react";

const Button = ({ text, colorStyle }) => {
  return (
    <button className={`px-4 py-2  ${colorStyle} rounded-xl cursor-pointer`}>
      {text}
    </button>
  );
};

export default Button;
