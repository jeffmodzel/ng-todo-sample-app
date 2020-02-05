import { Injectable } from '@angular/core';
import { ToDo } from './todo';

@Injectable({
  providedIn: 'root',
})
export class ToDoService {

    todos: ToDo[] = [
        { id: 1, name: 'shopping', description: 'need to goto wegmans', date: new Date() },
        { id: 2, name: 'feed dog', description: 'feed the dog', date: new Date() },
        { id: 3, name: 'watch tv', description: 'need to watch my favorite show', date: new Date() },
        { id: 4, name: 'sleep', description: 'goto bed 9pm, wake up 6am', date: new Date() }
      ];

    constructor() {
      console.log('ToDoService constructor');
    }

    doSomething(): void {
      console.log('do something....');
    }

    getToDos(): ToDo[] {
      return this.todos;
    }

    addToDo(t: ToDo): void {
      let maxId = 0;
      this.todos.forEach((x) => {
        if (x.id > maxId) {
            maxId = x.id;
        }
      });

      t.id = maxId + 1;
      this.todos.push(t);
    }

}
