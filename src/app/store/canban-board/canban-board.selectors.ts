import { createFeatureSelector, createSelector } from "@ngrx/store";
import { State } from "./canban-board.reducer";

const selectKanbanState = createFeatureSelector<State>('canban');

export const getTasks = createSelector(
  selectKanbanState,
  (state: State) => state.tasks
);

