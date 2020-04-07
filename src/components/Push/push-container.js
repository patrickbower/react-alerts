import React, {useContext} from 'react';
import Push from './push-view';
import AlertContext from '../../context/AlertContext';
import { motion, AnimatePresence } from "framer-motion";

const PushContainer = () => {
  const [getAlertType, setAlertType] = useContext(AlertContext);

  function close(event, id) {
    event.preventDefault();
    const filteredItems = getAlertType.push.filter(item => item !== id)
    setAlertType({...getAlertType, 'push': filteredItems});
  }

  
  if (getAlertType.push) {
    return (
      <ul className="push-container">
        <AnimatePresence initial={false}>
          {getAlertType.push.map((id) => (
            <motion.li
              key={id}
              positionTransition
              initial={{ opacity: 0, y: 50, scale: 0.3 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, scale: 0.5, transition: { duration: 0.2 } }}
            >
              <Push clicked={(event) => close(event, id)}/>
            </motion.li>
          ))}
        </AnimatePresence>
      </ul>
    )
  } else {
    return false;
  };
}

export default PushContainer;