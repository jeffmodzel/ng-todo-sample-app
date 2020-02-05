import { Component } from '@angular/core';
import { ToDo } from './todo';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'ToDo Application';

  ToDos: ToDo[] = [
    { id: 1, name: 'shopping', description: 'need to goto wegmans', date: new Date() },
    { id: 2, name: 'feed dog', description: 'feed the dog', date: new Date() },
    { id: 3, name: 'watch tv', description: 'need to watch my favorite show', date: new Date() },
  ];

  addToDoHandler(t: ToDo) {
    console.log('addToDoHandler() ' + JSON.stringify(t));

    // get new id
    let maxId = 0;
    this.ToDos.forEach((x) => {
      if (x.id > maxId) {
        maxId = x.id;
      }
    });

    t.id = maxId + 1;

    this.ToDos.push(t);
  }
}
