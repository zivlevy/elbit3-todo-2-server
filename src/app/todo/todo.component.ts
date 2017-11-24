import {Component, DoCheck, OnChanges, OnInit} from '@angular/core';
import {Todo} from "../model/todo";
import {TodoService} from "../services/todo.service";

@Component({
    selector: 'todo',
    templateUrl: './todo.component.html',
    styleUrls: ['./todo.component.css']
})
export class TodoComponent implements OnInit {


    todos: Array<Todo>;

    constructor(private todoService: TodoService) {

    }


    ngOnInit() {
        this.todoService.getTodos$().subscribe(res => this.todos=res);
    }

    completed(): number {
        return this.todoService.completed();
    }

    open() {
        return this.todoService.open();
    }

    addTodo(title: string, completed: boolean = false) {
        this.todoService.addTodo(title,completed);
    }

    removeTodo(e: Todo) {
        this.todoService.removeTodo(e);
    }

    toggleTodo(e: Todo) {
      this.todoService.toggleTodo(e);
    }

}
