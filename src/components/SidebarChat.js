import { Avatar } from "@material-ui/core";
import React, { useEffect, useState } from "react";
import db from "../firebase";
import "./css/SidebarChat.css";
import { Link } from "react-router-dom";

function SidebarChat({ addNewChat, name, id }) {
  const [seed, setSeed] = useState("");

  const createChat = () => {
    const roomName = prompt("please enter a name for chat");

    if (roomName) {
      // database stuff
      db.collection("rooms").add({
        name: roomName,
      });
    }
  };

  useEffect(() => {
    setSeed(Math.floor(Math.random() * 5000));
  }, []);

  return !addNewChat ? (
    <Link to={`/rooms/${id}`}>
      <div className="sidebarChat">
        {/* <Avatar src={`https://avatars.dicebear.com/api/identicon/${seed}.svg`} /> */}

        <Avatar src={`https://avatars.dicebear.com/api/initials/${seed}.svg`} />

        <div className="sidebarChat__info">
          <h2>{name}</h2>
          <p>last msg</p>
        </div>
      </div>
    </Link>
  ) : (
    <div className="sidebar__chat">
      <h2 onClick={createChat}>Add New Chat</h2>
    </div>
  );
}

export default SidebarChat;
