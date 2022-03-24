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


    return this.http.get<Reimbursement[]>("http://ec2-3-14-134-131.us-east-2.compute.amazonaws.com:9999/requests-pending")

  }

  getCompletedReimbursements():  Observable<Reimbursement[]>{
    return this.http.get<Reimbursement[]>("http://ec2-3-14-134-131.us-east-2.compute.amazonaws.com:9999/requests-resolved")
  }

  getAllReimbursements():  Observable<Reimbursement[]>{
    return this.http.get<Reimbursement[]>("http://ec2-3-14-134-131.us-east-2.compute.amazonaws.com:9999/requests-all")
  }
  getEmployeeReimbursements(employeeID: number): Observable<Reimbursement[]>{
    return this.http.get<Reimbursement[]>("http://ec2-3-14-134-131.us-east-2.compute.amazonaws.com:9999/requests-employee/"+employeeID)
  }
  
  getAllEmployees(): Observable<Employee[]>{


    return this.http.get<Employee[]>("http://ec2-3-14-134-131.us-east-2.compute.amazonaws.com:9999/all-employees-manager-view")

  }

  updateReimbursement(reimbursement: Reimbursement): Observable<Reimbursement>{

    //backend technicly uses an update and insert.
    return this.http.post<Reimbursement>("http://ec2-3-14-134-131.us-east-2.compute.amazonaws.com:9999/update-request",JSON.stringify(reimbursement))
  }

  getImage(imageUrl: string): Observable<Blob> {
    return this.http.get("http://ec2-3-14-134-131.us-east-2.compute.amazonaws.com:9999/images/1", { responseType: 'blob' });
  }


    imageToShow: any;

  createImageFromBlob(image: Blob) {
    let reader = new FileReader();
    reader.addEventListener("load", () => {
        this.imageToShow = reader.result;
    }, false);

    if (image) {
        reader.readAsDataURL(image);
    }
  }
}
