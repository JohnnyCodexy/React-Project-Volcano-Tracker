import React from "react";
import Loading_icon from "./Loading_icon.gif";

const Loading = () => {
  return (
    <div className="loader">
      <img src={Loading_icon} alt="Loading" />
      <h1>Fetching Data</h1>
    </div>
  );
};

export default Loading;
