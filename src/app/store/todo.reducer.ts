import { Action, createReducer, on } from '@ngrx/store';

import { add, remove, TodoState } from './todo.actions';

export const initialState: TodoState[] = [];

const _todoReducer = createReducer(
  initialState,
  on(add, (state, todo) => [...state, { ...todo }]),
  on(remove, (state, todo) => state.filter((state) => state.id !== todo.id))
);

export function todoReducer(state: TodoState[] | undefined, action: Action) {
  return _todoReducer(state, action);
}
