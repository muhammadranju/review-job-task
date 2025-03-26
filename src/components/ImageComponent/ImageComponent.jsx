const CardImage = ({ image }) => {
  return (
    <img
      className="rounded-t-lg h-60 w-full object-cover"
      src={image}
      alt="Card Image"
    />
  );
};

export default CardImage;
