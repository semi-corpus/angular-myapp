import { Component, OnInit } from '@angular/core';
import { Task } from '../task';
import { CurrentTaskService } from '../current-task.service';

@Component({
  selector: 'app-detail',
  templateUrl: './detail.component.html',
  styles: ['']
})

export class DetailComponent implements OnInit {

  task = new Task()

  constructor(private currenttaskService: CurrentTaskService) { }

  ngOnInit() {
    this.currenttaskService.getCurrentTask().subscribe(Task => this.task = task)
  }

}
