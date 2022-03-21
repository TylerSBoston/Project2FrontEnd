import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { map, Observable } from 'rxjs';
import { AuthService } from './auth.service';
import { Employee } from './employee.model';
import { Role } from './role.model';

@Injectable({
  providedIn: 'root'
})
export class EmployeeHttpService {
  loggedInEmployee: Employee = {
    employeeID: 0,
    firstName: '',
    lastName: '',
    userName: '',
    jobTitle: '',
    email: '',
    phone: '',
    roles: [],
    password: ''
  }

 
    
  constructor(private http: HttpClient, private authService: AuthService,private router: Router) { }


  async login(employee: Employee): Promise<Observable<Employee>>{

    return await this.http.post<Employee>("ip-172-31-13-88.us-east-2.compute.internal:3000/login",await JSON.stringify(await employee));
  }

  async validateLogin(newEmployee: Employee): Promise<Employee>{

    
    //feel like I can do this in the login 
    // everything in here to try and fix async issues, probably not the best way to do it.
    (await this.login(newEmployee)).subscribe(async (response) => {
      this.authService.loggedInPermissions.clear();
      this.loggedInEmployee = response;
      this.loggedInEmployee.roles.forEach(async (role) => {
       this.authService.loggedInPermissions.set(role.roleID,role.role);
      });
      this.authService.storeEmployee( this.loggedInEmployee);
      if (this.loggedInEmployee.employeeID != 0 ){
        //user has logged in as admin
        //store user info in browser and mark that we have logged in
        if(this.authService.loggedInPermissions.has(1) ==  true)
        {
        await  this.router.navigate(['managerView']);
        }
        else if(this.authService.loggedInPermissions.has(0) == true)
        {
        await  this.router.navigate(['list-reimbursement']);
        }
        else{
          this.authService.loggedIn = false;
        }
      }  
      else 
      {
        this.loggedInEmployee ={   
         employeeID: 0,
        firstName: '',
        lastName: '',
        userName: '',
        jobTitle: '',
        email: '',
        phone: '',
        roles: [],
        password: ''
        }
        this.authService.loggedIn = false;
        this.authService.destroyEmployee();
      }
    });
    return  newEmployee;
  }



}
