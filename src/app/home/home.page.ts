import { Component, OnInit } from '@angular/core';
import { TodoService } from '../services/todo.service';
import { Storage } from '@ionic/storage';


@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage implements OnInit{
  
  private todoList;

  constructor(
    private todoService: TodoService, 
    private storage:Storage){
    
  }

  ngOnInit(): void {
   this.storage.get('todo-list').then((data)=>{
      this.todoList = data || [];
   });
  }


}
