import React from "react";
import './bar.css';

const Bar = props => {
  return (
    <div className="bar">
      <h3 className="clear-top">Well hello there</h3>
      <p className="clear-top">
        This has the alert message you really need to see and it's super
        important to do stuff.
      </p>
      <a href="close" className="close" onClick={props.clicked}>
        close
      </a>
    </div>
  )
};

export default Bar;
