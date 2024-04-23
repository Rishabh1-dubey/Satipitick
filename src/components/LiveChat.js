import React, { useEffect, useState } from "react";
import ChatMessage from "./ChatMessage";
import { useDispatch, useSelector } from "react-redux";
import { addMessage } from "../utils/chatSlice";
import { generate } from "../utils/helper";
import { makerandomgenrator } from "../utils/helper";

const LiveChat = () => {
  const [liveMessage, setliveMessage] = useState("");
  const dispath = useDispatch();

  const ChatMessages = useSelector((store) => store.chat.messages);
  useEffect(() => {
    const i = setInterval(() => {
      console.log("Api polling");
      dispath(
        addMessage({
          name: generate(),
          message: makerandomgenrator(10),
        })
      );
    }, 2000);

    return () => clearInterval(i);
  }, []);

  return (
    <>
      <div className="w-full h-[600px] ml-2 p-2 border border-black overflow-y-scroll  flex flex-col-reverse">
        {/* LiveChat */}
        {ChatMessages.map((c, i) => (
          <ChatMessage key={i} name={c.name} message={c.message} />
        ))}
        {/* <ChatMessage name="Akshay saini"
      message="this is namste react course" /> */}
      </div>
      <form
        className="w-full p-2 ml-2 border border-black"
        onSubmit={(e) => {
          e.preventDefault();
          dispath(
            addMessage({
              name: "Rishah",
              message: liveMessage,
            })
          );
        }}
      >
        <input
          className="px-2 w-96 border border-black rounded-md"
          type="text"
          value={liveMessage}
          onChange={(e) => {
            setliveMessage(e.target.value);
          }}
        ></input>
        <button className="px-2 mx-2 border bg-red-100">send</button>
      </form>
    </>
  );
};

export default LiveChat;
