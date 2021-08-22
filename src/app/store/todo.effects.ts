import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { pipe } from 'rxjs';
import { map, mergeMap, tap } from 'rxjs/operators';

import { TodoApiService } from '../services/todo-api.service';
import { ActionTypes } from './todo.actions';

@Injectable()
export class TodoEffects {
  saveTodo$ = createEffect(() =>
    this.actions$.pipe(
      ofType(ActionTypes.Add),
      mergeMap((res) =>
        this.todoApiService
          .create(res)
          .pipe(
            map((res) => ({ type: ActionTypes.AddedSuccess, payload: res }))
          )
      )
    )
  );

  deleteTodo$ = createEffect(() =>
    this.actions$.pipe(
      ofType(ActionTypes.Remove),
      mergeMap((res) =>
        this.todoApiService
          .remove(res)
          .pipe(
            map((res) => ({ type: ActionTypes.RemoveSuccess, payload: res }))
          )
      )
    )
  );

  constructor(
    private actions$: Actions,
    private todoApiService: TodoApiService
  ) {}
}
