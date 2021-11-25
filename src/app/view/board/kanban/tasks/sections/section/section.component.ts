import { Component, Input, OnInit } from '@angular/core';
import { maxID } from 'src/app/common/util';
import { Stage, TaskInfo } from '../../../model';

@Component({
  selector: 'app-section',
  templateUrl: './section.component.html',
  styleUrls: ['./section.component.scss']
})
export class SectionComponent implements OnInit {
  @Input() stage = 1;
  @Input() tasks: TaskInfo[] = [];

  todo = false;
  addNew = false;
  title = '';
  taskName = 'New task';

  constructor() { }

  ngOnInit(): void {
    console.log('SectionComponent', this.stage);
    this.title = Stage[this.stage];
    this.todo = this.stage === Stage['ToDO'];
  }

  addTask(event: MouseEvent): void {
    console.log('addTask');
    this.toggle();
  }

  removeTask(event: MouseEvent, taskInfo: TaskInfo): void {
    console.log('removeTask', taskInfo);

    //TODO: add a confirmation from user before remove
    this.tasks = this.tasks.filter( task => task.id !== taskInfo.id);
  }

  saveTask(event: MouseEvent): void {
    console.log('saveTask', event);

    const newID = maxID(this.tasks);

    this.tasks.push({
      id: newID,
      name: this.taskName,
      stage: Stage.ToDO,
      new: true
    });

    this.toggle();
  }

  toggle(event?: MouseEvent): void {
    this.addNew = !this.addNew ;
    this.taskName = 'New task';
  }

}
