import { FaRegBookmark, FaRegComment, FaRegHeart } from "react-icons/fa";
import { IoShareSocialOutline } from "react-icons/io5";
import AllReactions from "./AllReactions/AllReactions";
import Reaction from "./Reaction/Reaction";

const Reactions = ({ reactions, isTextVisible, hasReactions }) => {
  return (
    <div className="border border-gray-200 rounded-lg px-3 py-2 flex items-center justify-between gap-x-2">
      <div className="w-full">
        <AllReactions reactions={reactions} hasReactions={hasReactions} />
        <hr className="border-gray-200 my-3" />
        <div className="flex justify-between items-center text-gray-700 gap-x-8 px-8">
          <Reaction text={isTextVisible ? "Like" : ""} icon={<FaRegHeart />} />

          <Reaction
            text={isTextVisible ? "Comment" : ""}
            icon={<FaRegComment />}
          />
          <Reaction
            text={isTextVisible ? "Share" : ""}
            icon={<IoShareSocialOutline />}
          />
          <Reaction
            text={isTextVisible ? "Pin" : ""}
            icon={<FaRegBookmark />}
          />
        </div>
      </div>
    </div>
  );
};

export default Reactions;
