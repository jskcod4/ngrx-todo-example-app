import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { add, remove, TodoState } from './store/todo.actions';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit {
  todo$!: Observable<TodoState[]>;

  constructor(private store: Store<{ todo: TodoState[] }>) {
    this.todo$ = store.select('todo');
  }

  ngOnInit() {}

  submit(evt: HTMLFormElement) {
    const data = new FormData(evt);

    const text = data.get('text')?.toString();

    if (text?.trim() !== '') {
      this.store.dispatch(
        add({
          id: new Date().getTime(),
          text: text || '',
          dateTime: new Date(),
        })
      );

      evt.reset();
    }
  }

  delete(item: TodoState) {
    this.store.dispatch(
      remove({
        ...item,
      })
    );
  }
}
