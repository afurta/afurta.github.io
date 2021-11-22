import { makeAutoObservable } from "mobx";
import React from "react";

class Store {
  title: string = "";
  input: boolean = false;
  tasks: any[] = [
    { id: 1, title: "Задача 1", done: true },
    { id: 2, title: "Задача 2", done: false },
  ];
  finallTasksArr: any[] = this.tasks;

  constructor() {
    makeAutoObservable(this);
  }

  findDoneItem() {
    return (this.finallTasksArr = this.tasks.filter(elem => elem.done));
  }
  InProgressItem() {
    return (this.finallTasksArr = this.tasks.filter(elem => !elem.done));
  }
  AllArr() {
    return (this.finallTasksArr = this.tasks);
  }
  deleteItem(id: number) {
    this.tasks = this.tasks.filter(elem => elem.id !== id);
    this.finallTasksArr = this.tasks;
  }
  addItem(item: {}) {
    this.tasks.push(item);
    this.finallTasksArr = this.tasks;
  }
  changeItem(event: React.ChangeEvent<HTMLInputElement>) {
    let id = event.target.getAttribute("data-id");
    this.tasks.forEach(elem => {
      if (elem.id !== id) return false;
      elem.title = event.target.value;
    });
    this.finallTasksArr = this.tasks;
  }
  changeStateItem(id: number) {
    this.tasks.forEach(elem => {
      if (elem.id !== id) return false;
      elem.done = !elem.done;
    });
    this.finallTasksArr = this.tasks;
  }

  setInput(str: boolean) {
    this.input = str;
  }
  setTitle(str: string) {
    this.title = str;
  }
}
export default new Store();
