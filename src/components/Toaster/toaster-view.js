import React from "react";
import "./toaster.css";

const Toaster = props => {
  return (
    <div className="toaster toaster-active">
      <div>
        <h3 className="header">Well hello there</h3>
        <p>
          This has the alert message you really need to see and it's super
          important to do stuff.
        </p>
      </div>
      <a href="close" className="close" onClick={props.clicked}>
        close
      </a>
    </div>
  );
};

export default Toaster;
