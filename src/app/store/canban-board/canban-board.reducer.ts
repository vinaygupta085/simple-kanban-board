import { state } from '@angular/animations';
import { createReducer, on } from '@ngrx/store';
import { Stage, TaskInfo } from 'src/app/models';
import { AddTask } from './canban-board.actions';

export interface State {
	tasks: TaskInfo[];
}

export const initialState: State = {
	tasks: [
    { id : 1, name: 'Task1', stage: Stage.Done},
    { id : 2, name: 'Task2', stage: Stage.Done},
    { id : 3, name: 'Task3', stage: Stage.Implementing},
    { id : 4, name: 'Task4', stage: Stage.Done},
    { id : 5, name: 'Task5', stage: Stage.Implementing},
    { id : 6, name: 'Task6', stage: Stage.Implementing},
    { id : 7, name: 'Task7', stage: Stage.ToDO},
    { id : 8, name: 'Task8', stage: Stage.Done},
    { id : 9, name: 'Task9', stage: Stage.ToDO},
  ]
};

export const canbanReducer = createReducer(
	initialState,
  on(AddTask, (state, task) => {
    return {
      ...state,
      tasks: [task, ...state.tasks],
     };
  })
);
