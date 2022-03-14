import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ListReimbursementComponent } from './list-reimbursement.component';



describe('ListReimbursementComponent', () => {
  let component: ListReimbursementComponent;
  let fixture: ComponentFixture<ListReimbursementComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListReimbursementComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ListReimbursementComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
