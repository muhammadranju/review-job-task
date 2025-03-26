const CardImage = ({ image, title }) => {
  return (
    <img
      className="rounded-t-lg h-60 w-full object-cover cursor-pointer"
      src={image}
      alt={title}
    />
  );
};

export default CardImage;
