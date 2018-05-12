import { Component, OnInit, Input } from '@angular/core';
import {Todo} from '../todo';

@Component({
  selector: 'app-todo-update',
  templateUrl: './todo-update.component.html',
  styleUrls: ['./todo-update.component.css']
})
export class TodoUpdateComponent implements OnInit {
  @Input() todo: Todo;
  constructor() { }

  ngOnInit() {
  }

}
