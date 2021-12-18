import React, { useRef } from "react";
import { ByMoralis, useMoralis, useMoralisQuery } from "react-moralis";
import SendMessage from "./SendMessage";
import Message from "./Message";

//Only show messages from the last 15 minutes
const MINS_DURATION = 15;

const Messages = () => {
  const { user } = useMoralis();
  const endOfMessageRef = useRef(null);
  const { data, loading, error } = useMoralisQuery(
    "Messages",
    (query) =>
      query
        .ascending("createdAt")
        .greaterThan(
          "createdAt",
          new Date(Date.now() - 1000 * 60 * MINS_DURATION)
        ),
    [],
    { live: true }
  );

  console.log(data);

  return (
    <div className="pb-56">
      <div className="my-5">
        <ByMoralis variant="dark" style={{ margin: "auto" }} />
      </div>
      <div className="space-y-10 p-4">
        {/* Each Message */}
        {data.map((message) => (
          <Message key={message.id} message={message} />
        ))}
      </div>
      <div className="flex justify-center text-center">
        {/* sendMessage */}
        <SendMessage endOfMessageRef={endOfMessageRef} />
      </div>

      <div ref={endOfMessageRef} className="text-center text-gray-500 mt-5">
        <p>You're up to date {user.getUsername()}!🔥</p>
      </div>
    </div>
  );
};

export default Messages;
