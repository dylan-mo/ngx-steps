import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { NgxStepsLibComponent } from './ngx-steps-lib.component';
import { CommonModule } from '@angular/common';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';

import { library } from '@fortawesome/fontawesome-svg-core';
import { faCheck } from '@fortawesome/free-solid-svg-icons';

@NgModule({
  imports: [
    CommonModule,
    FontAwesomeModule
  ],
  declarations: [NgxStepsLibComponent],
  exports: [NgxStepsLibComponent],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class NgxStepsLibModule {
  constructor() {
    // Add an icon to the library for convenient access in other components
    library.add(faCheck);
  }
 }
