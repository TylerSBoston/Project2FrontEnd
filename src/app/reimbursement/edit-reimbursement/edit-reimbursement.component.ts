import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Reimbursement } from '../reimbursement.model';
import { ReimbursementService } from '../reimbursement.service';
import { ListReimbursementComponent } from '../list-reimbursement/list-reimbursement.component';
import { Employee } from 'src/app/employee/employee.model';
import { AuthService } from 'src/app/employee/auth.service';



@Component({
  selector: 'app-edit-reimbursement',
  templateUrl: './edit-reimbursement.component.html',
  styleUrls: ['./edit-reimbursement.component.css']
})
export class EditReimbursementComponent implements OnInit {
  newReimbursement: Reimbursement = {
    reimbursementId: 0,
    dateSubmitted: "",
    dateOfTransaction: "",
    employeeId: 0,
    expenseType: "",
    amount: 0,
    status: "",
    merchant: "",
    statusId: 0,
    details: "",
    currentComment: "",
    employee: ""

  }

  
  newEmployee: Employee = {
    employeeId: 0,
    firstName: '',
    lastName: '',
    userName: '',
    jobTitle: '',
    email: '',
    phone: '',
    roles: [],
    password: ''
  };

  constructor(
    private activatedRoute: ActivatedRoute, 
    private reimbursementService: ReimbursementService,
    private router: Router,
    private auth: AuthService) { }

  ngOnInit(): void {
    //to take out route parameter we need to inject ActivatedRoute
  let reimbursementId: any = this.activatedRoute.snapshot.paramMap.get("myId");
  console.log(reimbursementId);
  this.reimbursementService.fetchAReimbursement(reimbursementId).subscribe((response)=>{
    this.newReimbursement = response;
  });}


    
 






  

  test(myEmployeeId: any){
    console.log();
  }

  updateEmployee(){
    this.reimbursementService.updateEmployee(this.newEmployee).subscribe((response)=>{
      console.log(response);

      this.router.navigate(['list-reimbursement']);

    });
  }
    updateReimbursements(){
      this.reimbursementService.updateReimbursement(this.newReimbursement).subscribe((response)=>{
        console.log(response);
  
        this.router.navigate(['list-reimbursement']);
  
      });
    

  }
}
