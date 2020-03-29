import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SaveRoutingModule } from './save-routing.module';
import {SaveComponent} from './save.component';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {MaterialModule} from '../../../material-module';
import {StepperVerticalComponent} from '../../components/stepper-vertical/stepper-vertical.component';

@NgModule({
  declarations: [SaveComponent, StepperVerticalComponent],
  imports: [
    CommonModule,
    SaveRoutingModule,
    FormsModule,
    MaterialModule,
    ReactiveFormsModule
  ],
  exports: [
    SaveComponent, StepperVerticalComponent
  ],
})
export class SaveModule { }
