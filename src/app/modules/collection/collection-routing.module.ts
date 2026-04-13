import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CollectionListComponent } from './collection-list/collection-list.component';

const routes: Routes = [
  {
    path: '',
    component: CollectionListComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CollectionRoutingModule { }
