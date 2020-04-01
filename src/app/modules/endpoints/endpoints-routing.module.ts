import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {SaveComponent} from './ts-components/save.component';
import {SearchComponent} from './ts-components/search.component';
import {DeleteComponent} from './ts-components/delete.component';
import {UpdateComponent} from './ts-components/update.component';
import {UtilsComponent} from './ts-components/utils.component';


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
