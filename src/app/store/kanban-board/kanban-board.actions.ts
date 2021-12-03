import { createAction, props } from "@ngrx/store";
import { TaskInfo } from "src/app/models";

const actions = {
  ADD_TASK: '[Kanban] Add Task',
  REARRANGE_Task: '[Kanban] Rearrange Task sortOrder/stage',
  DELETE_TASK: '[Kanban] Delete Task'
};

export const AddTask = createAction(actions.ADD_TASK, props<TaskInfo>());
export const RearrangeTask = createAction(actions.REARRANGE_Task, props<TaskInfo>());
export const DeleteTask = createAction(actions.DELETE_TASK, props<TaskInfo>());
