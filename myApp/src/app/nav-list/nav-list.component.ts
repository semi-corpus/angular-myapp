import { Component, OnInit } from '@angular/core';
import { Task } from '../task';
import { TaskProviderService } from '../task-provider.service';
import { CurrentTaskService } from '../current-task.service';

@Component({
  selector: 'app-nav-list',
  templateUrl: './nav-list.component.html',
  styles: ['./nav-list.component.scss']
})
export class NavListComponent implements OnInit {

  taskList : Array<Task>
  
  constructor(
    private provider: TaskProviderService,
    private current: CurrentTaskService
  ) { }

  ngOnInit() {
    this.provider.getTasks().subscribe(tasks => this.taskList = tasks)
  }
  select(task: Task){
    this.current.define(task)
  }
}