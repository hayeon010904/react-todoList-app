import React from "react";
import { ListItem } from "./ListItem";
import "./List.css";

export const List = ({
  AddList,
  initialList,
  items,
  content,
  hanldeContent,
  handleDelete,
}) => {
  return (
    <div className="list-container">
      <div className="listitems">
        {initialList.map((items) => {
          return (
            <ListItem
              initialList={initialList}
              items={items}
              content={content}
              key={items.id}
              handleDelete={handleDelete} 
            />
          );
        })}
      </div>
      <div>
        <form onSubmit={AddList}>
          <input
            type="text"
            className="addItem"
            defaultValue={content}
            onChange={hanldeContent}
            
          ></input>
          <button className="addList" type="submit">
            +
          </button>
        </form>
      </div>
    </div>
  );
};
