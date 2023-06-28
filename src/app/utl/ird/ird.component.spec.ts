import { ComponentFixture, TestBed } from '@angular/core/testing';

import { IrdComponent } from './ird.component';

describe('IrdComponent', () => {
  let component: IrdComponent;
  let fixture: ComponentFixture<IrdComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [IrdComponent]
    });
    fixture = TestBed.createComponent(IrdComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
