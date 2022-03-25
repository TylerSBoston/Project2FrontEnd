import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { AuthService } from '../employee/auth.service';
import { Employee } from '../employee/employee.model';
import { ReimbursementService } from '../reimbursement/reimbursement.service';

@Component({
  selector: 'app-edit-employee',
  templateUrl: './edit-employee.component.html',
  styleUrls: ['./edit-employee.component.css']
})
export class EditEmployeeComponent implements OnInit {

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








  constructor(   private activatedRoute: ActivatedRoute, 
    private reimbursementService: ReimbursementService,
    private router: Router,
    private auth: AuthService) { }

  ngOnInit(): void {
    this.newEmployee = this.auth.retrieveEmployee();
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
