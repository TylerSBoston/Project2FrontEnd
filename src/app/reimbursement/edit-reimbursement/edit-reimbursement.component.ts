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
    reimbursementID: 0,
    dateSubmitted: "",
    dateOfTransaction: "",
    employeeID: 0,
    expenseType: "",
    amount: 0,
    status: "",
    dateUpdated: "",
    merchant: "",
    statusID: 0,
    details: "",
    currentComment: "",
    employee: ""

  }

  
  newEmployee: Employee = {
    employeeID: 0,
    firstName: '',
    lastName: '',
    userName: '',
    fullName: '',
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
  
        this.newEmployee =  this.auth.retrieveEmployee();


  }

  test(myEmployeeId: any){
    console.log();
  }

  updateEmployee(){
    this.reimbursementService.updateEmployee(this.newEmployee).subscribe((response)=>{
      console.log(response);

      this.router.navigate(['list-reimbursement']);

    });
    

  }
}
