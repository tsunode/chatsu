import { socket } from "@/socket";
import { useEffect, useState } from "react";

const useSocket = (userId: string) => {
  const [socketInstance] = useState(
    socket({
      userId,
    })
  );
  const [isConnected, setIsConnected] = useState(socketInstance.connected);

  useEffect(() => {
    function onConnect() {
      setIsConnected(true);
    }

    function onDisconnect() {
      setIsConnected(false);
    }

    socketInstance.on("connect", onConnect);
    socketInstance.on("disconnect", onDisconnect);

    return () => {
      socketInstance.off("connect", onConnect);
      socketInstance.off("disconnect", onDisconnect);
    };
  });

  return { socketInstance, isConnected };
};

export default useSocket;
