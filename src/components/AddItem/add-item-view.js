import React from "react";
import "./add-item.css";

function AddItem(props) {
  return (
    <button className="add-item">{props.children}</button>
  );
}

export default AddItem;
