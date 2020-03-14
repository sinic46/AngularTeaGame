import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GetTeaLeavesComponent } from './get-tea-leaves.component';

describe('GetTeaLeavesComponent', () => {
  let component: GetTeaLeavesComponent;
  let fixture: ComponentFixture<GetTeaLeavesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GetTeaLeavesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GetTeaLeavesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
