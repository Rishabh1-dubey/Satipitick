import React from "react";

const ChatMessage = ({name, message}) => {
  return (
    <div className="flex items-center shadow-md p-2 ">
      
      <img
        className="h-10 col-span-5"
        src="https://static.vecteezy.com/system/resources/previews/019/879/186/original/user-icon-on-transparent-background-free-png.png"
        alt="user"
      />
      <span className="font-bold ">{name}</span>
      <span className="px-3">{message}</span>
    </div>
  );
};

export default ChatMessage;
