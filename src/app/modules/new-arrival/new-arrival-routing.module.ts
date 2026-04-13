import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { NewArrivalListComponent } from './new-arrival-list/new-arrival-list.component';

const routes: Routes = [
  {
    path: '',
    component: NewArrivalListComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class NewArrivalRoutingModule { }
