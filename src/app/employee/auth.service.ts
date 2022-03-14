import { Injectable } from '@angular/core';
import { Employee } from './employee.model';
import { Role } from './role.model';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  //await spam, see if that fixes things
  loggedIn: boolean = false;

  loggedInPermissions = new Map();

  async storeEmployee(employee: Employee){
    await sessionStorage.setItem("employeeInfo", await JSON.stringify(employee));
    this.loggedIn = await true;
  }
  

   retrieveEmployee(): Employee{
    let data: any =  sessionStorage.getItem("employeeInfo");
    this.loggedIn =  true;
    return JSON.parse(data);
  }

  async destroyEmployee(){
    sessionStorage.clear();
    this.loggedIn = false;
    await this.loggedInPermissions.clear();
    
  }
}
