import { Component, OnInit, Input } from '@angular/core';
import { user } from '../service/user';
import { RegistrationService } from '../service/user-registration.service';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {

  user: user=new user("",0 , "", 0, 0, 0,0);
  message:any;

  constructor(private service:RegistrationService) { }

  ngOnInit(): void {
  }

  public registerNow(){

    let resp=this.service.doRegistration(this.user);
    resp.subscribe((data)=>this.message=data);
    alert("Registration Successful :) , please login");
      }

}
