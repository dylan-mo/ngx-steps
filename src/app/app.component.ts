import { Component, OnInit, ViewChild } from '@angular/core';
import { NgxStepsLibComponent } from 'ngx-steps-lib';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})

export class AppComponent implements OnInit {

  title = 'ngx-steps-app';
  steps: any[] = [];
  @ViewChild(NgxStepsLibComponent) private ngxStepsLib: NgxStepsLibComponent;

  ngOnInit(): void {
    this.steps = [1, 2, 3, 4];
  }

  preClick(event) {

    this.ngxStepsLib.previousStep();
  }

  nextClick(event) {
    this.ngxStepsLib.nextStep();
  }

}
