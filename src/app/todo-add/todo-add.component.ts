import { Component, OnInit, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-todo-add',
  templateUrl: './todo-add.component.html',
  styleUrls: ['./todo-add.component.css']
})
export class TodoAddComponent implements OnInit {
  @Output() update = new EventEmitter<string>();
  constructor() { }

  ngOnInit() {
  }
  addTodo(todo: string): void {
    console.log('working');
    this.update.emit(todo);
  }

}
