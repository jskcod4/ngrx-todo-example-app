import { createAction, props } from '@ngrx/store';

export enum ActionTypes {
  Add = '[Todo component] Add',
  Remove = '[Todo component] Remove',
  AddedSuccess = '[Todo Api Service] Added with success',
  RemoveSuccess = '[Todo Api Service] Removed with success',
}

export const add = createAction(ActionTypes.Add, props<TodoState>());
export const remove = createAction(ActionTypes.Remove, props<TodoState>());

export interface TodoState {
  id: number;
  text: string;
  dateTime: Date;
}
