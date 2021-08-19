import { createAction, props } from '@ngrx/store';

export enum ActionTypes {
  Add = '[Todo component] Add',
  Edit = '[Todo component] Edit',
  Remove = '[Todo component Remove]',
}

export const add = createAction(ActionTypes.Add, props<{ todo: TodoState }>());
export const edit = createAction(ActionTypes.Edit);

export const remove = createAction(
  ActionTypes.Remove,
  props<{ todo: TodoState }>()
);

export interface TodoState {
  id: number;
  text: string;
  dateTime: Date;
}
