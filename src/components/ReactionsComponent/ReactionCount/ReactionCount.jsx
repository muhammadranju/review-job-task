import React from "react";

const ReactionCount = ({ count, text }) => {
  return (
    <div className="text-gray-500">
      <span className="ml-2">
        {count} {text}
      </span>
    </div>
  );
};

export default ReactionCount;
