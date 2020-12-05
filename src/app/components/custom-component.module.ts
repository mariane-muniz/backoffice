import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { EntityDatagridComponent } from './entity-datagrid/entity-datagrid.component';
import { EntityModifierComponent } from './entity-modifier/entity-modifier.component';

const components = [
  EntityDatagridComponent, EntityModifierComponent
];


@NgModule({
  declarations: components,
  exports: components,
  imports: [
    CommonModule
  ]
})
export class CustomComponentModule { }
