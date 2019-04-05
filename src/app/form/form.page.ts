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

  public task;

  private pos;

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

    this.pos = this.activeRoute.snapshot.paramMap.get('pos');

    if (this.pos) {
      this.storage.get('todo-list').then(
        (data)=>{
          this.task = data[this.pos];
        }
      )
    }
  }

  validateForm() {
    if (this.task.taskName) {

      this.storage.get('todo-list').then(
        (data) => {
          let todoList = data || [];

          //Ajout ou modification en fonction de la valeur de pos
          if(this.pos){
            todoList[this.pos] = this.task;
          } else {
            todoList.push(this.task);
          }
          
          this.storage.set('todo-list', todoList);

          this.router.navigateByUrl("/home");
        }
      );
    }
  }

}
