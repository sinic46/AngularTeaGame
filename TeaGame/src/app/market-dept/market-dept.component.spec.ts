import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MarketDeptComponent } from './market-dept.component';

describe('MarketDeptComponent', () => {
  let component: MarketDeptComponent;
  let fixture: ComponentFixture<MarketDeptComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MarketDeptComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MarketDeptComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
