import { state } from '@angular/animations';
import { createReducer, on } from '@ngrx/store';
import { maxID } from 'src/app/common/util';
import { Stage, TaskInfo } from 'src/app/models';
import { AddTask, DeleteTask, RearrangeTask } from './kanban-board.actions';

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

export const kanbanReducer = createReducer(
  initialState,
  on(AddTask, (state, task) => {
    return {
      ...state,
      tasks: [
        {
          id: maxID(state.tasks),
          name: task.name,
          stage: task.stage,
          new: true
        },
        ...state.tasks
      ],
    };
  }),
  on(DeleteTask, (state, task) => {
    return {
      ...state,
      tasks: [...state.tasks.filter(v => v.id !== task.id)],
    };
  }),
  on(RearrangeTask, (state, task) => {
    return {
      ...state,
      tasks: [
        task,
        ...state.tasks.filter(v => v.id !== task.id)
      ],
    };
  })
);
