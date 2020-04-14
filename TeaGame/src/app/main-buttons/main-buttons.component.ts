import { Component, OnInit, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-main-buttons',
  templateUrl: './main-buttons.component.html',
  styleUrls: ['./main-buttons.component.css']
})
export class MainButtonsComponent implements OnInit {

  @Output() teaBagCreated = new EventEmitter<{ teaBagsMade: number, LeafCost: number, FilterCost:number }>();
  @Output() PriceChange = new EventEmitter<{ PriceChange: number }>();
  @Output() buyLeaves = new EventEmitter<{}>();
  @Output() buyFilters = new EventEmitter<{}>();

  @Input('teaStats') teaStats: {
    money: number, teaBags: number, teaBagPrice: number, teaBagDemand: number, teaLeaves: number,
    teaLeafPrice: number, teaFilterPaper: number, teaFilterPaperPrice: number
  };

  constructor() { }

  ngOnInit(): void {
  }

  canMakeTeaBag() {
    if ((this.teaStats.teaFilterPaper <= 0) || (this.teaStats.teaLeaves <= 0)) {
      return true;
    }
    else {
      return false;
    }

  }

  canBuyLeaves() {
    if (this.teaStats.money < this.teaStats.teaLeafPrice) {
      return true;
    } else {
      return false;
    }
  }

  canBuyfilter() {
    if (this.teaStats.money < this.teaStats.teaFilterPaperPrice) {
      return true;
    } else {
      return false;
    }
  }

  MakeTeaBag() {
    this.teaBagCreated.emit({ teaBagsMade: 1, LeafCost: 2, FilterCost:1 });
  }

  ChangePrice(priceChange: number) {
    this.PriceChange.emit({ PriceChange: priceChange })
  }

  buyTeaLeaves() {
    this.buyLeaves.emit({})
  }

  buyTeaFilters(){
    this.buyFilters.emit({})
  }
}
