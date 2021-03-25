import { Component, Input, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { compileDeclareComponentFromMetadata } from '@angular/compiler';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  [x: string]: any;

 @Input ('fullName') fullNameUser :any;
 @Input ('newPassword') newPassword: any;
 
  responseDataFromfullName: object;
result :any;
  constructor(private httpClient : HttpClient) { }

  ngOnInit(): void {
  }

  getUser(){
    console.log(this.fullNameUser);
    // Hit the URL to search User on
    let responseUrl = this.httpClient.get("http://localhost:8080/user/create/" + this.fullNameUser);

    responseUrl.subscribe((responseData) => {
      this.responseDataFromfullName = responseData;
      console.log(responseData);
    });
    console.log("comparing ..............");
    this.compare(this.responseDataFromfullName);
  }

 compare(responseDataFromfullName: any) {
   console.log("compare..");
     
        if(responseDataFromfullName.newPassword==this.newPassword){
          this.result="User logged in successfully";
        }else{
          this.result="Invalid Password, Please try again..";
        }
    
}
}
