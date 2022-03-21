import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Reimbursement } from '../reimbursement/reimbursement.model';
import { Employee } from '../employee/employee.model';

@Injectable({
  providedIn: 'root'
})
export class ManagerHttpService {


  employeeID: number = 0;

  constructor(private http: HttpClient) { }

  getPendingReimbursements(): Observable<Reimbursement[]>{


    return this.http.get<Reimbursement[]>("http://ip-172-31-13-88.us-east-2.compute.internal:3000/requests-pending")

  }

  getCompletedReimbursements():  Observable<Reimbursement[]>{
    return this.http.get<Reimbursement[]>("http://ip-172-31-13-88.us-east-2.compute.internal:3000/requests-resolved")
  }

  getAllReimbursements():  Observable<Reimbursement[]>{
    return this.http.get<Reimbursement[]>("http://ip-172-31-13-88.us-east-2.compute.internal:3000/requests-all")
  }
  getEmployeeReimbursements(employeeID: number): Observable<Reimbursement[]>{
    return this.http.get<Reimbursement[]>("http://ip-172-31-13-88.us-east-2.compute.internal:3000/requests-employee/"+employeeID)
  }
  
  getAllEmployees(): Observable<Employee[]>{


    return this.http.get<Employee[]>("http://ip-172-31-13-88.us-east-2.compute.internal:3000/all-employees-manager-view")

  }

  updateReimbursement(reimbursement: Reimbursement): Observable<Reimbursement>{

    //backend technicly uses an update and insert.
    return this.http.post<Reimbursement>("http://ip-172-31-13-88.us-east-2.compute.internal:3000/update-request",JSON.stringify(reimbursement))
  }


}
