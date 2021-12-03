import { createAction, props } from "@ngrx/store";
import { TaskInfo } from "src/app/models";

const actions = {
  ADD_TASK: '[Kanban] Add Task'
};

export const AddTask = createAction(actions.ADD_TASK, props<TaskInfo>());
