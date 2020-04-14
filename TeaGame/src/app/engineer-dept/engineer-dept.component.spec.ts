import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EngineerDeptComponent } from './engineer-dept.component';

describe('EngineerDeptComponent', () => {
  let component: EngineerDeptComponent;
  let fixture: ComponentFixture<EngineerDeptComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EngineerDeptComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EngineerDeptComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
