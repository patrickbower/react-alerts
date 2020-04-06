import React, { useContext } from "react";
import Toaster from './toaster-view';
import AlertContext from "../../context/AlertContext";

function ToasterContainer() {

  const alert = useContext(AlertContext);
  console.log(alert);

  return alert === 'toaster' ? <Toaster /> : false;
}

export default ToasterContainer;
