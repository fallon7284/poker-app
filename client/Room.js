import React, { useState, useEffect } from "react";

export default ({ rooms }) => {
  const [messages, setMessages] = useState([]);
  useEffect(() => {
    setMessages(rooms[window.location.pathname.slice(1)]);
  }, [rooms]);
  return (
    <div>
      {/* {messages.map(m => {
        return <div>{m}</div>;
      })} */}
    </div>
  );
};
