import React, { useContext } from "react";
import Toaster from './toaster-view';
import AlertContext from "../../context/AlertContext";

function ToasterContainer() {

  const [getAlertType, setAlertType] = useContext(AlertContext);

  const close = (event) => {
    event.preventDefault();
    setAlertType(undefined);
  }

  return getAlertType === 'toaster' ? <Toaster clicked={close} /> : false;
}

export default ToasterContainer;
