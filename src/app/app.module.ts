import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './app.component';
import { PaymentComponent } from './payment/payment.component';
import { VideostreamComponent } from './videostream/videostream.component';

import { DietplanComponent } from './dietplan/dietplan.component';
import { FormsModule } from '@angular/forms';
import { ModalComponent } from './modal/modal.component';
import { DialogComponent } from './dialog/dialog.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';


@NgModule({
  declarations: [
    AppComponent,
    PaymentComponent,
    VideostreamComponent,
    DietplanComponent,
    ModalComponent,
    DialogComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    NgbModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
