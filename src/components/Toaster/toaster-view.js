import React from "react";
import "./toaster.css";
import {motion, AnimatePresence} from "framer-motion";

const Toaster = props => {
  return (
    <AnimatePresence> 
      <motion.div 
        className="toaster" 
        initial={{ opacity: 0, y: 100 }}
        animate={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0 }}>
        <div>
          <h3 className="clear-top">Well hello there</h3>
          <p className="clear-top">
            This has the alert message you really need to see and it's super
            important to do stuff.
          </p>
        </div>
        <a href="close" className="close" onClick={props.clicked}>
          close
        </a>
      </motion.div>
    </AnimatePresence>
  );
};

export default Toaster;
