import React from "react";
import "./ListItem.css";
import { MdDelete } from "react-icons/md";

export const ListItem = ({ items, handleDelete, id }) => {
  return (
    <div className="item-container">
      <input type="checkbox" className="check"></input>
      <input
        className="item-input"
        type="text"
        id={items.id}
        defaultValue={items.content}
      ></input>
      <MdDelete className="delet-icon" onClick={() => handleDelete(items.id)} />
    </div>
  );
};
