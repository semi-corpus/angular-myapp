import { Component, OnInit, Input } from '@angular/core';
import { Task } from '../task';

@Component({
  selector: 'app-detail',
  templateUrl: './detail.component.html',
  styles: ['']
})
export class DetailComponent implements OnInit {

  @Input() task: Task

  constructor() { }

  ngOnInit() {
  }

}
