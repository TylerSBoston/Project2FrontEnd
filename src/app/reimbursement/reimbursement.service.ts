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
  return this.http.get<[]>("http://ec2-3-14-134-131.us-east-2.compute.amazonaws.com:9999/finance-manager/all-employees-manager-view");
}

deleteEmployee(employeeID: number): Observable<Employee>{
  return this.http.delete<Employee>("http://localhost:4040/DeleteEmployees/{bid}S"+employeeID);
 
}

addEmployee(employeeModel: Employee): Observable<Employee>{

  return this.http.post<Employee>("http://localhost:4040/AddEmployees", JSON.stringify(employeeModel));


}

updateEmployee(employeeModel: Employee): Observable<Employee> {
  return this.http.put<Employee>("http://ec2-3-14-134-131.us-east-2.compute.amazonaws.com:9999/api/reimbursements", JSON.stringify(employeeModel));
 
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
    return this.http.get<Reimbursement[]>("http://ec2-3-14-134-131.us-east-2.compute.amazonaws.com:9999/api/reimbursements");
  }

  deleteReimbursement(reimbursementId: number): Observable<Reimbursement>{
    return this.http.delete<Reimbursement>("http://ec2-3-14-134-131.us-east-2.compute.amazonaws.com:9999/api/reimbursements"+reimbursementId);
  
  }

  addReimbursement(reimbursementModel: Reimbursement): Observable<Reimbursement>{

    return this.http.post<Reimbursement>("http://ec2-3-14-134-131.us-east-2.compute.amazonaws.com:9999/api/reimbursements", JSON.stringify(reimbursementModel));


  }

  updateReimbursement(reimbursementModel: Reimbursement): Observable<Reimbursement> {
    return this.http.put<Reimbursement>("http://ec2-3-14-134-131.us-east-2.compute.amazonaws.com:9999/api/reimbursements", JSON.stringify(reimbursementModel));
  
  }

  fetchAReimbursement(reimbursementId: number): Observable<Reimbursement> {
    return this.http.get<Reimbursement>("http://ec2-3-14-134-131.us-east-2.compute.amazonaws.com:9999/api/reimbursements/{employeeId}"+reimbursementId);
  }

}