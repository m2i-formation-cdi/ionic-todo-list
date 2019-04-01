import { Component, OnInit } from '@angular/core';
import { TodoService } from '../services/todo.service';
import { Router, ActivatedRoute } from '@angular/router';
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
    private storage: Storage,
    private activeRoute: ActivatedRoute) { }

  ngOnInit() {
    this.task = {
      taskName: null,
      done: false,
      id: null
    }
    let pos = this.activeRoute.snapshot.paramMap.get('pos');

    if (pos) {
      this.storage.get('todo-list').then(
        (data)=>{
          this.task = data[pos];
        }
      )
    }
  }

  validateForm() {
    if (this.task.taskName) {

      this.storage.get('todo-list').then(
        (data) => {
          let todoList = data || [];
          todoList.push(this.task);
          this.storage.set('todo-list', todoList);
          this.router.navigateByUrl("/home");
        }
      );
    }
  }

}
