import {Component, EventEmitter, Input, OnInit, Output, ViewChild} from '@angular/core';
import {Step} from '../../data-classes/step';
import {MatVerticalStepper} from '@angular/material/stepper';

@Component({
  selector: 'app-stepper-vertical',
  templateUrl: './stepper-vertical.component.html',
  styleUrls: ['./stepper-vertical.component.scss'],
})
export class StepperVerticalComponent implements OnInit {
  @ViewChild('stepper') stepper: MatVerticalStepper;

  @Input()
  public Steps: Step[];

  @Output()
  public FireClicked = new EventEmitter();

  ngOnInit() {
  }

  fire() {
    this.FireClicked.emit();
  }

  trackByIdx(index: number): number {
    return index;
  }

  checkSteps(step: Step): boolean {
    return step.Value !== '';
  }


  public Reset() {
    this.stepper.reset();
  }
}
