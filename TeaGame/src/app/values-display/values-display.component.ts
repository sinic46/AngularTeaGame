import { Component, OnInit, Input } from '@angular/core';
import { interval } from 'rxjs';


@Component({
  selector: 'app-values-display',
  templateUrl: './values-display.component.html',
  styleUrls: ['./values-display.component.css']

})
export class ValuesDisplayComponent implements OnInit {

  @Input('teaStats') teaStats: {
    money: number, teaBags: number, teaBagPrice: number, teaBagDemand: number, teaLeaves: number,
    teaLeafPrice: number, teaFilterPaper: number, teaFilterPaperPrice: number
  };

  constructor() { };


  ngOnInit(): void {
    interval(1000).subscribe(x => {
      this.sellTeaBag();
    });
  }


  AddTeaBag() {
    //GlobalValues.

    /*if(TeaLeaves >= 5)
    {
      
      GlobalValues.TeaLeaves -=5;
      this.TeaBags ++;
    }*/

  }

  sellTeaBag() {
    //console.log("try to sell teabag")
    /**if(this.TeaBags > 0){
      this.TeaBags --;
      this.cash += this.teaBagPrice;
      this.cashDisplay = this.cash.toFixed(2);
      
    }**/
  }

}
