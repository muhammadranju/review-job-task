import { useEffect, useRef, useState } from "react";
import Avatar from "../AvatarComponent/AvatarComponent";
import CardContent from "../ContentComponent/ContentComponent";
import CardImage from "../ImageComponent/ImageComponent";
import Reactions from "../ReactionsComponent/ReactionsComponent";

type HasReactionsType = {
  like: boolean;
  love: boolean;
  wow: boolean;
};

type ReactionsType = {
  likes: number;
  comments: number;
  shares: number;
  views: number;
};

type UserType = {
  name: string;
  avatar: string;
  timeAgo: string;
};

type ContentType = {
  title: string;
  description: string;
  author: string;
  tags: string[];
  rating: number;
};

type CardType = {
  user: UserType;
  image: string;
  content: ContentType;
  reactions: ReactionsType;
  hasReactions: HasReactionsType;
};

type CardTypeProps = {
  data: CardType;
};

const Card = ({ data }: CardTypeProps) => {
  const [isTextVisible, setIsTextVisible] = useState<boolean>(true);
  const cardRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const handleResizeCard = () => {
      if (cardRef.current !== null) {
        const cardWidth = cardRef.current.getBoundingClientRect().width;
        // get the width of the card

        console.log(cardWidth);

        if (cardWidth > 470) {
          return setIsTextVisible(true);
        } else {
          return setIsTextVisible(false);
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
      <CardImage image={data?.image} title={data?.content?.title} />

      {/* Card Content Component */}
      <CardContent
        title={data?.content?.title}
        description={data?.content?.description}
        author={data?.content?.author}
        tags={data?.content?.tags}
        rating={data?.content?.rating}
        miniImage={data?.image}
      />

      {/* Reactions Section Component */}
      <Reactions
        reactions={data?.reactions}
        hasReactions={data?.hasReactions}
        isTextVisible={isTextVisible}
      />
    </div>
  );
};

export default Card;
