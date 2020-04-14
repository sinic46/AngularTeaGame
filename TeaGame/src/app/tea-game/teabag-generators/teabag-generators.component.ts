import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { interval, Subscription } from 'rxjs';

@Component({
  selector: 'app-teabag-generators',
  templateUrl: './teabag-generators.component.html',
  styleUrls: ['./teabag-generators.component.css']
})
export class TeabagGeneratorsComponent implements OnInit {

  teaGenerators = [];
  GeneratorPrice: number = 50;
  subscription: Subscription;


  constructor() {
    const source = interval(1000);

    this.subscription = source.subscribe(val => this.RepeatLoops(val));
  }
  ngOnInit(): void {
  }

  RepeatLoops(val: number) {
    //console.log("loop number: " + val);
    this.SellTea();
  }

  @Output() teaBagCreated = new EventEmitter<{ teaBagsMade: number, LeafCost: number, FilterCost: number }>();
  @Output() AlterMoney = new EventEmitter<{ Value: number }>();

  @Input('teaStats') teaStats: {
    money: number, teaBags: number, teaBagPrice: number, teaBagDemand: number, teaLeaves: number,
    teaLeafPrice: number, teaFilterPaper: number, teaFilterPaperPrice: number
  };

  CreateNewTeaBagGenerator() {

    if (this.teaStats.money > this.GeneratorPrice) {
      this.teaGenerators.push({ name: "Auto bagga " + (this.teaGenerators.length + 1).toString(), TBPS: 1, LeavesUsed: 5, FiltersUsed: 4 })
      this.AlterMoney.emit({ Value: (this.GeneratorPrice * -1) });
    } else {
      console.log("generator failed");

    }
  }

  SellTea() {
    if (this.teaGenerators.length > 0) {
      const teaBagsMadeArr = this.teaGenerators.map(i => i.TBPS);
      var teaBagsMade = teaBagsMadeArr.reduce((a, b) => a + b, 0)

      const teaLeavesUsedArr = this.teaGenerators.map(i => i.LeavesUsed);
      var teaLeavesUsed = teaLeavesUsedArr.reduce((a, b) => a + b, 0)

      const teaFiltersUsedArr = this.teaGenerators.map(i => i.FiltersUsed);
      var teaFiltersUsed = teaFiltersUsedArr.reduce((a, b) => a + b, 0)
      //console.log(teaBagsMade);
      //console.log("filters used :" + teaFiltersUsed);
      //console.log("leaves used :" + teaLeavesUsed);

      this.teaBagCreated.emit({teaBagsMade: teaBagsMade, LeafCost:teaLeavesUsed, FilterCost: teaFiltersUsed});
      
    }else{
      console.log("no generators");
      
    }


  }

}
