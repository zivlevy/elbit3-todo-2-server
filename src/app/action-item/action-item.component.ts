import { Todo } from './../model/todo';
import {Component, OnInit, Input, Output, EventEmitter} from '@angular/core';

@Component({
  selector: 'action-item',
  templateUrl: './action-item.component.html',
  styleUrls: ['./action-item.component.css']
})
export class ActionItemComponent implements OnInit {
  @Input() todo: Todo;
  @Output() delete:EventEmitter<null> = new EventEmitter();
  @Output() toggle:EventEmitter<null> = new EventEmitter();

  constructor() { }

  ngOnInit() {
  }

  removeMe(){
    this.delete.emit();
  }

  toggleCheck(){
    this.toggle.emit();
  }

}
