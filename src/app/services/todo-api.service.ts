import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

import { Observable } from 'rxjs';
import { delay, tap } from 'rxjs/operators';

import { TodoState } from '../store/todo.actions';

@Injectable({
  providedIn: 'root',
})
export class TodoApiService {
  constructor(private http: HttpClient) {}

  create(todo: TodoState): Observable<TodoState> {
    const fakeObservable = new Observable<TodoState>((obs) => {
      obs.next(todo);
      obs.complete();
    });

    return fakeObservable.pipe(delay(1000)).pipe(
      tap(() => {
        console.log(`Todo request saved`, todo);
      })
    );
  }

  remove(todo: TodoState): Observable<TodoState> {
    const fakeObservable = new Observable<TodoState>((obs) => {
      obs.next(todo);
      obs.complete();
    });

    return fakeObservable.pipe(delay(1000)).pipe(
      tap(() => {
        console.log(`Todo request removed`, todo);
      })
    );
  }
}
