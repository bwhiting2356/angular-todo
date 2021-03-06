
import { Component, OnInit } from '@angular/core';
import { TodoService } from '../../services/todo.service';

@Component({
  selector: 'app-todo-input',
  templateUrl: './todo-input.component.html',
  styleUrls: ['./todo-input.component.css']
})
export class TodoInputComponent implements OnInit {
  public title: string;
  public description: string;
  public time: Date;

  constructor(private todoService: TodoService) {
    this.resetTodoInput();
  }

  ngOnInit() {
  }

  resetTodoInput() {
    this.title  = '';
    this.description  = '';
    this.time = new Date();
  }

  public addTodo(): void {
    this.todoService.addTodo(this.title, this.description, new Date(this.time));
    this.resetTodoInput();
  }
}
