import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import {Todo} from '../model/todo';

@Component({
  selector: 'action-input',
  templateUrl: './action-input.component.html',
  styleUrls: ['./action-input.component.css']
})
export class ActionInputComponent implements OnInit {
@Output() todoAdded: EventEmitter<Todo> = new EventEmitter(); 

  constructor() { }

  ngOnInit() {
  }

  add(e,title) {
    e.preventDefault();
    if (title!=='') this.todoAdded.emit(title);
  }
}
