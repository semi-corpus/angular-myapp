import { Component, Input } from '@angular/core';
import { Task } from '../task';

@Component({
  selector: 'app-detail',
  templateUrl: './detail.component.html',
  styles: ['']
})

export class DetailComponent {
  @Input() 
  task = new Task()
}
