import { TaskInfo } from 'src/app/models';

export function maxID(tasks: TaskInfo[]): number {
  if (tasks.length > 0) {
    const newtTask = tasks.reduce((p, c) => Number(p.id) > Number(c.id) ? p : c);
    return newtTask.id + 1;
  }
  return 1;
}
