import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TeabagGeneratorsComponent } from './teabag-generators.component';

describe('TeabagGeneratorsComponent', () => {
  let component: TeabagGeneratorsComponent;
  let fixture: ComponentFixture<TeabagGeneratorsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TeabagGeneratorsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TeabagGeneratorsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
