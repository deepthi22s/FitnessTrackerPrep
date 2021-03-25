import { Component } from '@angular/core';
<<<<<<< HEAD
<<<<<<< HEAD
import {render} from 'creditcardpayments/creditCardPayments';
=======
>>>>>>> 59f2089 (initial commit)
=======
import {render} from 'creditcardpayments/creditCardPayments';
>>>>>>> 1465fa795e2b6e33bbaffde3516c457945749212

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
<<<<<<< HEAD
<<<<<<< HEAD
=======
>>>>>>> 1465fa795e2b6e33bbaffde3516c457945749212
  title = 'WorkoutTrackerUi';

  constructor(){
    render(
      {
        id :"#myPaypalButtons",
        currency :"INR",

        value : "100",

        value : "1",
 main
        onApprove: (details) => {
          alert("Transaction Successful");

        }
      }
    );
  }
<<<<<<< HEAD
=======
  title = 'WorkoutAngular';
>>>>>>> 59f2089 (initial commit)
=======
>>>>>>> 1465fa795e2b6e33bbaffde3516c457945749212
}
