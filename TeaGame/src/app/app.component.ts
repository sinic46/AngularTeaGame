import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'TeaGame';

  TeaBags: number = 0;
  TeaLeaves = 500;
  cash = 0.00;
  cashDisplay = '0.00'
  teaBagPrice = 0.05;
  teaBagDemand = 10;

}
