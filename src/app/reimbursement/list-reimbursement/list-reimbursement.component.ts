import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { EmployeeHttpService } from 'src/app/employee/employee-http.service';
import { Employee } from 'src/app/employee/employee.model';
import { Reimbursement } from '../reimbursement.model';
import { ReimbursementService } from '../reimbursement.service';


@Component({
  selector: 'app-list-reimbursement',
  templateUrl: './list-reimbursement.component.html',
  styleUrls: ['./list-reimbursement.component.css']
})
export class ListReimbursementComponent implements OnInit {

  allReimbursements: Reimbursement[] = [];
  allEmployees: Employee[] = [];

  toggleAdd: boolean = false;

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
  };

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

  





  constructor(private reimbursementService: ReimbursementService, private router: Router,private employeeService: EmployeeHttpService) {
  }

  oneReimbursement: Reimbursement = {
    reimbursementId: 0,
    dateSubmitted: "",
    dateOfTransaction: "",
    employeeId: 0,
    expenseType: "",
    amount: 0,
    status: "p",
    merchant: "",
    statusId: 0,

    details: "",
    currentComment: "",
    employee: ""
  };

  oneEmployee: Employee = {
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





  ngOnInit(): void {
    this.loadEmployees();}

    loadEmployees(){
    this.reimbursementService.fetchAllEmployees().subscribe((response)=>{
      console.log(response);
      this.allEmployees = response;

    });
    
  }



  toggleAddForm() {
    if (this.toggleAdd) {
      this.toggleAdd = false;
    }
    else {
      this.toggleAdd = true;
    }
  }
  // route to editbookcomponent, inject router into the constructor in order to use  this.router.navigate
  goToEditReimbursement(reimbursementID: number) {
    this.router.navigate(['edit-reimbursement']);
  }

  updateEmployee(){
    this.reimbursementService.updateEmployee(this.oneEmployee).subscribe((response)=>{
      console.log(response)
      this.loadEmployees();

    });
  }

  




  deleteEmployee(employeeID: number) {
  this.reimbursementService.deleteEmployee(employeeID).subscribe((response)=>{
    console.log(response);
   
    this.loadEmployees();

  });
 
  }

  addEmployee(){
    this.reimbursementService.addEmployee(this.newEmployee).subscribe((response)=>{
      console.log(response);
      this.newEmployee = {
        employeeId: 0,
        firstName: '',
        lastName: '',
        userName: '',
        jobTitle: '',
        email: '',
        phone: '',
        roles: [],
        password: ''
      }
      this.loadEmployees();
    })
    

    
    
  }

  addReimbursement() {
    let addNewReimbursement: Reimbursement = {
      reimbursementId: 0,
      dateSubmitted: this.newReimbursement.dateSubmitted,
      dateOfTransaction: this.newReimbursement.dateOfTransaction,
      employeeId: this.newReimbursement.employeeId,
      expenseType: this.newReimbursement.expenseType,
      amount: this.newReimbursement.amount,
      status: this.newReimbursement.status,
      merchant: this.newReimbursement.merchant,
      details: "",
      currentComment: "",
      employee: "",
      statusId: 0
    };
    this.reimbursementService.addReimbursement(addNewReimbursement);
    this.reimbursementService.fetchAllReimbursements();
  }
}
