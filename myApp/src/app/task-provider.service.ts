import { Injectable } from '@angular/core';
import { Task, TaskStatus } from './task';


@Injectable({
  providedIn: 'root'
})

export class TaskProviderService {

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

}
