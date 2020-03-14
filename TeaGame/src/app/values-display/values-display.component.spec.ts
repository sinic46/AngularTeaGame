import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ValuesDisplayComponent } from './values-display.component';

describe('ValuesDisplayComponent', () => {
  let component: ValuesDisplayComponent;
  let fixture: ComponentFixture<ValuesDisplayComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ValuesDisplayComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ValuesDisplayComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
