import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Reimbursement } from '../reimbursement/reimbursement.model';
import { Employee } from '../employee/employee.model';

@Injectable({
  providedIn: 'root'
})
export class ManagerHttpService {


  employeeID: number = 0;

  

  constructor(private http: HttpClient) { }

 httpOptions = { 
    headers: new HttpHeaders(
      { 'Content-Type': 'application/json' }
    ) 
  };



  getPendingReimbursements(): Observable<Reimbursement[]>{


    return this.http.get<Reimbursement[]>("http://ec2-3-14-134-131.us-east-2.compute.amazonaws.com:9999/finance-manager/requests-pending",this.httpOptions)

  }

  getCompletedReimbursements():  Observable<Reimbursement[]>{
    
    return this.http.get<Reimbursement[]>("http://ec2-3-14-134-131.us-east-2.compute.amazonaws.com:9999/finance-manager/requests-resolved",this.httpOptions)
  }

  getAllReimbursements():  Observable<Reimbursement[]>{
    return this.http.get<Reimbursement[]>("http://ec2-3-14-134-131.us-east-2.compute.amazonaws.com:9999/finance-manager/requests-all",this.httpOptions)
  }
  getEmployeeReimbursements(employeeID: number): Observable<Reimbursement[]>{
    return this.http.get<Reimbursement[]>("http://ec2-3-14-134-131.us-east-2.compute.amazonaws.com:9999/finance-manager/requests-employee/"+employeeID,this.httpOptions)
  }
  
  getAllEmployees(): Observable<Employee[]>{


    return this.http.get<Employee[]>("http://ec2-3-14-134-131.us-east-2.compute.amazonaws.com:9999/finance-manager/all-employees-manager-view",this.httpOptions)

  }

  updateReimbursement(reimbursement: Reimbursement): Observable<Reimbursement>{

    //backend technicly uses an update and insert.
    return this.http.post<Reimbursement>("http://ec2-3-14-134-131.us-east-2.compute.amazonaws.com:9999/finance-manager/update-request",JSON.stringify(reimbursement),this.httpOptions)
  }

  getImage(imageUrl: string): Observable<Blob> {
    return this.http.get(imageUrl, { responseType: 'blob' });
  }



}
