import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';


const routes: Routes = [
  {
    path: 'home',
    loadChildren: './components/home/home.module#HomeModule'
  },
  {
    path: 'save',
    loadChildren: './components/save/save.module#SaveModule'
  },
  {
    path: '**',
    loadChildren: './components/home/home.module#HomeModule'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
