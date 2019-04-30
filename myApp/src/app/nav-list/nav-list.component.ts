import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Task } from '../task';

@Component({
  selector: 'app-nav-list',
  templateUrl: './nav-list.component.html',
  styleUrls: ['./nav-list.component.sass']
})
export class NavListComponent implements OnInit {

  @Input() taskList: Array<Task>;
  @Output() taskSelected = new EventEmitter<Task>();

  constructor() { }

  ngOnInit() { }
}