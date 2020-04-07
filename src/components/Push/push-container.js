import React, {useContext} from 'react';
import Push from './push-view';
import AlertContext from '../../context/AlertContext';

const PushContainer = () => {
  const [getAlertType, setAlertType] = useContext(AlertContext);

  const close = (event) => {
    event.preventDefault();
    setAlertType({...getAlertType, 'push': false});
  }

  return getAlertType.push ? <Push clicked={close}/> : false;
}

export default PushContainer;