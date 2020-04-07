import React, { useContext } from "react";
import AddItem from "../AddItem";
import AlertContext from "../../context/AlertContext";
import './switch-board.css'

const SwitchBoard = () => {
  const [getAlertType, setAlertType] = useContext(AlertContext);
  console.log(getAlertType);

  return (
    <div className="buttons">
      <AddItem clicked={() => {setAlertType('toaster')}}>Toast</AddItem>
      <AddItem clicked={() => {setAlertType('bar')}}>Bar</AddItem>
      <AddItem clicked={() => {setAlertType('push')}}>Push</AddItem>
    </div>
  );
};

export default SwitchBoard;
