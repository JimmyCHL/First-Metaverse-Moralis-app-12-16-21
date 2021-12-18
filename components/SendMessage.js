import React, { useState } from "react";
import { useMoralis } from "react-moralis";

const SendMessage = ({ endOfMessageRef }) => {
  const { user, Moralis } = useMoralis();
  const [message, setMessage] = useState("");

  const sendMessage = (e) => {
    e.preventDefault();

    if (!message) return;

    //off Chain transaction using moralis server, real transaction with blockChain is really expensive on gas fee.
    //create database table call 'Messages'
    const Messages = Moralis.Object.extend("Messages");
    const messages = new Messages();

    messages
      .save({
        message: message,
        username: user.getUsername(),
        ethAddress: user.get("ethAddress"),
      })
      .then(
        (message) => {
          //The object was saved successfully.
        },
        (error) => {
          //The save failed
          //error is a Moralis.Error with an error code and message
          console.log(error.message);
        }
      );

    endOfMessageRef.current.scrollIntoView({ behavior: "smooth" });
    setMessage("");
  };

  return (
    <form className="flex fixed bottom-10 bg-black opacity-80 w-11/12 px-4 py-2 max-w-2xl shadow-xl rounded-full border-4 border-blue-400">
      <input
        className="flex-1 outline-none bg-transparent text-white placeholder-gray-500 pr-5"
        placeholder={`Enter a Message ${user.getUsername()}...`}
        type="text"
        value={message}
        onChange={(e) => setMessage(e.target.value)}
      />
      <button
        type="submit"
        onClick={sendMessage}
        className="font-bold text-pink-500"
      >
        Send
      </button>
    </form>
  );
};

export default SendMessage;
