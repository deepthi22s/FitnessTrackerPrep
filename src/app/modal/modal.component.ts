import { Component, Input, OnInit } from '@angular/core';
import { DialogServiceService } from '../dialog/dialog-service.service';

@Component({
  selector: 'app-modal',
  templateUrl: './modal.component.html',
  styleUrls: ['./modal.component.css']
})
export class ModalComponent implements OnInit {

  @Input('workoutName') workoutName :any ;

  @Input('workoutTime') workoutTime :any ;

  title = 'Modal';
  responseDataFromWorkoutBean: any;
  //responseDataFromWorkoutBean: any;

  ngOnInit(){

  }
  constructor(private dialogService: DialogServiceService){

  }

  displayName(workoutName:any){
    console.log(workoutName);
  }

  displayTime(workoutTime:any){
    console.log(workoutTime);
    console.log(this.workoutName);
  }

   showDialog(){
    this.dialogService.openDialog(
      {
        Name : this.workoutName,
        Time : this.workoutTime,
        
        title: "Workout Timer",
        body: "This is some body text"
      }
    ).then(result => {
      console.log("result");
      console.log(this.workoutTime);
      console.log(this.workoutName);
     
    }, ()=>{

    }
    );
  }

  // getWorkouts(){
  //   let responseUrl = this.httpClient.get("http://localhost:8080/workouts/all");

  //   responseUrl.subscribe((responseData) => {

  //     this.responseDataFromWorkoutBean = responseData;

  //     console.log(responseData);

  // }

}
