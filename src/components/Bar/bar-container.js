import React, {useContext} from "react";
import Bar from './bar-view';
import AlertContext from "../../context/AlertContext";

const BarContainer = props => {
  const [getAlertType, setAlertType] = useContext(AlertContext);

  const close = (event) => {
    event.preventDefault();
    setAlertType(undefined);
  }

  console.log(getAlertType);
  
  return getAlertType === "bar" ? <Bar clicked={close} /> : false;
};

export default BarContainer;
