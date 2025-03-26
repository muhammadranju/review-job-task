const Avatar = ({ avatar, name, timeAgo }) => {
  return (
    <div className="flex items-center mb-3 gap-x-2">
      <img src={avatar} className="w-12 h-12 rounded-full" alt="User Avatar" />
      <div className="flex flex-col text-gray-600">
        <span className="font-semibold">{name}</span>
        <span className="text-sm">{timeAgo}</span>
      </div>
    </div>
  );
};

export default Avatar;
