import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { VideostreamComponent } from './videostream/videostream.component';
import { PaymentComponent } from './payment/payment.component';
import { DietplanComponent } from './dietplan/dietplan.component';
import { AppComponent } from './app.component';
import { ModalComponent } from './modal/modal.component';
import { LoginComponent } from './login/login.component';
<<<<<<< HEAD
import { WorkoutComponent } from './workout/workout.component';
=======
import { SignupComponent } from './signup/signup.component';
>>>>>>> 4b1bc7f0454e591a7303640ee92b578c904cc409





const routes: Routes = [

  {path : '*', component: AppComponent},
  {path :'payment', component : PaymentComponent},
  {path : 'videostream', component : VideostreamComponent},
  {path : 'dietplan' , component : DietplanComponent},
  {path : 'modal', component : ModalComponent},
  {path : 'login', component : LoginComponent},
<<<<<<< HEAD
  {path: 'show', component: WorkoutComponent }
=======
  {path : 'signup', component : SignupComponent}

>>>>>>> 4b1bc7f0454e591a7303640ee92b578c904cc409
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }