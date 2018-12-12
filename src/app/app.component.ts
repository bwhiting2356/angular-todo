import {Component, OnInit} from '@angular/core';
import { TodoService } from './services/todo.service';
import { Todo } from './classes/todo';
import { BehaviorSubject} from 'rxjs/BehaviorSubject';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  todos: BehaviorSubject<Todo[]>;

  constructor(private todoService: TodoService) {
    this.todos = this.todoService.todos;
    this.todos.subscribe(console.log);
  }

  ngOnInit() {
    this.todoService.getTodos();
  }
}
