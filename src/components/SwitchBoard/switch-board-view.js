import React, { useContext } from "react";
import AddItem from "../AddItem";
import AlertContext from "../../context/AlertContext";
import './switch-board.css'

const SwitchBoard = () => {
  const [getAlertType, setAlertType] = useContext(AlertContext);

  const updateAlertStore = (type, value) => {
    console.log(type, value);
    const alerts = {...getAlertType, [type]: value};
    setAlertType(alerts);
  }

  const updatePushStore = () => {
    // get count or create
    const count = getAlertType.push ? getAlertType.push.length : 0;
    // use a dummy array
    let dummyArr = ['a','b','c'];
    // return dummy array cut by count
    return dummyArr.splice(0, count + 1);
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
