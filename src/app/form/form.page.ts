import { Component, OnInit } from '@angular/core';
import { TodoService } from '../services/todo.service';
import { Router } from '@angular/router';
import { Storage } from '@ionic/storage';


@Component({
  selector: 'app-form',
  templateUrl: './form.page.html',
  styleUrls: ['./form.page.scss'],
})
export class FormPage implements OnInit {

  private task;

  constructor(
    private todoService: TodoService, 
    private router: Router,
    private storage: Storage) { }

  ngOnInit() {
    this.task = {
      taskName: null,
      done: false,
      id: null
    }
  }

  validateForm(){
    if(this.task.taskName){
      
      this.storage.get('todo-list').then(
        (data)=>{
          let todoList = data || [];
          todoList.push(this.task);
          this.storage.set('todo-list', todoList);
          this.router.navigateByUrl("/home");
        }
      ); 
    }
  }

}
