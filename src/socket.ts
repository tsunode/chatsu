import { io, ManagerOptions } from "socket.io-client";

export const socket = (query?: ManagerOptions["query"]) =>
  io("http://localhost:3333", { query });
