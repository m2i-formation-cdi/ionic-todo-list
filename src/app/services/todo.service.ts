import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class TodoService {

  private todoList:Array<{taskName:string, done:boolean, id: number}> = [
    {taskName: 'Tuer le lion de Ménée', done: false, id: 1},
    {taskName: 'Nettoyer les écuries d\'Augias', done: true, id: 2},
  ];

  private task = {
    taskName: null, done: false, id: null
  }

  constructor() { }

  public getData(){
    return this.todoList;
  }

  public getNewTask(){
    this.task = {
      taskName: null, done: false, id: null
    };
    return this.task;
  }

  isValid(): boolean {
    return this.task.taskName;
  }

  addTask(){
    console.log(this.todoList);
    this.task.id = (new Date()).getTime();
    this.todoList.push({
      taskName: 'bbbbb',
      done: true,
      id: (new Date()).getTime()
    });
    console.log(this.todoList);
  }
}
