import { useState, useEffect, useRef } from "react";
import Avatar from "../AvatarComponent/AvatarComponent";
import CardImage from "../ImageComponent/ImageComponent";
import CardContent from "../ContentComponent/ContentComponent";
import Reactions from "../ReactionsComponent/ReactionsComponent";

const Card = ({ data }) => {
  const [isTextVisible, setIsTextVisible] = useState(true);
  const cardRef = useRef(null);

  useEffect(() => {
    const handleResizeCard = () => {
      if (cardRef.current) {
        const cardWidth = cardRef.current.offsetWidth; // get the width of the card
        const screenWidth = window.innerWidth; // get the width of the screen

        if (cardWidth > 495 || cardWidth > screenWidth * 0.9) {
          setIsTextVisible(true);
        } else {
          setIsTextVisible(false);
        }
      }
    };

    handleResizeCard(); // call the handleResizeCard function
    window.addEventListener("resize", handleResizeCard); // add an event listener to the window

    return () => window.removeEventListener("resize", handleResizeCard); // remove the event listener
  }, []);

  return (
    <div ref={cardRef}>
      {/* Avatar Section Component */}
      <Avatar
        avatar={data?.user?.avatar}
        name={data?.user?.name}
        timeAgo={data?.user?.timeAgo}
      />

      {/* Card Image Component */}
      <CardImage image={data?.image} />

      {/* Card Content Component */}
      <CardContent
        title={data?.content?.title}
        description={data?.content?.description}
        author={data?.content?.author}
        tags={data?.content?.tags}
        rating={data?.content?.rating}
      />

      {/* Reactions Section Component */}
      <Reactions reactions={data?.reactions} isTextVisible={isTextVisible} />
    </div>
  );
};

export default Card;
