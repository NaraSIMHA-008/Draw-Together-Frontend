import { io } from "socket.io-client";
const socketInitialize = () => {
  const socket = io("https://draw-together-backend-2efm.onrender.com");
  return socket;
};

export default socketInitialize;
