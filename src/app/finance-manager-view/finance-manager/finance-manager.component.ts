import { HttpClient, HttpHeaders } from '@angular/common/http';
import { ThisReceiver } from '@angular/compiler';
import { Component, Injectable, OnInit, ViewChild } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';
import { Observable } from 'rxjs';
import { ManagerHttpService } from '../manager-http.service';

@Component({
  selector: 'app-finance-manager',
  templateUrl: './finance-manager.component.html',
  styleUrls: ['./finance-manager.component.css']
})
@Injectable({ providedIn: 'root' })
export class FinanceManagerComponent implements OnInit {
  static retrievedImage: string | ArrayBuffer | null;

  constructor(private  MHRS:ManagerHttpService,
     private httpClient: HttpClient,
     private sanitizer: DomSanitizer) { }

  selectedFile: File | undefined;
  retrievedImage: any;
 // base64Data: any;
  retrieveResonse: any;
  message: string = "";
  imageName: any;
  reader = new FileReader();
  blob: any;
  
  imageData: any;


  //Gets called when the user selects an image
  public onFileChanged(event: { target: any; }) {
    //Select File
    this.selectedFile = event.target!.files[0];
  }


  ngOnInit(): void {
    
  }


  //Gets called when the user clicks on submit to upload the image
  onUpload() {
    console.log(this.selectedFile);
    
    //FormData API provides methods and properties to allow us easily prepare form data to be sent with POST HTTP requests.
    const uploadImageData = new FormData();
    uploadImageData.append('imageFile', this.selectedFile!, this.selectedFile!.name);
  
    //Make a call to the Spring Boot Application to save the image
    this.httpClient.post('http://ec2-3-14-134-131.us-east-2.compute.amazonaws.com:9999/images/1', uploadImageData, { observe: 'response' })
      .subscribe((response) => {
        if (response.status === 200) {
          this.message = 'Image uploaded successfully';
        } else {
          this.message = 'Image not uploaded successfully';
        }
      }
      );


  }

    //Gets called when the user clicks on retieve image button to get the image from back end
    getImage(reimbursementID: number) {
    //Make a call to Sprinf Boot to get the Image Bytes.
    this.httpClient.get('http://ec2-3-14-134-131.us-east-2.compute.amazonaws.com:9999/images/1',{responseType: 'blob'})
    .subscribe((res) => {
      console.log(res);
      console.log(res.type)
      
     // I can get the data now, just not put it in the object....
     var base64Data
     var url
     var reader = new FileReader()
      reader.readAsDataURL(res)
      reader.onloadend = function() {
        base64Data = reader.result
        url = "data:image/png;base64," + base64Data
      //  this.retrievedImage = base64Data;
        console.log(base64Data)
      }
      console.log(base64Data);
      this.retrievedImage;
          
      

      
    });
      
  }


  public myFunction() : void {
   // this.retrievedImage = this.sanitizer.bypassSecurityTrustUrl('data:image/png;base64,' + this.base64Data);
    
  }





}

