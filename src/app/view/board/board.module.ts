import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { BoardRoutingModule } from './board-routing.module';
import { TasksComponent } from './kanban/tasks/tasks.component';
import { SharedModule } from 'src/app/shared/shared.module';
import { SectionComponent } from './kanban/tasks/sections/section/section.component';

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
