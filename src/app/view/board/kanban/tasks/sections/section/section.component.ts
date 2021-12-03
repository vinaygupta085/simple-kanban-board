import { Component, Input, OnInit, Output, EventEmitter } from '@angular/core';
import { maxID } from 'src/app/common/util';
import { Stage, TaskInfo } from 'src/app/models';

@Component({
  selector: 'app-section',
  templateUrl: './section.component.html',
  styleUrls: ['./section.component.scss']
})
export class SectionComponent implements OnInit {
  @Input() stage = 1;
  @Input() tasks: TaskInfo[] = [];
  @Output() onSaveTask = new EventEmitter<TaskInfo>();

  todo = false;
  addNew = false;
  title = '';
  taskName = 'New task';

  constructor() { }

  ngOnInit(): void {
    this.title = Stage[this.stage];
    this.todo = this.stage === Stage['ToDO'];
  }

  addTask(event: MouseEvent): void {
    this.toggle();
  }

  removeTask(event: MouseEvent, taskInfo: TaskInfo): void {
    //TODO: add a confirmation from user before remove
    this.tasks = this.tasks.filter( task => task.id !== taskInfo.id);
  }

  saveTask(event: MouseEvent): void {
    const newID = maxID(this.tasks);

    const newtask = {
      id: newID,
      name: this.taskName,
      stage: Stage.ToDO,
      new: true
    };

    this.onSaveTask.emit(newtask);

    this.toggle();
  }

  toggle(event?: MouseEvent): void {
    this.addNew = !this.addNew ;
    this.taskName = 'New task';
  }

}
