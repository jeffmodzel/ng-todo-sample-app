import { Component, OnInit, Input } from '@angular/core';
import { ToDo } from '../todo';

@Component({
  selector: 'app-todo-list',
  templateUrl: './todo-list.component.html',
  styleUrls: ['./todo-list.component.css']
})
export class TodoListComponent implements OnInit {

  @Input() todos: ToDo[];

  constructor() {
    console.log('constructor');
    console.log(this.todos);
  }

  ngOnInit() {
    // this is where the todos property is injected
    console.log('ngOnInit');
    console.log(this.todos);
  }

}
