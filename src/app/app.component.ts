import {MediaMatcher} from '@angular/cdk/layout';
import {ChangeDetectorRef, Component, OnDestroy} from '@angular/core';
import {ModelService} from './model/model.service';

@Component({
  selector: 'app-component',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
})
export class AppComponent implements OnDestroy {
  mobileQuery: MediaQueryList;

  fillerNav = Array.of('Home', 'Save', 'Delete', 'Search', 'Update', 'Utils');

  private readonly _mobileQueryListener: () => void;

  model: ModelService;

  constructor(changeDetectorRef: ChangeDetectorRef, media: MediaMatcher, private _model: ModelService) {
    this.model = _model;
    this.mobileQuery = media.matchMedia('(max-width: 600px)');
    this._mobileQueryListener = () => changeDetectorRef.detectChanges();
    this.mobileQuery.addListener(this._mobileQueryListener);
  }

  ngOnDestroy(): void {
    this.mobileQuery.removeListener(this._mobileQueryListener);
  }
}
