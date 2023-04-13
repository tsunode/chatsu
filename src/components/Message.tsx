import Image, { StaticImageData } from "next/image";

interface IMessageProps {
  image: StaticImageData | string;
  name: string;
  message: string;
  isOwner?: boolean;
}

const Message = ({ image, name, message, isOwner = false }: IMessageProps) => {
  const positionTriangle = isOwner ? "after:right-[-6px]" : "after:left-[-6px]";

  const MessageParagraph = (
    <p
      className={`triangle relative h-fit rounded-xl bg-green-1 px-6 py-2 after:bottom-0 ${positionTriangle}`}
    >
      {message}
    </p>
  );

  return (
    <div className={`m-2 flex ${isOwner && "self-end"}`}>
      {isOwner && MessageParagraph}
      <div className="m-4 flex flex-col items-center">
        <Image src={image} alt={name} className="h-24 w-24 rounded-full" />
        <span className="text-white-1">{name}</span>
      </div>
      {!isOwner && MessageParagraph}
    </div>
  );
};

export default Message;
