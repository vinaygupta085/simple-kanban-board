import { ActionReducerMap, createReducer } from '@ngrx/store';
import { KanbanBoard } from './kanban-board/kanban-board.model';

import * as fromKanban from './kanban-board/kanban-board.reducer';

export interface AppState {
	kanban: KanbanBoard;
}

export const initialState: AppState = {
	kanban: fromKanban.initialState
};

export const reducers: ActionReducerMap<AppState> = {
	kanban: fromKanban.kanbanReducer
}
