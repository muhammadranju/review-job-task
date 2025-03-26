import { FaStar, FaRegStar, FaStarHalfAlt } from "react-icons/fa";

const StarRating = ({ rating, maxStars = 5 }) => {
  const fullStars = Math.floor(rating);
  const halfStar = rating % 1 !== 0;
  const emptyStars = maxStars - fullStars - (halfStar ? 1 : 0);

  return (
    <div className="flex items-center">
      {/* Full Stars */}
      {Array(fullStars)
        .fill()
        .map((_, index) => (
          <FaStar key={`full-${index}`} className="text-yellow-400 text-2xl" />
        ))}

      {/* Half Star */}
      {halfStar && <FaStarHalfAlt className="text-yellow-400 text-2xl" />}

      {/* Empty Stars */}
      {Array(emptyStars)
        .fill()
        .map((_, index) => (
          <FaRegStar
            key={`empty-${index}`}
            className="text-gray-300 text-2xl"
          />
        ))}
    </div>
  );
};

export default StarRating;
