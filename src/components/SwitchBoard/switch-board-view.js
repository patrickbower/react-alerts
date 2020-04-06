import React, { useContext } from "react";
import AddItem from "../AddItem";
import AlertContext from "../../context/AlertContext";
import './switch-board.css'

const SwitchBoard = () => {
  const [getAlertType, setAlertType] = useContext(AlertContext);
  console.log(getAlertType);

  const toast = event => {
    event.preventDefault();
    setAlertType("toaster");
  };

  const bar = event => {
    event.preventDefault();
    setAlertType("bar");
  };

  const push = event => {
    event.preventDefault();
    setAlertType("push");
  };

  return (
    <div className="buttons">
      <AddItem clicked={toast}>Toast</AddItem>
      <AddItem clicked={bar}>Bar</AddItem>
      <AddItem clicked={push}>Push</AddItem>
      <AddItem>Banner</AddItem>
    </div>
  );
};

export default SwitchBoard;
