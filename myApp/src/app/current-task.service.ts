import { Injectable } from '@angular/core';
import { TaskProviderService } from './task-provider.service';
import { Observable, Subject } from 'rxjs';
import { Task } from './task';


@Injectable({
  providedIn: 'root'
})

export class CurrentTaskService {

  taskSubject = new Subject<Task>()

  constructor(private provider: TaskProviderService) { 
    this.provider.getTasks().subscribe(tasks => this.taskSubject.next(tasks[0]))
  }

  getCurrentTask(): Observable<Task>{
    return this.taskSubject.asObservable()
  }
  define(task: Task){
    this.taskSubject.next(task)
  }

}
