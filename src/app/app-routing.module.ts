import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'board',
    data: { moduleName: 'BoardModule' },
    loadChildren: () => import('./view/board/board.module').then( modules => modules.BoardModule)
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
