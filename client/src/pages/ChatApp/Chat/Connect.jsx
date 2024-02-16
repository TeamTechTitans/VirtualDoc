import { Button, Input } from "@material-tailwind/react";
import { useState } from "react";
import { Link } from "react-router-dom";
import { io } from "socket.io-client";
import Chat from "./Chat";
import "./Chat.css";
import useApiLink from "../../../lib/hooks/useApiLink";

const apiLink = useApiLink()
// const socketLink = apiLink.split(':')[1]

const socket = io(apiLink, {
  transports: ["websocket"],
});

const Connect = () => {
  const [username, setUsername] = useState("");
  const [room, setRoom] = useState("");
  const [showChat, setShowChat] = useState(false);

  const joinRoom = () => {
    if (username !== "" && room !== "") {
      socket.emit("join_room", room);
      setShowChat(true);
    }
  };
  return (
    <div className="flex justify-center items-center h-full">
      {!showChat ? (
        <div className="flex flex-col w-72 gap-5 ">
          <h3 className="md:text-4xl text-2xl font-semibold text-center text-dark-blue my-5">Join A Chat</h3>
          <Input
            label="User Name"
            color="indigo"
            type="text"
            placeholder="John..."
            onChange={(event) => {
              setUsername(event.target.value);
            }}
          />
          <Input
            label="Room ID..."
            color="indigo"
            type="text"
            placeholder="Room ID..."
            onChange={(event) => {
              setRoom(event.target.value);
            }}
          />
          <Button className="bg-secondary-blue" onClick={joinRoom}>Join A Room</Button>
        </div>
      ) : (
        <Link to="/dashboard/chat"><Chat socket={socket} username={username} room={room} /></Link>
      )}
    </div>
  );
};

export default Connect;
