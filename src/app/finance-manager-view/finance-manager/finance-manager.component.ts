import { HttpClient } from '@angular/common/http';
import { Component, OnInit, ViewChild } from '@angular/core';
import { Observable } from 'rxjs';
import { ManagerHttpService } from '../manager-http.service';

@Component({
  selector: 'app-finance-manager',
  templateUrl: './finance-manager.component.html',
  styleUrls: ['./finance-manager.component.css']
})
export class FinanceManagerComponent implements OnInit {

  constructor(private  MHRS:ManagerHttpService, private httpClient: HttpClient) { }

  selectedFile: any;
  retrievedImage: any;
  base64Data: any;
  retrieveResonse: any;
  message: string = "";
  imageName: any;
  currentInput: any;

  ngOnInit(): void {
  }


  public onFileChanged(event: { target: any; }){
    this.selectedFile = event.target!.files[0];
  }

  onUpload(){
    const uploadImageData = new FormData();
    uploadImageData.append('imageFile',this.selectedFile,this.selectedFile.name)
    this.httpClient.post("http://ec2-3-14-134-131.us-east-2.compute.amazonaws.com:9999/images/1",uploadImageData,{observe:'response'})
      .subscribe((response) =>{
        if(response.status === 200) {
          this.message = 'image uploaded'
        } else {
          this.message = 'image didnt upload'
        }
      });
  }
  getImage() {
    this.httpClient.get('http://ec2-3-14-134-131.us-east-2.compute.amazonaws.com:9999/images/1')
      .subscribe(
        res=> {
          this.retrieveResonse = res;
          this.base64Data = this.retrieveResonse.picByte;
          this.retrievedImage = 'data:image/jpeg;base64,' + this.base64Data
        }
      ) 
  }




}
