import { Component, OnInit } from '@angular/core';
import { TodoService } from '../services/todo.service';
import { Router, ActivatedRoute } from '@angular/router';
import { Storage } from '@ionic/storage';
import { Camera, CameraOptions } from '@ionic-native/camera/ngx';


@Component({
  selector: 'app-form',
  templateUrl: './form.page.html',
  styleUrls: ['./form.page.scss'],
})
export class FormPage implements OnInit {

  public task;

  private pos;

  public pictureData;

  constructor(
    private todoService: TodoService,
    private router: Router,
    private storage: Storage,
    private activeRoute: ActivatedRoute,
    private camera: Camera) { }

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

  takePicture(){
    const cameraOptions:CameraOptions = {
      quality: 60,
      destinationType: this.camera.DestinationType.FILE_URI,
      targetWidth: 500,
      targetHeight: 500,
      mediaType: this.camera.MediaType.PICTURE,
      encodingType: this.camera.EncodingType.JPEG
    }

    this.camera.getPicture(cameraOptions).then(
      (cameraData)=>{
        this.pictureData = cameraData;
      }
    )
  }

}
