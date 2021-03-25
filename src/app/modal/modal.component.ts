import { Component, Input, OnInit } from '@angular/core';
import { DialogServiceService } from '../dialog/dialog-service.service';
import { WorkoutTime } from '../WorkoutTime';

@Component({
  selector: 'app-modal',
  templateUrl: './modal.component.html',
  styleUrls: ['./modal.component.css']
})
export class ModalComponent implements OnInit {

  @Input('workoutName') workoutName :any ;

  @Input('workoutTime') workoutTime :any ;
  theWorkout : WorkoutTime = new WorkoutTime();

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
    
    }, ()=>{

    }
    );
  }
}

  

