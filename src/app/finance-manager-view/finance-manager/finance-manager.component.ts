import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { ManagerHttpService } from '../manager-http.service';

@Component({
  selector: 'app-finance-manager',
  templateUrl: './finance-manager.component.html',
  styleUrls: ['./finance-manager.component.css']
})
export class FinanceManagerComponent implements OnInit {

  constructor(private  MHRS:ManagerHttpService) { }


  isImageLoading: boolean = true;
  imageToShow: any;

  ngOnInit(): void {
  }


  getImageFromService() {
    this.isImageLoading = true;
    this.MHRS.getImage("http://ec2-3-14-134-131.us-east-2.compute.amazonaws.com:9999/images/1").subscribe(data => {
      this.MHRS.createImageFromBlob(data);
      this.isImageLoading = false;
    }, error => {
      this.isImageLoading = false;
      console.log(error);
    });
  }


}
