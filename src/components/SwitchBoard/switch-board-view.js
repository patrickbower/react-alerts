import React, { useContext } from "react";
import AddItem from "../AddItem";
import AlertContext from "../../context/AlertContext";
import './switch-board.css'

const SwitchBoard = () => {
  const [getAlertType, setAlertType] = useContext(AlertContext);

  function updateAlertStore(type, value) {
    const alerts = {...getAlertType, [type]: value};
    setAlertType(alerts);
  }

  function pushCount() {
    const count = getAlertType.push || 0;
    return count + 1;
  }

  return (
    <div className="buttons">
      <AddItem clicked={() => updateAlertStore('toaster', true)}>Toast</AddItem>
      <AddItem clicked={() => updateAlertStore('bar', true)}>Bar</AddItem>
      <AddItem clicked={() => updateAlertStore('push', pushCount())}>Push</AddItem>
    </div>
  );
};

export default SwitchBoard;
