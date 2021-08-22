import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { Observable } from 'rxjs';
import { map, mergeMap, catchError } from 'rxjs/operators';
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

  constructor(
    private actions$: Actions,
    private todoApiService: TodoApiService
  ) {}
}
