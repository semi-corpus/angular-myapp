import { Component } from '@angular/core';
import { Task, TaskStatus } from './task';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.sass']
})

export class AppComponent {
  tasklist: Array<Task> = [{
    src: 'assets/img/thumbnail-one.jpg',
    name: 'Apprendre Angular',
    status: TaskStatus.Doing,
    deadLine: new Date('2019-05-02'),
    details: 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Soluta ea cumque saepe ipsum sit vel, debitis sequi animi rerum distinctio!'
  },{
    src: 'assets/img/thumbnail-two.jpg',
    name: 'Apprendre React',
    status: TaskStatus.ToDo,
    deadLine: new Date('2019-06-02'),
    details: 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Soluta ea cumque saepe ipsum sit vel, debitis sequi animi rerum distinctio!'
  },{
    src: 'assets/img/thumbnail-three.jpg',
    name: 'Apprendre Vue',
    status: TaskStatus.ToDo,
    deadLine: new Date('2019-07-02'),
    details: 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Soluta ea cumque saepe ipsum sit vel, debitis sequi animi rerum distinctio!'
  }]
  
  currentTask = this.tasklist[0]

  setCurrentTask(task: Task){
    this.currentTask = task;
  }

  addTaskToList(task: Task){
    this.tasklist.unshift(task);
    this.currentTask = task;
  }
}