import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faInfo } from "@fortawesome/free-solid-svg-icons";

const Alert = ({ alert }) => {
  return (
    alert !== null && (
      <div className={`alert alert -${alert.type}`}>
        <FontAwesomeIcon icon={faInfo} /> {""}
        {""}
        {""}
        {alert.msg}
      </div>
    )
  );
};

export default Alert;
