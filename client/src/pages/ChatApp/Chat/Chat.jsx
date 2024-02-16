import React, { useEffect, useState } from "react";
import { IoSendSharp } from "react-icons/io5";
import ScrollToBottom from "react-scroll-to-bottom";
import "./Chat.css";

const Chat = ({ socket, username, room }) => {
  const [currentMessage, setCurrentMessage] = useState("");
  const [messageList, setMessageList] = useState([]);

  const sendMessage = async () => {
    if (currentMessage !== "") {
      const messageData = {
        room: room,
        author: username,
        message: currentMessage,
        time:
          new Date(Date.now()).getHours() +
          ":" +
          new Date(Date.now()).getMinutes(),
      };

      await socket.emit("send_message", messageData);
      setMessageList((list) => [...list, messageData]);
      setCurrentMessage("");
    }
  };

  useEffect(() => {
    const receiveMessage = (data) => {
      setMessageList((list) => [...list, data]);
    };

    socket.on("receive_message", receiveMessage);

    return () => {
      socket.off("receive_message", receiveMessage);
    };
  }, []);


  return (
    <div className="chat-window w-96">
      <div className="bg-secondary-blue py-3 text-center rounded-t-lg text-white text-xl font-semibold">
        <p>Live Chat</p>
      </div>
      <div className="chat-body border border-primary-teal h-80">
      <ScrollToBottom className="message-container">
          {messageList.map((messageContent) => {
            return (
              <div key={messageContent._id}
                className="message"
                id={username === messageContent.author ? "you" : "other"}
              >
                <div>
                  <div className="message-content">
                    <p>{messageContent.message}</p>
                  </div>
                  <div className="message-meta">
                    <p id="time">{messageContent.time}</p>
                    {/* <p id="author">{messageContent.author}</p> */}
                  </div>
                </div>
              </div>
            );
          })}
        </ScrollToBottom>
      </div>
      <div className="border border-primary-teal flex">
        <input
          type="text"
          value={currentMessage}
          placeholder="Hey..."
          className="h-10 w-full outline-none px-2"
          onChange={(event) => {
            setCurrentMessage(event.target.value);
          }}
          onKeyPress={(event) => {
            event.key === "Enter" && sendMessage();
          }}
        />
        <button onClick={sendMessage} className="flex justify-center items-center text-2xl  bg-secondary-blue w-24"><IoSendSharp className="text-white"/></button>
      </div>
    </div>
  );
}

export default Chat;
