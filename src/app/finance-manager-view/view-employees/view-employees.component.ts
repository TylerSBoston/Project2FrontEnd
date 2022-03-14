import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Employee } from 'src/app/employee/employee.model';
import { ManagerHttpService } from '../manager-http.service';

@Component({
  selector: 'app-view-employees',
  templateUrl: './view-employees.component.html',
  styleUrls: ['./view-employees.component.css']
})
export class ViewEmployeesComponent implements OnInit {

  allEmployees: Employee[] = [] 




  constructor(private  MHRS:ManagerHttpService, private router: Router) { }

  ngOnInit(): void {
    this.getAllEmployees();
  }

  getAllEmployees(){
    this.MHRS.getAllEmployees().subscribe((response) =>{ 
      this.allEmployees = response;
      });
  }
  getEmployeeReimbursements(employeeID: number){
    this.MHRS.employeeID = employeeID;
    this.router.navigate(['managerViewReimbursements']);
  }

}
