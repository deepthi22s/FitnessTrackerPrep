import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
<<<<<<< HEAD
<<<<<<< HEAD
=======
>>>>>>> 1465fa795e2b6e33bbaffde3516c457945749212
import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './app.component';
import { PaymentComponent } from './payment/payment.component';
import { HomeComponent } from './home/home.component';
import { VideostreamComponent } from './videostream/videostream.component';

@NgModule({
  declarations: [
    AppComponent,
    PaymentComponent,
    HomeComponent,
    VideostreamComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
<<<<<<< HEAD
=======

import { AppComponent } from './app.component';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule
>>>>>>> 59f2089 (initial commit)
=======
>>>>>>> 1465fa795e2b6e33bbaffde3516c457945749212
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
