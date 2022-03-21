import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Reimbursement } from 'src/app/reimbursement/reimbursement.model';
import {  ManagerHttpService } from '../manager-http.service';

@Component({
  selector: 'app-view-reimbursements',
  templateUrl: './view-reimbursements.component.html',
  styleUrls: ['./view-reimbursements.component.css']
})
export class ViewReimbursementsComponent implements OnInit {


  allReimbursements: Reimbursement[] = [];

  newComment: string[] = [];

  newReimbursement: Reimbursement = {
    reimbursementID: 0,
    statusID: 0,
    employeeID: 0,
    employee: '',
    status: '',
    expenseType: '',
    merchant: '',
    amount: 0,
    details: '',
    currentComment: '',
    dateOfTransaction: '',
    dateSubmitted: '',
  }

  constructor(private  MHRS:ManagerHttpService, private router: Router) { }



  ngOnInit(): void {
    if(this.MHRS.employeeID == 0)
    {
      this.getAllReimbursements();
    }
    else
    {
      this.getEmployeeReimbursements(this.MHRS.employeeID);
    }
  }

  getPendingReimbursements(){
    this.MHRS.getPendingReimbursements().subscribe((response)=>{
      this.allReimbursements = response;
      this.newComment.length = response.length
      this.MHRS.employeeID=0;
    });
  }
  getCompletedReimbursements(){
    this.MHRS.getCompletedReimbursements().subscribe((response)=>{
      this.allReimbursements = response;
      this.newComment.length = response.length
      this.MHRS.employeeID=0;
    });
  }
  getAllReimbursements(){
    this.MHRS.getAllReimbursements().subscribe((response)=>{
      console.log(response);
      this.allReimbursements = response;
      this.newComment.length = response.length;
      this.MHRS.employeeID=0;
    });
  }
  
  getEmployeeReimbursements(employeeID: number){
    this.MHRS.getEmployeeReimbursements(employeeID).subscribe((response)=>{
      this.allReimbursements = response;
      this.newComment.length = response.length
    });
  }

  updateReimbursement(reimbursement: Reimbursement, status: number, comment: string){
      reimbursement.statusID = status;
      
      if(comment == '')
      {
        if(status == 4)
        {
          reimbursement.currentComment = 'approved'
        }
        else if(status == 5)
        {
          reimbursement.currentComment = 'denied'
        }
      }
      else
      {
        reimbursement.currentComment= comment;
      }
      this.MHRS.updateReimbursement(reimbursement).subscribe((response)=>{
        this.newReimbursement = response;
      });

  }



}
