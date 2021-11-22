import { observer } from "mobx-react";
import React from "react";
import store from "../../store";
import TodoItem from "./TodoItem/TodoItem";
import "./TodoList.sass";
const shortid = require("shortid");

interface User {
  id: any;
  title: any;
  done: boolean;
}

const TodoList: React.FC = observer(() => {
  const title = store.title;
  const input = store.input;
  const changeInput = (event: React.ChangeEvent<HTMLInputElement>) => {
    store.setTitle(event.target.value);
  };

  const keyPressHandler = (event: React.KeyboardEvent) => {
    console.log();
    if (event.key === "Enter") {
      let obj: User = {
        id: shortid.generate(),
        title,
        done: false,
      };
      store.addItem(obj);
      store.setInput(false);
      store.setTitle("");
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

        <i className="material-icons" onClick={() => store.setInput(true)}>
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
