import {Injectable} from '@angular/core';
import {Todo} from '../model/todo';
import {HttpClient} from '@angular/common/http';
import {BehaviorSubject} from 'rxjs/BehaviorSubject';

@Injectable()
export class TodoService {
    todos: Array<Todo> = [];
    todos$: BehaviorSubject<Todo[]> = new BehaviorSubject([]);
    url = 'http://130.211.153.28:9000/todos';

    constructor(private http: HttpClient) {
        this.getTodos$().subscribe(res => this.todos = res);
        this.todosFromServer();
    }

    completed(): number {
        const compleated = this.todos.filter(todo => todo.completed === true);
        return compleated.length;
    }

    open() {
        return this.todos.length - this.completed();
    }

    private todosFromServer() {
        this.http.get<Todo[]>(this.url).subscribe(res => {
            this.todos$.next(<Array<Todo>>res) ;
        });
    }

    getTodos$() {
        return this.todos$.asObservable();
    }

    addTodo(title: string, completed: boolean = false) {
        const todo: Todo = {title, completed};
        this.http.post(this.url, todo).subscribe(res => this.todosFromServer());
    }

    removeTodo(e: Todo) {
        this.http.delete(this.url + '/' + e._id).subscribe(res => this.todosFromServer());

    }

    toggleTodo(e: Todo) {

        e.completed = e.completed ? false : true;
        this.http.put(this.url + '/' + e._id, e).subscribe(res => {
            this.todosFromServer();
        });
    }
}
