import { makeAutoObservable } from "mobx";
import React, { Component } from "react";

class Store {
  tasks: any[] = [
    { id: 1, title: "true", done: true },
    { id: 2, title: "false", done: false },
    { id: 3, title: "Задача", done: false },
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
    console.log(id);
    this.tasks = this.tasks.filter(elem => elem.id != id);
    this.finallTasksArr = this.tasks;
  }
  addItem(item: any) {
    this.tasks.push(item);
    this.finallTasksArr = this.tasks;
  }
  changeItem(event: React.ChangeEvent<HTMLInputElement>) {
    let id = event.target.getAttribute("data-id");
    this.tasks.forEach(elem => {
      if (elem.id !== id) return false;
      elem.title = event.target.value;
    });
    console.log(id);
  }
}
export default new Store();
