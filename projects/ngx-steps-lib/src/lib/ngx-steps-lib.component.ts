import { Component, Input, OnInit, ViewChild, OnDestroy } from '@angular/core';

@Component({
  // tslint:disable-next-line:component-selector
  selector: 'ngx-steps',
  templateUrl: './ngx-steps-lib.component.html',
  styleUrls: ['./ngx-steps-lib.scss']
})
export class NgxStepsLibComponent implements OnInit {

    @Input() steps: any[] = [];
    finishedSteps: any[] = [];
    focusingStep: number;
    untouchedSteps: any[] = [];

    constructor() {
    }

    ngOnInit() {
        const _this = this;

        _this.focusingStep = _this.getFocusingStep();
        _this.finishedSteps = _this.getFinishedSteps(_this.focusingStep);
        _this.untouchedSteps = _this.getUntouchedSteps(_this.focusingStep);
    }

    getFinishedSteps(focusingStep) {
        return this.steps.map((num) => {
            if (num < focusingStep) {
                return num;
            }
        });
    }

    getUntouchedSteps(focusingStep) {
        return this.steps.map((num) => {
            if (num > focusingStep) {
                return num;
            }
        });
    }

    getFocusingStep() {
        if (!this.focusingStep) {
          this.focusingStep = 1;
        }

        return this.focusingStep;
    }

    nextStep() {

        if (this.focusingStep <= this.steps.length) {
            this.focusingStep++;

            this.finishedSteps = this.getFinishedSteps(this.focusingStep);
            this.untouchedSteps = this.getUntouchedSteps(this.focusingStep);
        }

        return this.focusingStep;
    }

    previousStep() {
        const element = document.querySelector('#scrollId');
        if (this.focusingStep > 0) {
            this.focusingStep--;

            this.finishedSteps = this.getFinishedSteps(this.focusingStep);
            this.untouchedSteps = this.getUntouchedSteps(this.focusingStep);
        }

        return this.focusingStep;
    }

    changeFocusing(focusingStep) {
        this.focusingStep = focusingStep;

        this.finishedSteps = this.getFinishedSteps(focusingStep);
        this.untouchedSteps = this.getUntouchedSteps(focusingStep);

        return this.focusingStep;
    }

}
