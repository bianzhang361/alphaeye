import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BaseviewComponent } from './baseview.component';

describe('BaseviewComponent', () => {
  let component: BaseviewComponent;
  let fixture: ComponentFixture<BaseviewComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BaseviewComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BaseviewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
