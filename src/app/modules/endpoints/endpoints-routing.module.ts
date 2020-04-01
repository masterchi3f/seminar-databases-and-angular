import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {SaveComponent} from './save.component';
import {SearchComponent} from './search.component';
import {DeleteComponent} from './delete.component';
import {UpdateComponent} from './update.component';
import {UtilsComponent} from './utils.component';


const routes: Routes = [
  {
    path: 'save',
    component: SaveComponent
  },
  {
    path: 'search',
    component: SearchComponent
  },
  {
    path: 'delete',
    component: DeleteComponent
  },
  {
    path: 'update',
    component: UpdateComponent
  },
  {
    path: 'utils',
    component: UtilsComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class EndpointsRoutingModule { }
