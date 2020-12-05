import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DatagridComponent } from './pages/datagrid/datagrid.component';

const routes: Routes = [
  // {
  //   path: '',
  //   loadChildren: () => import('./pages/page.module').then((m) => m.PageModule)
  // }
  {
    path: '',
    component: DatagridComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
