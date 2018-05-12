import { Component, OnInit, Input } from '@angular/core';
import {Todo} from '../todo';

@Component({
  selector: 'app-list-copy',
  templateUrl: './list-copy.component.html',
  styleUrls: ['./list-copy.component.css']
})
export class ListCopyComponent implements OnInit {
  @Input() list: Todo[];
  constructor() { }
  ngOnInit() {
  }

}
