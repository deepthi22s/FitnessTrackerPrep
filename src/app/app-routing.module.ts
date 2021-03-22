import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { VideostreamComponent } from './videostream/videostream.component';
import { PaymentComponent } from './payment/payment.component';
import { HomeComponent } from './home/home.component';



const routes: Routes = [

  {path : '', component: HomeComponent},
  {path :'payment', component : PaymentComponent},

  {path : 'videostream', component : VideostreamComponent}
  
  
    
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }