import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { BoardRoutingModule } from './board-routing.module';
import { TasksComponent } from './kanban/tasks/tasks.component';
import { SharedModule } from 'src/app/shared/shared.module';
import { SectionComponent } from './kanban/tasks/sections/section/section.component';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    TasksComponent,
    SectionComponent
  ],
  imports: [
    CommonModule,
    BoardRoutingModule,
    SharedModule,
    FormsModule
  ],
})
export class BoardModule { }
