import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent implements OnInit {
  title = 'ngx-steps-app';
  steps: any[] = [];

  ngOnInit(): void {
    this.steps = [1, 2, 3, 4];
  }
}
