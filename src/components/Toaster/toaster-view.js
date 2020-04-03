import React, { useState } from "react";
import "./toaster.css";
import { motion } from "framer-motion";

const variants = {
  open: { opacity: 1, y: 0 },
  closed: { opacity: 0.5, y: "-100%" }
};

function Toaster() {
  const [toggle, setToggle] = useState(false);

  const toggleToaster = event => {
    event.preventDefault();
    setToggle(!toggle);
  };

  return (
    <motion.div
      animate={toggle ? "closed" : "open"}
      variants={variants}
      className={toggle ? "toaster" : "toaster toaster-active"}
    >
      <div>
        <h3 className="header">Well hello there</h3>
        <p>
          This has the alert message you really need to see and it's super
          important to do stuff.
        </p>
      </div>
      <a href="close" className="close" onClick={toggleToaster}>
        close
      </a>
    </motion.div>
  );
}

export default Toaster;
