import React from "react";
import Image from "../pages/404_Error.jpg";

const NotFound = () => {
  return (
    <div
      style={{
        backgroundImage: "url(" + Image + ")",
        width: "900px",
        height: "500px",
      }}
    >
      <h1> Not Found </h1>
      {/* <p className="lead"> The page you are looking for does not exist. </p> */}
    </div>
  );
};

export default NotFound;
