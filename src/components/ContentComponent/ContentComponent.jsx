import StarRating from "../../lib/Rating/Rating";

const CardContent = ({ title, description, author, tags, rating, logo }) => {
  return (
    <div className="my-3">
      <div className="flex items-center gap-x-2">
        <img
          src={logo}
          className="w-20 border rounded-lg"
          alt="Logo"
          loading="lazy"
        />
        <div className="flex flex-col">
          <h4 className="text-xl font-bold tracking-tight text-gray-900">
            {title}
          </h4>
          <div className="flex items-center gap-x-1 text-sm text-gray-600">
            <span>{author}</span>.
            {tags?.map((tag, index) => (
              <span key={index}>
                {tag}
                {index < tags.length - 1 && ","}
              </span>
            ))}
          </div>
        </div>
      </div>

      {/* Rating Component */}
      <div className="flex items-center gap-x-2 mt-2">
        <span className="text-gray-600"></span>
        <StarRating rating={rating} />
        <span className="text-gray-600">({rating})</span>
      </div>

      <p className="mb-3 font-normal text-gray-700">{description}</p>
    </div>
  );
};

export default CardContent;
