import React from "react";

const Reaction = ({ text = "", icon }) => {
  return (
    <span
      className="flex items-center gap-x-2 text-lg cursor-pointer"
      title={text}
    >
      {icon}
      {text}
    </span>
  );
};

export default Reaction;
