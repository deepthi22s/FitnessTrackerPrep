import { Component, Input, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  loginForm: FormGroup;

  @Input('fullNameUser') fullNameUser : string;
  @Input('newPassword') newPassword: any;
 
  responseDataFromfullName: any;
result :any;

  constructor(private httpClient : HttpClient) { }

  ngOnInit(){
  
}

  
 getUser():void{
    console.log("full name :" + this.fullNameUser);
    
    let responseUrl = this.httpClient.get("http://localhost:8043/user/search/"+ this.fullNameUser);

    responseUrl.subscribe((responseData) => {
      this.responseDataFromfullName = responseData;
      console.log("response : " + this.responseDataFromfullName[0].password);
      this.compare(this.responseDataFromfullName);
      console.log(this.result);
    });     
  }

  compare(responseDataFromfullName: any) :void{
    console.log("inside compare, response : " + this.responseDataFromfullName[0].password);
     
        if(this.responseDataFromfullName[0].password==this.newPassword){
          this.result="User logged in successfully";
        }else{
          this.result="Invalid Password, Please try again..";
        }
      
  }

}
