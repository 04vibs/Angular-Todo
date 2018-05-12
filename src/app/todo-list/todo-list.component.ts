import { Component, OnInit } from '@angular/core';
import {Todo} from '../todo';

@Component({
  selector: 'app-todo-list',
  templateUrl: './todo-list.component.html',
  styleUrls: ['./todo-list.component.css']
})
export class TodoListComponent implements OnInit {
  todoList: Todo[] = [];
  selectedTodo: Todo;
  constructor() {
    console.log('Constructor');
  }

  ngOnInit() {
    console.log('NG Init');
    this.todoList.push({task: 'go to gym'});
    }
    addTodo(todo: string): void {
      this.todoList.push({task: todo});
    }
    onSelectedTodo(todo: Todo): void {
      this.selectedTodo = todo;
    }

}
