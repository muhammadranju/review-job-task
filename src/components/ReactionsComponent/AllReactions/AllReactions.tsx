import { BiSolidLike } from "react-icons/bi";
import { BsEmojiSurprise } from "react-icons/bs";
import { FaRegHeart } from "react-icons/fa";
import ReactionCount from "../ReactionCount/ReactionCount";

type ReactionsType = {
  likes: number;
  comments: number;
  shares: number;
  views: number;
};

type HasReactionsType = {
  like: boolean;
  love: boolean;
  wow: boolean;
};

type AllReactionsType = {
  reactions: ReactionsType;
  hasReactions: HasReactionsType;
};

const AllReactions = ({ reactions, hasReactions }: AllReactionsType) => {
  return (
    <div className="flex items-center justify-between text-gray-500">
      <div className="flex gap-x-1 items-center text-gray-500 flex-1">
        <div className="flex -space-x-1 rtl:space-x-reverse">
          {hasReactions?.like && (
            <div className="w-6 h-6 rounded-full bg-blue-500 flex items-center justify-center">
              <BiSolidLike className="text-yellow-500" />
            </div>
          )}

          {hasReactions?.love && (
            <div className="w-6 h-6 rounded-full bg-red-500 flex items-center justify-center">
              <FaRegHeart className="text-black" />
            </div>
          )}

          {hasReactions?.wow && (
            <div className="w-6 h-6 rounded-full bg-yellow-500 flex items-center justify-center">
              <BsEmojiSurprise className="text-black" />
            </div>
          )}
        </div>
        {reactions?.likes}
      </div>
      <ReactionCount count={reactions?.comments} text="comments" />
      <ReactionCount count={reactions?.shares} text="shares" />
      <ReactionCount count={reactions?.views} text="views" />
    </div>
  );
};

export default AllReactions;
