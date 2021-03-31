import { Component, OnInit, Input} from '@angular/core';

import { HttpClient } from '@angular/common/http'; 
import { User } from '../User';


@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {

  user: User=new User();
  message:any;
  count : number=0;
  notifyMessage : String;
  
  constructor(private http:HttpClient) { }

  ngOnInit(): void {
  }

  public registerNow(){

    let resp=this.doRegistration(this.user);
    resp.subscribe((data)=>this.message=data);

      if(this.count==0){
    this.notifyMessage ="Registration Successful :) please login... "
    this.count++;
      }
      else{
      this.notifyMessage= "Already your phone Number is registered. please login";
      }
    
      }


      public doRegistration(user){

        return this.http.post("http://localhost:9092/user/create",user);

      }

}
