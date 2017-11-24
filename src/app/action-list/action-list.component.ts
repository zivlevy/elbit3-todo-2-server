import {Todo} from './../model/todo';
import {Component, OnInit, Input, Output, EventEmitter} from '@angular/core';

@Component({
    selector: 'action-list',
    templateUrl: './action-list.component.html',
    styleUrls: ['./action-list.component.css']
})
export class ActionListComponent implements OnInit {
    @Input() todos: Array<Todo>;
    @Output() remove: EventEmitter<Todo> = new EventEmitter();
    @Output() toggle: EventEmitter<Todo> = new EventEmitter();

    constructor() {
    }

    ngOnInit() {
    }

    removeTodo(e: Todo) {
        this.remove.emit(e);
    }

    toggelTodo(e: Todo) {
        this.toggle.emit(e);
    }
}
