import { Component, OnInit, EventEmitter, Output } from '@angular/core';
import { ToDo } from '../todo';

@Component({
  selector: 'app-create-todo',
  templateUrl: './create-todo.component.html',
  styleUrls: ['./create-todo.component.css']
})
export class CreateTodoComponent implements OnInit {

  @Output() todoHasBeenAdded: EventEmitter<ToDo> = new EventEmitter();

  constructor() { }

  ngOnInit() {
  }

  buttonClicked(): void {
    console.log('Button Clicked');

    const t: ToDo = new ToDo();
    t.id = 4;
    t.name = 'new one';
    t.description = 'make this work for real';
    t.date = new Date();

    this.todoHasBeenAdded.emit(t);
  }

}
