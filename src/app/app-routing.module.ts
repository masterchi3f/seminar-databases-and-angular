import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';


const routes: Routes = [
  {
    path: 'history',
    loadChildren: './modules/history/history.module#HistoryModule'
  },
  {
    path: 'endpoints',
    loadChildren: './modules/endpoints/endpoints.module#EndpointsModule'
  },
  {
    path: '**',
    loadChildren: './modules/history/history.module#HistoryModule'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
