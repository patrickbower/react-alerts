import React, { useContext } from "react";
import Toaster from './toaster-view';
import AlertContext from "../../context/AlertContext";

function ToasterContainer() {

  const [alertType] = useContext(AlertContext);
  // console.log(alert);

  return alertType === 'toaster' ? <Toaster /> : false;
}

export default ToasterContainer;
