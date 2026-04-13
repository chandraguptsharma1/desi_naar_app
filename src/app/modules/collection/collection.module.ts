import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CollectionRoutingModule } from './collection-routing.module';
import { CollectionListComponent } from './collection-list/collection-list.component';


@NgModule({
  declarations: [
    CollectionListComponent
  ],
  imports: [
    CommonModule,
    CollectionRoutingModule
  ]
})
export class CollectionModule { }
