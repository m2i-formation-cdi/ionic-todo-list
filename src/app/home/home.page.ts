import { Component, OnInit } from '@angular/core';
import { TodoService } from '../services/todo.service';
import { Storage } from '@ionic/storage';
import { Router } from '@angular/router';



@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {
  
  public todoList;

  constructor(
    private todoService: TodoService, 
    private storage:Storage,
    private router: Router){
    
  }

  ionViewWillEnter(): void {
   this.storage.get('todo-list').then((data)=>{
      this.todoList = data || [];
   });
  }

  deleteTask(pos){
    //suppression de la tâche
    this.todoList.splice(pos,1);
    //sauvegarde
    this.storage.set('todo-list', this.todoList);
  }

  showUpdateForm(pos){
    this.router.navigateByUrl('/form/'+ pos);
  }


}
