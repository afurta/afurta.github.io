import React from "react";
import { observer } from "mobx-react";
import store from "../../../store";

interface ITodoItemsProps {
  data: any[];
}

const TodoItem: React.FC<ITodoItemsProps> = observer(({ data }) => {
  return (
    <>
      {data.map((elem, index) => {
        return (
          <div key={index} style={{ border: "1px solid red" }}>
            <div>{elem.id}</div>
            <div>{elem.title}</div>
            <input
              data-id={elem.id}
              type="text"
              defaultValue={elem.title}
              onChange={e => store.changeItem(e)}
            />
            <div onClick={() => store.deleteItem(elem.id)}>dsadf{elem.id}</div>
          </div>
        );
      })}
    </>
  );
});

export default TodoItem;
