import React from "react";

const LoactionInfo = (props) => {
  return (
    <div className="location-info">
      <h2>Location info</h2>
      <li>
        ID:
        <strong>{props.info.id}</strong>
      </li>
      <li>
        Title: <strong>{props.info.title}</strong>
      </li>
    </div>
  );
};

export default LoactionInfo;
