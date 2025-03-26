type ReactionCountType = {
  count: number;
  text: string;
};

const ReactionCount = ({ count, text }: ReactionCountType) => {
  return (
    <div className="text-gray-500">
      <span className="ml-2">
        {count} {text}
      </span>
    </div>
  );
};

export default ReactionCount;
