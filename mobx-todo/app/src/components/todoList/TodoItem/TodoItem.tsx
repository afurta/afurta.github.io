import React, { useState } from "react";
import store from "../../../store";
import "./TodoItem.sass";

interface ITodoItem {
  id: number;
  title: any;
  done: boolean;
}

const TodoItem: React.FC<ITodoItem> = ({ id, title, done }) => {
  return (
    <div className="todoItem card">
      <div className="todoItem__checkbox ">
        {done ? (
          <i
            className="small  material-icons todoItem__checkbox-done"
            onClick={() => store.changeStateItem(id)}
          >
            done
          </i>
        ) : (
          <i
            className="small  material-icons todoItem__checkbox-play"
            onClick={() => store.changeStateItem(id)}
          >
            play_arrow
          </i>
        )}
      </div>
      <div className="todoItem__title">
        <input
          type="text"
          value={title}
          data-id={id}
          onChange={e => store.changeItem(e)}
        />
      </div>

      <div className="todoItem__delete" onClick={() => store.deleteItem(id)}>
        <i className="small  material-icons todoItem__delete-icon">delete</i>
      </div>
    </div>
  );
};
export default TodoItem;
