import { Component, OnInit } from '@angular/core';
import { TodoService } from '../services/todo.service';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage implements OnInit{
  
  private todoList;

  constructor(private todoService: TodoService){
    
  }

  ngOnInit(): void {
    this.todoList = this.todoService.getData();
  }


}
