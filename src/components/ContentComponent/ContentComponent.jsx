import StarRating from "../../lib/Rating/Rating";

const CardContent = ({
  title,
  description,
  author,
  tags,
  rating,
  miniImage,
}) => {
  return (
    <div className="my-2">
      <div className="flex items-center gap-x-2">
        <img
          src={miniImage}
          className="w-16 h-10 object-cover  "
          alt={title}
          loading="lazy"
        />
        <div className="flex flex-col">
          <h4 className="text-xl font-bold tracking-tight text-gray-900 cursor-pointer">
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
      <div className="flex items-center mt-2">
        <span className="text-gray-600"></span>
        <StarRating rating={rating} />
        <span className="text-gray-600 ml-2 font-semibold">{rating}</span>
      </div>

      <p className="mb-3 font-normal text-gray-600">
        {description.length > 65
          ? description.slice(0, 65) + "..."
          : description}
      </p>
    </div>
  );
};

export default CardContent;
