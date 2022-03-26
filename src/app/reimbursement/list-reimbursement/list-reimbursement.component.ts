import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { EmployeeHttpService } from 'src/app/employee/employee-http.service';
import { Employee } from 'src/app/employee/employee.model';
import { Reimbursement } from '../reimbursement.model';
import { ReimbursementService } from '../reimbursement.service';
import { EmployeeComponent } from 'src/app/employee/employee.component';
import { AuthService } from 'src/app/employee/auth.service';


@Component({
  selector: 'app-list-reimbursement',
  templateUrl: './list-reimbursement.component.html',
  styleUrls: ['./list-reimbursement.component.css']
})
export class ListReimbursementComponent implements OnInit {

  allReimbursements: Reimbursement[] = [];
  toggleAdd: boolean = false;
  

  // toggleAddUser: boolean = false;

  newReimbursement: Reimbursement = {
    reimbursementId: 0,
    statusId: 0,
    employeeId: 0,
    employee: "",
    status: "",
    expenseType: "",
    merchant: "",
    amount: 0,
    details: "",            // Info about reimbursement, 
    currentComment: "",     // most recent comment usually about a update or approval/denail
    dateOfTransaction: "",
    dateSubmitted: ""
  };


  





  constructor(private reimbursementService: ReimbursementService,
    private employeeService: EmployeeHttpService,
     private router: Router,
    
     private auth: AuthService) {
  }

  // oneReimbursement: Reimbursement = {
  //   reimbursementId: 0,
  //   dateSubmitted: "",
  //   dateOfTransaction: "",
  //   employeeId: 0,
  //   expenseType: "",
  //   amount: 0,
  //   status: "p",
  //   merchant: "",
  //   statusId: 0,

  //   details: "",
  //   currentComment: "",
  //   employee: ""
  // };

  // oneEmployee: Employee = {
  //   employeeId: 0,
  //   firstName: '',
  //   lastName: '',
  //   userName: '',
  //   jobTitle: '',
  //   email: '',
  //   phone: '',
  //   roles: [],
  //   password: ''
  // };





  ngOnInit(): void {

    this.newReimbursement = this.auth.retrieveReimbursement();
  

    this.loadReimbursements();}

    loadReimbursements(){
    this.reimbursementService.fetchAllReimbursements().subscribe((response)=>{
      console.log(response);
      this.allReimbursements = response;

    });

    }
  test(myEmployeeId: any){
    console.log();
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
  goToEditReimbursement(reimbursementId: number) {
    this.router.navigate(['edit-reimbursement', reimbursementId]);
   

   
  }




  // updateEmployee(){
  //   this.reimbursementService.updateEmployee(this.oneEmployee).subscribe((response)=>{
  //     console.log(response)
      

  //   });
  // }

  updateReimbursement(){
    this.reimbursementService.updateReimbursement(this.newReimbursement).subscribe((response)=>{
      console.log(response)
      this.newReimbursement = this.auth.retrieveReimbursement();
      this.loadReimbursements();
      this.router.navigate(['reimbursements'])
      

    });
  }

  




  // deleteEmployee(employeeID: number) {
  // this.reimbursementService.deleteEmployee(employeeID).subscribe((response)=>{
  //   console.log(response);
   
    

  // });
 
  // }

  // addEmployee(){
  //   this.reimbursementService.addEmployee(this.newEmployee).subscribe((response)=>{
  //     console.log(response);
  //     this.newEmployee = {
  //       employeeId: 0,
  //       firstName: '',
  //       lastName: '',
  //       userName: '',
  //       jobTitle: '',
  //       email: '',
  //       phone: '',
  //       roles: [],
  //       password: ''
  //     }
  //     this.loadEmployees()
  //   })
    

    
    
  // }

  addReimbursement() {
    this.reimbursementService.addReimbursement(this.newReimbursement).subscribe((response)=>{
      console.log(response);
      this.newReimbursement= {
        reimbursementId: 0,
        statusId: 0,
        employeeId: 0,
        employee: "",
        status: "",
        expenseType: "",
        merchant: "",
        amount: 0,
        details: "",            // Info about reimbursement, 
        currentComment: "",     // most recent comment usually about a update or approval/denail
        dateOfTransaction: "",
        dateSubmitted: ""  
    }
    this.loadReimbursements();
  })
}
}
