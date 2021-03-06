import { Component, OnInit } from '@angular/core';
import { interval, Subscription } from 'rxjs';

@Component({
  selector: 'app-tea-game',
  templateUrl: './tea-game.component.html',
  styleUrls: ['./tea-game.component.css']
})
export class TeaGameComponent implements OnInit {

  subscription: Subscription;

  title = 'TeaGame';

  /* visable variables */
  TeaBags: number = 0;
  teaBagPrice: number = 1.5;
  teaBagDemand: number = 30;
  totalTeaBagsMade: number = 0;

  TeaLeaves: number = 100;
  teaLeafPrice: number = 1.5;

  teaFilterPaper: number = 50;
  teaFilterPaperPrice: number = 0.5;
  money: number = 0.00;

  /* system used variables */

  /* generator variables */
  autoTeaBagMakers: boolean = false;
  TBMMaxSpeedLevel: number = 1
  TBMCreateSpeed: number = 1
  TBMUpgradeSpeedPrice: number = 25

  TBMMaxLeafLevel: number = 1
  TBMCreateLeafLevel: number = 1
  TBMUpgradeLeafPrice: number = 25

  TBMMaxFilterLevel: number = 1
  TBMCreateFilterLevel: number = 1
  TBMUpgradeFilterPrice: number = 25

  EngineerDept: boolean = false;
  MarketingDept: boolean = false;


  constructor() {
    const source = interval(5000);

    this.subscription = source.subscribe(val => this.RepeatLoops(val));
  }
  ngOnInit(): void {
  }

  RepeatLoops(val: number) {
    //console.log("loop number: " + val);
    this.sellingTea();
    this.developmentTree()
  }

  developmentTree() {
    if (this.totalTeaBagsMade > 200) {
      this.MarketingDept = true
      console.log("marketing on!");

    } else if (this.totalTeaBagsMade > 100) {
      this.EngineerDept = true
      console.log("engineering on!");

    } else if (this.totalTeaBagsMade > 20) {
      console.log("they are ready. . . .");
      this.autoTeaBagMakers = true;
    }
  }


  getStats() {
    return {
      money: this.money.toFixed(2)
      , teaBags: this.TeaBags
      , teaBagPrice: this.teaBagPrice.toFixed(2)
      , teaBagDemand: this.teaBagDemand
      , teaLeaves: this.TeaLeaves
      , teaLeafPrice: this.teaLeafPrice
      , teaFilterPaper: this.teaFilterPaper
      , teaFilterPaperPrice: this.teaFilterPaperPrice

    }
  }

  getEngineerStats() {
    return {
      autoTeaBagMakers: this.autoTeaBagMakers
      , TBMMaxSpeedLevel: this.TBMMaxSpeedLevel
      , TBMCreateSpeed: this.TBMCreateSpeed
      , TBMUpgradeSpeedPrice: this.TBMUpgradeSpeedPrice
      , TBMMaxLeafLevel: this.TBMMaxLeafLevel
      , TBMCreateLeafLevel: this.TBMCreateLeafLevel
      , TBMUpgradeLeafPrice: this.TBMUpgradeLeafPrice
      , TBMMaxFilterLevel: this.TBMMaxFilterLevel
      , TBMCreateFilterLevel: this.TBMCreateFilterLevel
      , TBMUpgradeFilterPrice: this.TBMUpgradeFilterPrice
    }
  }

  onMoneyChange(moneyChangeData: { Value: number }) {
    this.money += moneyChangeData.Value;
    this.money = Math.round(this.money * 100) / 100;
  }

  onBuyingTeaLeaves(buyingLeafData: {}) {
    if (this.teaLeafPrice <= this.money) {
      this.money -= this.teaLeafPrice;
      this.TeaLeaves += 100;
      console.log("bought Tea Leaves");

    }

  }

  ResearchUpgrade(ResearchData: { Research }) {
    if (ResearchData.Research == "Speed") {
      if ((this.TBMMaxSpeedLevel < 5) && (this.CheckResearchPrice(this.TBMMaxSpeedLevel) < this.money)) {
        this.money -= this.CheckResearchPrice(this.TBMMaxSpeedLevel);
        this.TBMMaxSpeedLevel += 1;
        this.TBMUpgradeSpeedPrice = this.CheckResearchPrice(this.TBMMaxSpeedLevel);
      }

    }
    else if (ResearchData.Research == "Leaf") {
      if ((this.TBMMaxLeafLevel < 5) && (this.CheckResearchPrice(this.TBMMaxLeafLevel) < this.money)) {
        this.money -= this.CheckResearchPrice(this.TBMMaxLeafLevel);
        this.TBMMaxLeafLevel += 1;
        this.TBMUpgradeLeafPrice = this.CheckResearchPrice(this.TBMMaxLeafLevel);
      }

    }
    else if (ResearchData.Research == "Filter") {
      if ((this.TBMMaxFilterLevel < 5) && (this.CheckResearchPrice(this.TBMMaxFilterLevel) < this.money)) {
        this.money -= this.CheckResearchPrice(this.TBMMaxFilterLevel);
        this.TBMMaxFilterLevel += 1;
        this.TBMUpgradeFilterPrice = this.CheckResearchPrice(this.TBMMaxFilterLevel);
      }

    }
  }

  CheckResearchPrice(level: number) {
    let price: number

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

  onBuyingTeaFilters(buyingFilterData: {}) {
    if (this.teaFilterPaperPrice <= this.money) {
      this.money -= this.teaFilterPaperPrice;
      this.teaFilterPaper += 50;
      console.log("bought Tea filter");
    }
  }

  onTeaBagMade(teaBagData: { teaBagsMade: number, LeafCost: number, FilterCost: number }) {

    if ((this.TeaLeaves >= teaBagData.LeafCost) && (this.teaFilterPaper >= teaBagData.FilterCost)) {
      this.TeaBags += teaBagData.teaBagsMade;
      this.TeaLeaves -= teaBagData.LeafCost;
      this.teaFilterPaper -= teaBagData.FilterCost;
      this.totalTeaBagsMade += teaBagData.teaBagsMade;;
    } else {
      console.log("tea bag fail")
    }
  }

  onPriceChanged(priceData: { PriceChange: number }) {

    this.teaBagPrice += priceData.PriceChange
    this.teaBagPrice = Math.round(this.teaBagPrice * 100) / 100;
    if (priceData.PriceChange > 0) {
      this.teaBagDemand -= 2;
    } else {
      this.teaBagDemand += 2;
    }

  }

  sellingTea() {

    if ((this.TeaBags > 0) && (this.teaBagDemand > 0)) {
      const bagsSold = Math.round(this.teaBagDemand / 4);


      const MoneyMade = bagsSold * this.teaBagPrice;
      if (bagsSold > this.TeaBags) {
        this.money += (this.TeaBags * this.teaBagPrice)
        console.log("tea Bags sold: " + this.TeaBags);
        this.TeaBags = 0

      } else {
        this.TeaBags -= bagsSold;
        this.money += MoneyMade;
        console.log("tea Bags sold: " + bagsSold);
      }
    } else {
      console.log("tea Bags sold: 0");
    }

  }
}
