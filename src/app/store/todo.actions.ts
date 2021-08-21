import { createAction, props } from '@ngrx/store';

export enum ActionTypes {
  Add = '[Todo component] Add',
  Remove = '[Todo component Remove]',
}

export const add = createAction(ActionTypes.Add, props<TodoState>());
export const remove = createAction(ActionTypes.Remove, props<TodoState>());

export interface TodoState {
  id: number;
  text: string;
  dateTime: Date;
}
