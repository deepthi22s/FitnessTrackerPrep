import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { VideostreamComponent } from './videostream/videostream.component';
import { PaymentComponent } from './payment/payment.component';
import { DietplanComponent } from './dietplan/dietplan.component';
import { AppComponent } from './app.component';





const routes: Routes = [

  {path : '*', component: AppComponent},
  {path :'payment', component : PaymentComponent},
  {path : 'videostream', component : VideostreamComponent},
  {path : 'dietplan' , component : DietplanComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }