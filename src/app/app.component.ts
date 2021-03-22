import { Component } from '@angular/core';
import {render} from 'creditcardpayments/creditCardPayments';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'WorkoutTrackerUi';

  constructor(){
    render(
      {
        id :"#myPaypalButtons",
        currency :"INR",
        value : "100",
        onApprove: (details) => {
          alert("Transaction Successful");

        }
      }
    );
  }
}
