import { createReducer, on } from '@ngrx/store';
import { TaskInfo } from 'src/app/models';

export interface State {
	tasks: TaskInfo[];
}

export const initialState: State = {
	tasks: []
};

export const canbanReducer = createReducer(
	initialState
);
