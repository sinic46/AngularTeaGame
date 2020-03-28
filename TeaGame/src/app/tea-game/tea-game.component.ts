import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-tea-game',
  templateUrl: './tea-game.component.html',
  styleUrls: ['./tea-game.component.css']
})
export class TeaGameComponent implements OnInit {

  title = 'TeaGame';

  TeaBags: number = 0;
  TeaLeaves = 500;
  cash = 0.00;
  cashDisplay = '0.00'
  teaBagPrice = 0.05;
  teaBagDemand = 10;

  constructor() { }

  ngOnInit(): void {
  }

}
