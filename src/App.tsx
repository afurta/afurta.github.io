import React from "react";
import "./App.sass";
import TodoList from "./components/todoList/todoList";
import Header from "./components/header/header";

const App: React.FC = () => {
  return (
    <div className="App">
      <Header />
      <main>
        <TodoList />
      </main>
    </div>
  );
};

export default App;
