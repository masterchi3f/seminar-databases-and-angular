import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SaveRoutingModule } from './save-routing.module';
import {SaveComponent} from './save.component';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {MaterialModule} from '../../../material-module';
import {FlexLayoutModule} from '@angular/flex-layout';
import {TestDisplayerModule} from '../../components/test-displayer/test-displayer.module';

@NgModule({
  declarations: [SaveComponent],
  imports: [
    CommonModule,
    SaveRoutingModule,
    FormsModule,
    MaterialModule,
    ReactiveFormsModule,
    FlexLayoutModule,
    TestDisplayerModule
  ],
  exports: [
    SaveComponent
  ],
})
export class SaveModule { }
