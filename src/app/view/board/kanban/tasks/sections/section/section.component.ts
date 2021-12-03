import { Component, Input, OnInit, Output, EventEmitter } from '@angular/core';
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
  @Output() onRemoveTask = new EventEmitter<TaskInfo>();

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

  removeTask(event: MouseEvent, task: TaskInfo): void {
    //TODO: add a confirmation from user before remove
    this.onRemoveTask.emit(task);
  }

  saveTask(event: MouseEvent): void {
     this.onSaveTask.emit({
      id: 0,
      name: this.taskName,
    });

    this.toggle();
  }

  toggle(event?: MouseEvent): void {
    this.addNew = !this.addNew ;
    this.taskName = 'New task';
  }

}
