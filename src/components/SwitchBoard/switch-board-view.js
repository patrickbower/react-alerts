import React, { useContext } from "react";
import AddItem from "../AddItem";
import AlertContext from "../../context/AlertContext";
import './switch-board.css'

const SwitchBoard = () => {
  const [getAlertType, setAlertType] = useContext(AlertContext);

  function updateAlertStore(type) {
    const alerts = {...getAlertType, [type]: true};
    setAlertType(alerts);
  }

  return (
    <div className="buttons">
      <AddItem clicked={() => updateAlertStore('toaster')}>Toast</AddItem>
      <AddItem clicked={() => updateAlertStore('bar')}>Bar</AddItem>
      <AddItem clicked={() => updateAlertStore('push')}>Push</AddItem>
    </div>
  );
};

export default SwitchBoard;
