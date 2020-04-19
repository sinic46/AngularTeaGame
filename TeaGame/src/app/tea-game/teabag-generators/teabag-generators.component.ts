import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { interval, Subscription } from 'rxjs';

@Component({
  selector: 'app-teabag-generators',
  templateUrl: './teabag-generators.component.html',
  styleUrls: ['./teabag-generators.component.css']
})
export class TeabagGeneratorsComponent implements OnInit {

  @Output() teaBagCreated = new EventEmitter<{ teaBagsMade: number, LeafCost: number, FilterCost: number }>();
  @Output() AlterMoney = new EventEmitter<{ Value: number }>();

  @Input('EngineerStats') EngineerStats: {
    autoTeaBagMakers: boolean

    , TBMMaxSpeedLevel: number
    , TBMCreateSpeed: number
    , TBMUpgradeSpeedPrice: number
    , TBMMaxLeafLevel: number
    , TBMCreateLeafLevel: number
    , TBMUpgradeLeafPrice: number
    , TBMMaxFilterLevel: number
    , TBMCreateFilterLevel: number
    , TBMUpgradeFilterPrice: number
  };

  @Input('teaStats') teaStats: {
    money: number
    , teaBags: number
    , teaBagPrice: number
    , teaBagDemand: number
    , teaLeaves: number
    , teaLeafPrice: number
    , teaFilterPaper: number
    , teaFilterPaperPrice: number
  };


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


  CreateNewTeaBagGenerator() {

    if (this.teaStats.money > this.GeneratorPrice) {
      this.teaGenerators.push({
        name: "Auto bagga " + (this.teaGenerators.length + 1).toString()
        , TBPS: 1, Speedlevel: this.EngineerStats.TBMCreateSpeed
        , LeavesUsed: 5, LeafLevel: this.EngineerStats.TBMCreateLeafLevel
        , FiltersUsed: 4, FilterLevel: this.EngineerStats.TBMCreateFilterLevel
      })
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

      this.teaBagCreated.emit({ teaBagsMade: teaBagsMade, LeafCost: teaLeavesUsed, FilterCost: teaFiltersUsed });

    } else {
      console.log("no generators");

    }


  }

  upgradeSpeed(machine: { name: string, TBPS: number, Speedlevel: number, LeavesUsed: number, LeafLevel: number, FiltersUsed: number, FilterLevel: number }) {

    let upgradePrice = this.getUpgradePrice(machine.Speedlevel)

    if (this.teaStats.money >= upgradePrice) {
      this.AlterMoney.emit({ Value: upgradePrice * -1 })
      machine.Speedlevel += 1;
      machine.TBPS += 1
      console.log("upgrade complete");

    } else {
      console.log("upgrade failed");
      console.log(this.teaStats.money + " - " + this.EngineerStats.TBMUpgradeSpeedPrice);
    }


  }

  upgradeLeaf(machine: { name: string, TBPS: number, Speedlevel: number, LeavesUsed: number, LeafLevel: number, FiltersUsed: number, FilterLevel: number }) {

    let upgradePrice = this.getUpgradePrice(machine.LeafLevel)

    if (this.teaStats.money >= upgradePrice) {
      this.AlterMoney.emit({ Value: upgradePrice * -1 })
      machine.LeafLevel += 1;
      machine.LeavesUsed -= 1
      console.log("upgrade complete");

    } else {
      console.log("upgrade failed");
      console.log(this.teaStats.money + " - " + this.EngineerStats.TBMUpgradeSpeedPrice);
    }


  }

  upgradeFilter(machine: { name: string, TBPS: number, Speedlevel: number, LeavesUsed: number, LeafLevel: number, FiltersUsed: number, FilterLevel: number }) {
    let upgradePrice = this.getUpgradePrice(machine.FilterLevel)
    if (this.teaStats.money >= upgradePrice) {
      this.AlterMoney.emit({ Value: upgradePrice * -1 })
      machine.FilterLevel += 1;
      machine.FiltersUsed -= 0.5
      console.log("upgrade complete");
    }
  }


  speedUpgradePossible(machine: { name: string, TBPS: number, Speedlevel: number, LeavesUsed: number, LeafLevel: number, FiltersUsed: number, FilterLevel: number }) {
    if (this.EngineerStats.TBMMaxSpeedLevel > machine.Speedlevel) {
      if (this.getUpgradePrice(machine.Speedlevel) <= this.teaStats.money) {
        return false;
      }
      return true;
    } else {
      return true;
    }
  }

  leafUpgradePossible(machine: { name: string, TBPS: number, Speedlevel: number, LeavesUsed: number, LeafLevel: number, FiltersUsed: number, FilterLevel: number }) {

    if (this.EngineerStats.TBMMaxLeafLevel > machine.LeafLevel) {
      if (this.getUpgradePrice(machine.LeafLevel) <= this.teaStats.money) {
        return false;
      }
      return true;
    } else {
      return true;
    }
  }

  filterUpgradePossible(machine: { name: string, TBPS: number, Speedlevel: number, LeavesUsed: number, LeafLevel: number, FiltersUsed: number, FilterLevel: number }) {

    if (this.EngineerStats.TBMMaxFilterLevel > machine.FilterLevel) {
      if (this.getUpgradePrice(machine.FilterLevel) <= this.teaStats.money) {
        return false;
      }
    } else {
      return true;
    }
  }

  getUpgradePrice(level: number) {

    let price: number;

    switch (level) {
      case 1:
        price = 25;
        break;
      case 2:
        price = 50;
        break;
      case 3:
        price = 100;
        break;
      case 4:
        price = 200;
        break;
    }
    return price;
  }


}

