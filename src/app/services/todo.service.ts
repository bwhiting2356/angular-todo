import { Injectable } from '@angular/core';
import { Todo } from '../classes/todo';
import {BehaviorSubject} from 'rxjs/BehaviorSubject';
import {HttpClient} from '@angular/common/http';
import 'rxjs/add/operator/take';


@Injectable()

export class TodoService {

  public todos: BehaviorSubject<Todo[]>;
  private nextId: number;

  constructor(private http: HttpClient) {
    this.todos = new BehaviorSubject<Todo[]>([]);
  }

   getTodos() {
    this.http.get('/todos').subscribe((data: any) => {
      const parsedTodos = data._embedded.todos.map(todo => {
          return {
            title: todo.title,
            description: todo.description,
            time: new Date(todo.time),
            id: todo._links.self.href.split('/')[4]
          };
        });
      this.todos.next(parsedTodos);
    });
   }

   public addTodo(title: string, description: string, time: Date)  {
    this.http.post('/todos', {title, description, time})
      .subscribe(() => this.getTodos());

   }

   public removeTodo(id: string): void {
    this.http.delete(`/todos/${id}`)
      .subscribe(() => this.getTodos());
   }

}
