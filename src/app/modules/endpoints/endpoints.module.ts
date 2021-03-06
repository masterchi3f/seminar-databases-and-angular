import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {EndpointsRoutingModule} from './endpoints-routing.module';
import {SaveComponent} from './ts-components/save.component';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {MaterialModule} from '../../../material-module';
import {FlexLayoutModule} from '@angular/flex-layout';
import {TestDisplayerModule} from '../../components/test-displayer/test-displayer.module';
import {SearchComponent} from './ts-components/search.component';
import {DeleteComponent} from './ts-components/delete.component';
import {UpdateComponent} from './ts-components/update.component';
import {UtilsComponent} from './ts-components/utils.component';

@NgModule({
  declarations: [
    SaveComponent,
    SearchComponent,
    DeleteComponent,
    UpdateComponent,
    UtilsComponent,
  ],
  imports: [
    CommonModule,
    EndpointsRoutingModule,
    FormsModule,
    MaterialModule,
    ReactiveFormsModule,
    FlexLayoutModule,
    TestDisplayerModule
  ],
  exports: [
    SaveComponent,
    SearchComponent,
    DeleteComponent,
    UpdateComponent,
    UtilsComponent,
  ],
})
export class EndpointsModule { }
