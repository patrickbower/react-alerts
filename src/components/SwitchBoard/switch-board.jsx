import React, {useContext} from "react";
import AddItem from  "../AddItem"
import AlertContext from '../../context/AlertContext';

const SwitchBoard = () => {

  const [alertType, setAlertType] = useContext(AlertContext);

  const toast = (event) => {
    event.preventDefault();
    setAlertType("toaster");
  }

  return (
    <div className="buttons">
      <AddItem clicked={toast}>Toast</AddItem>
      <AddItem>Bar</AddItem>
      <AddItem>Push</AddItem>
      <AddItem>Banner</AddItem>
    </div>
  )
}

export default SwitchBoard;

