import { v4 as uuid } from "uuid";

import Container from "@/components/Container";
import Header from "@/components/Header";
import InputSubmit from "@/components/Input";
import Message from "@/components/Message";

import profile1 from "../assets/perfil1.jpg";
import profile2 from "../assets/perfil2.jpg";
import { socket } from "@/socket";
import { useEffect, useRef, useState } from "react";
import { useRouter } from "next/router";
import { StaticImageData } from "next/image";
import useSocket from "@/hooks/useSocket";

interface IMessage {
  id: string;
  name: string;
  text: string;
  image: StaticImageData;
  isOwner?: boolean;
}

const Chat = () => {
  const router = useRouter();
  const username = router.query.name as string;
  const messageContainer = useRef<HTMLDivElement>(null);
  const { socketInstance } = useSocket(username);
  const [messages, setMessages] = useState<IMessage[]>([]);

  useEffect(() => {
    messageContainer.current?.scrollTo(
      0,
      messageContainer.current.scrollHeight
    );
  }, [messages]);

  useEffect(() => {
    function onMessageEvent(value: IMessage) {
      setMessages((previous) => [...previous, value]);
    }

    function onNotificationEvent(value: IMessage) {
      console.log("hello");
    }

    socketInstance.on("notification", onNotificationEvent);
    socketInstance.on("message", onMessageEvent);

    return () => {
      socketInstance.off("message", onMessageEvent);
      socketInstance.off("notification", onNotificationEvent);
    };
  });

  const handleSubmit = (inputValue: string) => {
    const newMessage = {
      text: inputValue,
      name: username,
      id: uuid(),
      image: profile1,
    };

    socketInstance.emit("message", newMessage);

    setMessages((previous) => [
      ...previous,
      { ...newMessage, image: profile2, isOwner: true },
    ]);
  };

  return (
    <>
      <Header />
      <main className="content-area flex flex-col items-center justify-center">
        <Container>
          <div
            ref={messageContainer}
            className="flex h-[60rem] flex-col overflow-auto px-5 pt-14"
          >
            {messages.map((message) => (
              <Message
                key={message.id}
                name={message.name}
                image={message.image}
                message={message.text}
                isOwner={message.isOwner}
              />
            ))}
          </div>
          <InputSubmit
            onSubmit={handleSubmit}
            placeholder="Digite sua mensagem aqui"
          />
        </Container>
      </main>
    </>
  );
};

export default Chat;
