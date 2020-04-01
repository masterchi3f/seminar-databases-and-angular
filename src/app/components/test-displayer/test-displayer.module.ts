import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {TestDisplayerComponent} from './test-displayer.component';
import {MaterialModule} from '../../../material-module';
import {StepperVerticalModule} from '../stepper-vertical/stepper-vertical.module';
import {FlexLayoutModule} from '@angular/flex-layout';


@NgModule({
  declarations: [TestDisplayerComponent],
  imports: [
    CommonModule,
    MaterialModule,
    StepperVerticalModule,
    FlexLayoutModule,
  ],
  exports: [
    TestDisplayerComponent
  ]
})
export class TestDisplayerModule { }
