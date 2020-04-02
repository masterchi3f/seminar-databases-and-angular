import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';

import {HomeRoutingModule} from './home-routing.module';
import {HomeComponent}     from './home.component';
import {FormsModule}       from '@angular/forms';
import {FlexLayoutModule}  from '@angular/flex-layout';
import {MaterialModule}    from '../../../material-module';


@NgModule({
  declarations: [HomeComponent],
  imports: [
    CommonModule,
    HomeRoutingModule,
    FormsModule,
    FlexLayoutModule,
    MaterialModule,
  ],
  exports: [
    HomeComponent
  ],
})
export class HomeModule { }
