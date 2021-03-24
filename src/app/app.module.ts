import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './app.component';
import { PaymentComponent } from './payment/payment.component';
import { HomeComponent } from './home/home.component';
import { VideostreamComponent } from './videostream/videostream.component';

import { DietplanComponent } from './dietplan/dietplan.component';


@NgModule({
  declarations: [
    AppComponent,
    PaymentComponent,
    HomeComponent,
    VideostreamComponent,
    DietplanComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
