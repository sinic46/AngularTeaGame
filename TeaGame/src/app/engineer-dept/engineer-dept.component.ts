import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-engineer-dept',
  templateUrl: './engineer-dept.component.html',
  styleUrls: ['./engineer-dept.component.css']
})
export class EngineerDeptComponent implements OnInit {

  @Input('EngineerStats') EngineerStats: {
    autoTeaBagMakers: boolean
    , TBMMaxSpeed: number
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

  @Output() ResearchValueUpgrade = new EventEmitter<{ Research: string}>();

  constructor() { }



  ngOnInit(): void {
  }

  researchUpdate(ResearchArea: string){
    this.ResearchValueUpgrade.emit({Research:ResearchArea})
  }

}
