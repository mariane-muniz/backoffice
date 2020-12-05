import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DatagridComponent } from './datagrid/datagrid.component';
import { FragmentModule } from '../fragments/fragment.module';
import { CustomComponentModule } from '../components/custom-component.module';

const components = [
  DatagridComponent,
];

@NgModule({
  declarations: components,
  imports: [
    CommonModule,
    CustomComponentModule,
    FragmentModule,
  ],
})
export class PageModule { }
