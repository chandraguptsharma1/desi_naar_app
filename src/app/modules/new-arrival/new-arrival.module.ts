import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { NewArrivalRoutingModule } from './new-arrival-routing.module';

import { NewArrivalListComponent } from './new-arrival-list/new-arrival-list.component';


@NgModule({
  declarations: [
    NewArrivalListComponent
  ],
  imports: [
    CommonModule,
    NewArrivalRoutingModule
  ]
})
export class NewArrivalModule { }
