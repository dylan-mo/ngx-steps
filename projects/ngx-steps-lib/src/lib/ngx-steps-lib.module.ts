import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { NgxStepsLibComponent } from './ngx-steps-lib.component';
import { CommonModule } from '@angular/common';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [NgxStepsLibComponent],
  exports: [NgxStepsLibComponent],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class NgxStepsLibModule { }
