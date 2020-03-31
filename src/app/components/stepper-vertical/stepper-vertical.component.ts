import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {ModelService}                                   from '../../model/model.service';
import {Step}                                           from '../../data-classes/step';

@Component({
  selector: 'app-stepper-vertical',
  templateUrl: './stepper-vertical.component.html',
  styleUrls: ['./stepper-vertical.component.scss'],
})
export class StepperVerticalComponent implements OnInit {

  @Input()
  public Steps: Step[];

  @Output()
  public FireClicked = new EventEmitter();

  steps: string[][];
  inputs: any[] = [];

  constructor(private _model: ModelService) {
    this.steps = _model.steps;
  }

  ngOnInit() {
  }

  fire() {
    this._model.inputs = this.inputs;
    console.log(this.Steps);
    this.FireClicked.emit();
  }

  trackByIdx(index: number): number {
    return index;
  }

}
