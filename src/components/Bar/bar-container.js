import React, {useContext} from 'react';
import Bar from './bar-view';
import AlertContext from '../../context/AlertContext';

const BarContainer = () => {
  const [getAlertType, setAlertType] = useContext(AlertContext);

  const close = (event) => {
    event.preventDefault();
    setAlertType({...getAlertType, 'bar': false});
  }

  return getAlertType.bar ? <Bar clicked={close}/> : false;
}

export default BarContainer;
