import { ActionReducerMap, createReducer } from '@ngrx/store';
import { CanbanBoard } from './canban-board/canban-board.model';

import * as fromCanban from './canban-board/canban-board.reducer';

export interface AppState {
	canban: CanbanBoard;
}

export const initialState: AppState = {
	canban: fromCanban.initialState
};

export const reducers: ActionReducerMap<AppState> = {
	canban: fromCanban.canbanReducer
}
