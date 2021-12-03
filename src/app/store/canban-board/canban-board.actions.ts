import { createAction, props } from "@ngrx/store";
import { TaskInfo } from "src/app/models";

const ADD_TASK = '[Kanban] Add Task';

export const AddTask = createAction(ADD_TASK, props<TaskInfo>());
