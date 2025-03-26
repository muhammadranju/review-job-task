import { JSX } from "react";

type ReactionType = {
  text: string;
  icon: JSX.Element;
};

const Reaction = ({ text = "", icon }: ReactionType) => {
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
