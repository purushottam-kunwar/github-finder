import React, { useContext } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faInfo } from "@fortawesome/free-solid-svg-icons";
import AlertContext from "../../contex/alert/alertContext";

const Alert = () => {
  const alertContext = useContext(AlertContext);

  const { alert } = alertContext;
  return (
    alert !== null && (
      <div className={`alert alert -${alert.type}`}>
        <FontAwesomeIcon icon={faInfo} />
        {alert.msg}
      </div>
    )
  );
};

export default Alert;
