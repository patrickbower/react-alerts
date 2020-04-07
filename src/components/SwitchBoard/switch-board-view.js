import React, { useContext } from "react";
import AddItem from "../AddItem";
import AlertContext from "../../context/AlertContext";
import './switch-board.css'

const SwitchBoard = () => {
  const [getAlertType, setAlertType] = useContext(AlertContext);

  const updateAlertStore = (type, value) => {
    const alerts = {...getAlertType, [type]: value};
    setAlertType(alerts);
  }

  const updatePushStore = () => {
    const count = getAlertType.push ? getAlertType.push.length : 0;
    return ['a','b','c'].splice(0, count + 1);
  }

  return (
    <div className="buttons">
      <AddItem clicked={() => updateAlertStore('toaster', true)}>Toast</AddItem>
      <AddItem clicked={() => updateAlertStore('bar', true)}>Bar</AddItem>
      <AddItem clicked={() => updateAlertStore('push', updatePushStore())}>Push</AddItem>
    </div>
  );
};

export default SwitchBoard;
