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


    return this.http.get<Reimbursement[]>("http://localhost:4040/RequestsPending")

  }

  getCompletedReimbursements():  Observable<Reimbursement[]>{
    return this.http.get<Reimbursement[]>("http://localhost:4040/RequestsResolved")
  }

  getAllReimbursements():  Observable<Reimbursement[]>{
    return this.http.get<Reimbursement[]>("http://localhost:4040/RequestsAll")
  }
  getEmployeeReimbursements(employeeID: number): Observable<Reimbursement[]>{
    return this.http.get<Reimbursement[]>("http://localhost:4040/RequestsEmployee/"+employeeID)
  }
  
  getAllEmployees(): Observable<Employee[]>{


    return this.http.get<Employee[]>("http://localhost:4040/AllEmployeesManagerView")

  }

  updateReimbursement(reimbursement: Reimbursement): Observable<Reimbursement>{

    //backend technicly uses an update and insert.
    return this.http.post<Reimbursement>("http://localhost:4040/UpdateRequest",JSON.stringify(reimbursement))
  }


}
