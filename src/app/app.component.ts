import { Component } from '@angular/core';
import {render} from 'creditcardpayments/creditcardpayments';

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

        value : "1",
        onApprove: (details) => {
          alert("Transaction Successful");

        }
      }
    );
  }
}
