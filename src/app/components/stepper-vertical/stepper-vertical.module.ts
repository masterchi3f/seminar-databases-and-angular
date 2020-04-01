import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {StepperVerticalComponent} from './stepper-vertical.component';
import {MaterialModule} from '../../../material-module';
import {FormsModule} from '@angular/forms';

@NgModule({
  declarations: [StepperVerticalComponent],
  imports: [
    CommonModule,
    MaterialModule,
    FormsModule,
  ],
  exports:  [
    StepperVerticalComponent
  ]
})
export class StepperVerticalModule { }
