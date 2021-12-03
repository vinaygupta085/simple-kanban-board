import { CdkDragDrop, moveItemInArray, transferArrayItem } from '@angular/cdk/drag-drop';
import { Component, OnDestroy, OnInit } from '@angular/core';

import { Stage, TaskInfo } from 'src/app/models';
import { SubSink } from 'subsink';
import { BoardDataService } from '../../board-data.service';

@Component({
  selector: 'app-tasks',
  templateUrl: './tasks.component.html',
  styleUrls: ['./tasks.component.scss']
})
export class TasksComponent implements OnInit, OnDestroy {

  readonly subs = new SubSink();
  tasks: TaskInfo[] = [];
  todo: TaskInfo[] = [];
  implemneting: TaskInfo[] = [];
  done: TaskInfo[] = [];

  constructor(
    private boardDataService: BoardDataService
  ) { }

  ngOnInit(): void {
    // this.tasks = [
    //   { id : 1, name: 'Task1', stage: Stage.Done},
    //   { id : 2, name: 'Task2', stage: Stage.Done},
    //   { id : 3, name: 'Task3', stage: Stage.Implementing},
    //   { id : 4, name: 'Task4', stage: Stage.Done},
    //   { id : 5, name: 'Task5', stage: Stage.Implementing},
    //   { id : 6, name: 'Task6', stage: Stage.Implementing},
    //   { id : 7, name: 'Task7', stage: Stage.ToDO},
    //   { id : 8, name: 'Task8', stage: Stage.Done},
    //   { id : 9, name: 'Task9', stage: Stage.ToDO},
    // ];
    this.subs.sink = this.boardDataService.tasks$.subscribe(tasks => {
      this.tasks = tasks;

      this.todo = this.tasks.filter( task => task.stage === Stage.ToDO);
      this.implemneting = this.tasks.filter( task => task.stage === Stage.Implementing);
      this.done = this.tasks.filter( task => task.stage === Stage.Done);
    });
  }

  saveTask(task: TaskInfo): void {
    this.boardDataService.saveTask(task);
  }

  drop(event: CdkDragDrop<TaskInfo[]>) {

    if (event.previousContainer === event.container) {
      moveItemInArray(event.container.data, event.previousIndex, event.currentIndex);
    } else {
      transferArrayItem(
        event.previousContainer.data,
        event.container.data,
        event.previousIndex,
        event.currentIndex,
      );
    }
  }

  ngOnDestroy(): void {

    this.subs.unsubscribe();
    // local storage
  }

}
