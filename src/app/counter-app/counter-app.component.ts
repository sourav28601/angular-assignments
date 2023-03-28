import { Component } from '@angular/core';

@Component({
  selector: 'app-counter-app',
  templateUrl: './counter-app.component.html',
  styleUrls: ['./counter-app.component.css']
})
export class CounterAppComponent {
  counter: number = 0;

  incrementCounter() {
    this.counter++;
  }

  decrementCounter() {
    if (this.counter > 0) {
      this.counter--;
    }
  }
}
