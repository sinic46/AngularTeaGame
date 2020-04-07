import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-tea-game',
  templateUrl: './tea-game.component.html',
  styleUrls: ['./tea-game.component.css']
})
export class TeaGameComponent implements OnInit {

  title = 'TeaGame';

  TeaBags: number = 10;
  TeaLeaves:number = 500;
  money = 0.00;
  teaBagPrice:number = 0.05;
  teaBagDemand:number = 10;

  constructor() { }

  ngOnInit(): void {
  }

  getStats(){
    return {teaBags: this.TeaBags
      ,   teaLeaves: this.TeaLeaves
      ,   money: this.money
      ,   teaBagPrice: this.teaBagPrice
      ,   teaBagDemand: this.teaBagDemand
    }
    
  }
}
