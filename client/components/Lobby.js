import React from "react";

export default ({ rooms }) => {
  return (
    <div>
      <div>
        {rooms.map(r => (
          <div>{r.name}</div>
        ))}
      </div>
    </div>
  );
};
