import { Component, OnDestroy, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { ToastrService } from 'ngx-toastr';
import { Observable, Subscription } from 'rxjs';

import { add, remove, TodoState } from './store/todo.actions';
import { TodoEffects } from './store/todo.effects';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit, OnDestroy {
  todo$!: Observable<TodoState[]>;

  private sub$ = new Subscription();

  constructor(
    private store: Store<{ todo: TodoState[] }>,
    private todoEffects: TodoEffects,
    private toast: ToastrService
  ) {
    this.todo$ = store.select('todo');
  }

  ngOnInit() {
    this.listenEvents();
  }

  ngOnDestroy() {
    this.sub$.unsubscribe();
  }

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

  private listenEvents() {
    this.sub$.add(
      this.todoEffects.saveTodo$.subscribe((res) => {
        this.toast.success(`Se ha agregado la tarea: ${res.payload.text}`);
      })
    );
  }
}
