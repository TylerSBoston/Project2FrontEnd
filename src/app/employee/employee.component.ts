import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ReimbursementService } from '../reimbursement/reimbursement.service';
import { AuthService } from './auth.service';
import { Employee } from './employee.model';

@Component({
  selector: 'app-employee',
  templateUrl: './employee.component.html',
  styleUrls: ['./employee.component.css']
})
export class EmployeeComponent implements OnInit {
  allEmployees: Employee[] = [];
  toggleAdd1: boolean = false;

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

  constructor(private activatedRoute: ActivatedRoute, 
    private reimbursementService: ReimbursementService,
    private router: Router,
    private auth: AuthService) { }

  ngOnInit(): void {

    this.newEmployee = this.auth.retrieveEmployee();

    this.loadEmployees();}

    loadEmployees(){
      this.reimbursementService.fetchAllEmployees().subscribe((response)=>{
        console.log(response);
        this.allEmployees = response;
  
      });
      
    }
    toggleAddForm1() {
      if (this.toggleAdd1) {
        this.toggleAdd1 = false;
      }
      else {
        this.toggleAdd1 = true;
      }
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
      this.loadEmployees()
    })
    

    
    
  }



  

  goToEditEmployee(employeeId: number) {
    this.router.navigate(['edit-employees', employeeId]);
  }

  test(myEmployeeId: any){
    console.log();
  }

  

}
