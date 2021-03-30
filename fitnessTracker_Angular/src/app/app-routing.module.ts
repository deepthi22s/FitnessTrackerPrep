import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { VideostreamComponent } from './videostream/videostream.component';
import { PaymentComponent } from './payment/payment.component';
import { DietplanComponent } from './dietplan/dietplan.component';
import { AppComponent } from './app.component';
import { ModalComponent } from './modal/modal.component';
import { LoginComponent } from './login/login.component';
import { WorkoutComponent } from './workout/workout.component';
import { SignupComponent } from './signup/signup.component';

import { GraphsComponent } from './graphs/graphs.component';


const routes: Routes = [

  {path : '*', component: AppComponent},
  {path :'payment', component : PaymentComponent},
  {path : 'videostream', component : VideostreamComponent},
  {path : 'dietplan' , component : DietplanComponent},
  {path : 'modal', component : ModalComponent},
  {path : 'login', component : LoginComponent},
  {path: 'show', component: WorkoutComponent },
  {path : 'signup', component: SignupComponent},
  {path : 'workout', component: WorkoutComponent},
  {path : 'graphs', component: GraphsComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }