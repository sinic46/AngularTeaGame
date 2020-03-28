import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TeaGameComponent } from './tea-game.component';

describe('TeaGameComponent', () => {
  let component: TeaGameComponent;
  let fixture: ComponentFixture<TeaGameComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TeaGameComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TeaGameComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
