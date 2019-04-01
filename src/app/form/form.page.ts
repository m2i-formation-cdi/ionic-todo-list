import { Component, OnInit } from '@angular/core';
import { TodoService } from '../services/todo.service';
import { Router } from '@angular/router';


@Component({
  selector: 'app-form',
  templateUrl: './form.page.html',
  styleUrls: ['./form.page.scss'],
})
export class FormPage implements OnInit {

  private task;

  constructor(private todoService: TodoService, private router: Router) { }

  ngOnInit() {
    this.task = this.todoService.getNewTask();
  }

  validateForm(){
    if(this.todoService.isValid()){
      this.todoService.addTask();
      this.router.navigateByUrl("/home");
    }
  }

}
