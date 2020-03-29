import {Component, OnInit} from '@angular/core';
import {ModelService} from '../../model/model.service';

@Component({
  selector: 'app-stepper-vertical',
  templateUrl: './stepper-vertical.component.html',
  styleUrls: ['./stepper-vertical.component.scss']
})
export class StepperVerticalComponent implements OnInit {

  steps: string[][];
  inputs: any[] = [];

  constructor(private _model: ModelService) {
    this.steps = _model.steps;
  }

  ngOnInit() {
  }

  fire() {
    this._model.inputs = this.inputs;
  }

  trackByIdx(index: number): number {
    return index;
  }

}
