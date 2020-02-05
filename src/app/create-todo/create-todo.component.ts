import { Component, OnInit, EventEmitter, Output } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { ToDo } from '../todo';

@Component({
  selector: 'app-create-todo',
  templateUrl: './create-todo.component.html',
  styleUrls: ['./create-todo.component.css']
})
export class CreateTodoComponent implements OnInit {

  title = 'Add new todo';

  @Output() todoHasBeenAdded: EventEmitter<ToDo> = new EventEmitter();

  // add date validation?
  todoForm = new FormGroup({
    name: new FormControl('', [Validators.required, Validators.minLength(3), Validators.maxLength(15)]),
    description: new FormControl('', [Validators.required, Validators.minLength(3)]),
    date: new FormControl('', [Validators.required])
  });

  constructor() {}

  ngOnInit() {}

  onSubmit() {
    console.log(this.todoForm.value);
    console.log(this.todoForm.valid);

    if (this.todoForm.valid) {
      console.log('form is valid, do something with it...');

      const t: ToDo = new ToDo();
      t.name = this.todoForm.get('name').value;
      t.description = this.todoForm.get('description').value;
      t.date = new Date(this.todoForm.get('date').value);
      this.todoHasBeenAdded.emit(t);

      this.todoForm.setValue({name: '', description: '', date: null});
    } else {
      console.log('form is not valid');
    }

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
