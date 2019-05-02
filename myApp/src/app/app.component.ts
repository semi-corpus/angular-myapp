import { Component, OnInit } from '@angular/core';
import { Task } from './task';
import { TaskProviderService } from './task-provider.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.sass']
})

export class AppComponent implements OnInit{
  tasklist: Array<Task>  = []
  currentTask: Task

  constructor(public manager: TaskProviderService) {}

  ngOnInit(): void {
    this.tasklist = this.manager.tasklist
    this.currentTask = this.tasklist[0]
  }
  
  setCurrentTask(task: Task): void{
    this.currentTask = task;
  }
  addTaskToList(task: Task): void{
    this.tasklist.unshift(task);
    this.currentTask = task;
  }
}