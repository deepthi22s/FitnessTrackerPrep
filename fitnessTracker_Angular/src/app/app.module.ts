import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './app.component';
import { PaymentComponent } from './payment/payment.component';
import { VideostreamComponent } from './videostream/videostream.component';

import { DietplanComponent } from './dietplan/dietplan.component';
import { FormsModule, NgModel } from '@angular/forms';
import { ModalComponent } from './modal/modal.component';
import { DialogComponent } from './dialog/dialog.component';

import { LoginComponent } from './login/login.component';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { SignupComponent } from './signup/signup.component';
import { WorkoutComponent} from './workout/workout.component'



@NgModule({
  declarations: [
    AppComponent,
    PaymentComponent,
    VideostreamComponent,
    DietplanComponent,
    ModalComponent,
    DialogComponent,
    LoginComponent,
    SignupComponent,
    WorkoutComponent
   ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,

    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
