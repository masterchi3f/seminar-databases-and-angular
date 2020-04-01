import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {Step} from '../../data-classes/step';

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

  ngOnInit() {
  }

  fire() {
    this.FireClicked.emit();
  }

  trackByIdx(index: number): number {
    return index;
  }

}
