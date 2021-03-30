import { HttpClient } from '@angular/common/http';
import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-get-data',
  templateUrl: './get-data.component.html',
  styleUrls: ['./get-data.component.css']
})
export class GetDataComponent implements OnInit {
  responseWorkoutData: any;
  @Input('userID') userID :any ;

  check : boolean | undefined;

  header = ["id", "workoutName", "time"];
  constructor(private httpClient : HttpClient, private router : ActivatedRoute) { }

  ngOnInit(): void {
    
  }

  display(){
        // Hit the URL to search User on Git
        let responseUrl = this.httpClient.get("http://localhost:8083/workoutTime/user/userId/" + this.userID);

        responseUrl.subscribe((responseData) => {
    
          this.responseWorkoutData = responseData;
    
          console.log(responseData);
          
        });
    this.check=true;
  }

}
