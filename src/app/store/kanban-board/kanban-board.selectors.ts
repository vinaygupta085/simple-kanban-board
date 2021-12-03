import { createFeatureSelector, createSelector } from "@ngrx/store";
import { State } from "./kanban-board.reducer";

const selectKanbanState = createFeatureSelector<State>('kanban');

export const getTasks = createSelector(
  selectKanbanState,
  (state: State) => state.tasks
);
