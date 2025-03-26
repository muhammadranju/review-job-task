import { FaStar, FaRegStar, FaStarHalfAlt } from "react-icons/fa";

type StarRatingProps = {
  rating: number;
  maxStars?: number;
};

const StarRating = ({ rating, maxStars = 5 }: StarRatingProps) => {
  const fullStars = Math.floor(rating);
  const halfStar = rating % 1 !== 0;
  const emptyStars = maxStars - fullStars - (halfStar ? 1 : 0);

  return (
    <div className="flex items-center">
      {/* Full Stars */}
      {Array.from({ length: fullStars }).map((_, index) => (
        <FaStar key={`full-${index}`} className="text-yellow-400 text-3xl" />
      ))}

      {/* Half Star */}
      {halfStar && <FaStarHalfAlt className="text-yellow-400 text-3xl" />}

      {/* Empty Stars */}
      {Array.from({ length: emptyStars }).map((_, index) => (
        <FaRegStar key={`empty-${index}`} className="text-gray-300 text-3xl" />
      ))}
    </div>
  );
};

export default StarRating;
