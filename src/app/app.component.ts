import { Component } from '@angular/core';
import { ToDo } from './todo';
import { ToDoService} from './todoService';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'ToDo Application';

  ToDos: ToDo[];

  constructor(private todoService: ToDoService) {
    this.ToDos = todoService.getToDos();
  }

  addToDoHandler(t: ToDo) {
    // console.log('addToDoHandler() ' + JSON.stringify(t));
    this.todoService.addToDo(t);
    this.ToDos = this.todoService.getToDos();
  }
}
