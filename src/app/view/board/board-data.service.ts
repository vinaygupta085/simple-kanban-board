import { Injectable } from '@angular/core';
import { Store } from '@ngrx/store';
import { Stage, TaskInfo } from 'src/app/models';
import { AddTask, DeleteTask, RearrangeTask } from 'src/app/store/kanban-board/kanban-board.actions';
import { getTasks } from 'src/app/store/kanban-board/kanban-board.selectors';
import { AppState } from 'src/app/store/reducers';

@Injectable({
  providedIn: 'root'
})
export class BoardDataService {

  public readonly tasks$ = this.store.select(getTasks);

  constructor(
    private store: Store<AppState>
  ) { }

  saveTask(task: TaskInfo): void {
    task.stage = Stage.ToDO;
    this.store.dispatch(AddTask(task));
  }

  deleteTask(task: TaskInfo): void {
    this.store.dispatch(DeleteTask(task));
  }

  rearrangeTask(task: TaskInfo): void {
    this.store.dispatch(RearrangeTask(task));
  }
}
