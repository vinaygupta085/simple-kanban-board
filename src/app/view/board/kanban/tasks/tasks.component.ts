import { CdkDragDrop, moveItemInArray, transferArrayItem } from '@angular/cdk/drag-drop';
import { Component, OnInit } from '@angular/core';
import { Stage, TaskInfo } from '../model';

@Component({
  selector: 'app-tasks',
  templateUrl: './tasks.component.html',
  styleUrls: ['./tasks.component.scss']
})
export class TasksComponent implements OnInit {

  todo: TaskInfo[] = [];
  implemneting: TaskInfo[] = [];
  done: TaskInfo[] = [];
  tasks: TaskInfo[] = [];

  constructor() { }

  ngOnInit(): void {
    this.tasks = [
      { id : 1, name: 'Task1', stage: Stage.Done},
      { id : 2, name: 'Task2', stage: Stage.Done},
      { id : 3, name: 'Task3', stage: Stage.Implementing},
      { id : 4, name: 'Task4', stage: Stage.Done},
      { id : 5, name: 'Task5', stage: Stage.Implementing},
      { id : 6, name: 'Task6', stage: Stage.Implementing},
      { id : 7, name: 'Task7', stage: Stage.ToDO},
      { id : 8, name: 'Task8', stage: Stage.Done},
      { id : 9, name: 'Task9', stage: Stage.ToDO},
    ];

    // get above data from api call, currently working with dummy data
    this.todo = this.tasks.filter( task => task.stage === Stage.ToDO);
    this.implemneting = this.tasks.filter( task => task.stage === Stage.Implementing);
    this.done = this.tasks.filter( task => task.stage === Stage.Done);
  }


  drop(event: CdkDragDrop<TaskInfo[]>) {
    console.log('drop', event.container.data);
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

}
