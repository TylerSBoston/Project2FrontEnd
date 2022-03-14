import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Employee } from '../employee/employee.model';
import { Reimbursement } from './reimbursement.model';

@Injectable({
  providedIn: 'root'
})
export class ReimbursementService {


  
//working with http client, manually include HttpClientMOdule int app.module.ts
constructor(private http: HttpClient) { }

fetchAllEmployees(): Observable<Employee[]>{
  return this.http.get<[]>("http://localhost:4040/AllEmployees");
}

deleteEmployee(employeeID: number): Observable<Employee>{
  return this.http.delete<Employee>("http://localhost:4040/DeleteEmployees/{bid}S"+employeeID);
 
}

addEmployee(employeeModel: Employee): Observable<Employee>{

  return this.http.post<Employee>("http://localhost:4040/AddEmployees", JSON.stringify(employeeModel));


}

updateEmployee(employeeModel: Employee): Observable<Employee> {
  return this.http.put<Employee>("http://localhost:4040/UpdateEmployees", JSON.stringify(employeeModel));
 
}

fetchAEmployee(employeeId: number): Observable<Employee> {
  return this.http.get<Employee>("http://localhost:4040/AllEmployees/{bid}"+employeeId);
}


// 
// 
// 
// 
// 
// 
// 
// 
// 
// 
// 



  fetchAllReimbursements(): Observable<Reimbursement[]>{
    return this.http.get<Reimbursement[]>("http://localhost:4040/AllEmployees");
  }

  deleteReimbursement(reimbursementId: number): Observable<Reimbursement>{
    return this.http.delete<Reimbursement>("http://localhost:4040/DeleteEmployees/{bid}S"+reimbursementId);
  
  }

  addReimbursement(reimbursementModel: Reimbursement): Observable<Reimbursement>{

    return this.http.post<Reimbursement>("http://localhost:4040/AddEmployees", JSON.stringify(reimbursementModel));


  }

  updateReimbursement(reimbursementModel: Reimbursement): Observable<Reimbursement> {
    return this.http.put<Reimbursement>("http://localhost:4040/UpdateEmployees", JSON.stringify(reimbursementModel));
  
  }

  fetchAReimbursement(reimbursementId: number): Observable<Reimbursement> {
    return this.http.get<Reimbursement>("http://localhost:4040/AllEmployees/{bid}"+reimbursementId);
  }

}