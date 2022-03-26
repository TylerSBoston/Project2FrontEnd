import { HttpClient, HttpHeaders } from '@angular/common/http';
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

 httpOptions = { 
  headers: new HttpHeaders(
    { 'Content-Type': 'application/json' }
  ) 
};

fetchAllEmployees(): Observable<Employee[]>{
  return this.http.get<[]>("http://ec2-3-14-134-131.us-east-2.compute.amazonaws.com:9999/api/employees",this.httpOptions);
}

updateEmployee(employeeModel: Employee): Observable<Employee> {
  return this.http.put<Employee>("http://ec2-3-14-134-131.us-east-2.compute.amazonaws.com:9999/api/employees", JSON.stringify(employeeModel),this.httpOptions);
 
}

fetchAEmployee(employeeId: number): Observable<Employee> {
  return this.http.get<Employee>("http://ec2-3-14-134-131.us-east-2.compute.amazonaws.com:9999/api/employees/"+employeeId,this.httpOptions);
}

  fetchAllReimbursements(): Observable<Reimbursement[]>{
    return this.http.get<Reimbursement[]>("http://ec2-3-14-134-131.us-east-2.compute.amazonaws.com:9999/api/reimbursements",this.httpOptions);
  }

  deleteReimbursement(reimbursementId: number): Observable<Reimbursement>{
    return this.http.delete<Reimbursement>("http://ec2-3-14-134-131.us-east-2.compute.amazonaws.com:9999/api/reimbursements"+reimbursementId,this.httpOptions);
  
  }

  addReimbursement(reimbursementModel: Reimbursement): Observable<Reimbursement>{

    return this.http.post<Reimbursement>("http://ec2-3-14-134-131.us-east-2.compute.amazonaws.com:9999/api/reimbursements", JSON.stringify(reimbursementModel),this.httpOptions);


  }

  updateReimbursement(reimbursementModel: Reimbursement): Observable<Reimbursement> {
    return this.http.put<Reimbursement>("http://ec2-3-14-134-131.us-east-2.compute.amazonaws.com:9999/api/reimbursements", JSON.stringify(reimbursementModel),this.httpOptions);
  
  }

  fetchAReimbursement(reimbursementId: number): Observable<Reimbursement> {
    return this.http.get<Reimbursement>("http://ec2-3-14-134-131.us-east-2.compute.amazonaws.com:9999/api/reimbursements/"+reimbursementId,this.httpOptions);
  }

}