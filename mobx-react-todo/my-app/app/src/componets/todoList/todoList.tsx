import React from "react";
import TodoItem from "./todoItem/todoItem";
import Store from "../../store/index";
import { observer } from "mobx-react";

const TodoList: React.FC = observer(() => {
  const { tasks, finallTasksArr } = Store;
  return (
    <div>
      <ul>
        <li onClick={() => Store.findDoneItem()}>Выполненные</li>
        <li onClick={() => Store.InProgressItem()}>В процессе</li>
        <li onClick={() => Store.AllArr()}>Все</li>
      </ul>
      <TodoItem data={finallTasksArr} />
      <div>+++</div>
      <button
        onClick={() => Store.addItem({ id: 23, title: "новые", done: false })}
      >
        Добавить
      </button>{" "}
    </div>
  );
});

export default TodoList;
