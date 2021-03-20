import { Component } from '@angular/core';
<<<<<<< HEAD
import {render} from 'creditcardpayments/creditCardPayments';
=======
>>>>>>> 59f2089 (initial commit)

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
<<<<<<< HEAD
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
=======
  title = 'WorkoutAngular';
>>>>>>> 59f2089 (initial commit)
}
