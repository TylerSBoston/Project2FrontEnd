import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FinanceManagerComponent } from './finance-manager.component';

describe('FinanceManagerComponent', () => {
  let component: FinanceManagerComponent;
  let fixture: ComponentFixture<FinanceManagerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FinanceManagerComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FinanceManagerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
