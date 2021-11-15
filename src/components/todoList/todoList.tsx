import { observer } from "mobx-react";
import React, { useState } from "react";
import store from "../../store";
import TodoItem from "./TodoItem/TodoItem";
import "./TodoList.sass";
const shortid = require("shortid");

const TodoList: React.FC = observer(() => {
  const [title, setTitle] = useState<string>("");
  const [input, setInput] = useState<boolean>(false);
  const changeInput = (event: React.ChangeEvent<HTMLInputElement>) => {
    setTitle(event.target.value);
  };

  const keyPressHandler = (event: React.KeyboardEvent) => {
    if (event.key === "Enter") {
      store.addItem({
        id: shortid.generate(),
        title,
        done: false,
      });
      setInput(false);
      setTitle("");
    }
  };
  return (
    <div className="TodoList">
      <div className="todoItem__add ">
        {input ? (
          <input
            type="text"
            value={title}
            onChange={changeInput}
            onKeyPress={keyPressHandler}
            placeholder="Нажмите Enter"
          />
        ) : null}

        <i className="material-icons" onClick={() => setInput(true)}>
          add
        </i>
      </div>
      {store.finallTasksArr.map((elem, index) => {
        return (
          <TodoItem
            key={index}
            id={elem.id}
            title={elem.title}
            done={elem.done}
          />
        );
      })}
    </div>
  );
});
export default TodoList;
