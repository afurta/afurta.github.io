import React from "react";
import store from "../../store";
import "./header.sass";

const Header: React.FC = () => {
  return (
    <nav>
      <div className="nav-wrapper">
        <ul className="right ">
          <li>
            <a onClick={() => store.AllArr()}>Все задачи</a>
          </li>
          <li>
            <a onClick={() => store.findDoneItem()}>Выполненные</a>
          </li>
          <li>
            <a onClick={() => store.InProgressItem()}>В процессе</a>
          </li>
        </ul>
      </div>
    </nav>
  );
};
export default Header;
