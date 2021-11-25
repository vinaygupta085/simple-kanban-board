import { TaskInfo } from "../view/board/kanban/model";

export function maxID(tasks: TaskInfo[]): number {
  const newtTask = tasks.reduce((p, c) => Number(p.id) > Number(c.id) ? p : c);
  return + newtTask.id + 1;
}
