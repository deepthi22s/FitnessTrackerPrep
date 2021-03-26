import { Component, OnInit } from '@angular/core';
import { UserWorkout } from '../UserWorkout';
import { WorkoutANDuserService } from '../workout-anduser.service';

@Component({
  selector: 'app-workout-anduser',
  templateUrl: './workout-anduser.component.html',
  styleUrls: ['./workout-anduser.component.css']
})
export class WorkoutANDuserComponent implements OnInit {

  sWorkout: UserWorkout = new UserWorkout();
  idWorkout: UserWorkout = new UserWorkout();
  cWorkout: UserWorkout = new UserWorkout();
  uWorkout: UserWorkout = new UserWorkout();
  dWorkout: UserWorkout = new UserWorkout();

  flag: boolean = false;
  addFlag: boolean = false;

  constructor(private theWorkoutValue: WorkoutANDuserService) { }

  ngOnInit(): void {
  }

  submitAddRequest(){
    this.addFlag=!this.addFlag;
  }

  searchOnWorkout(){
    let responseDataBack =  this.theWorkoutValue.searchOnWorkout(this.sWorkout);
    
    responseDataBack.subscribe((responseData) =>{
      this.sWorkout=responseData;
      console.log(responseData);  
      this.flag = true;    
    });
  } 

  //GET By ID
  searchOnWorkoutById(){
    let responseDataBack =  this.theWorkoutValue.searchOnWorkoutById(this.idWorkout);
    
    responseDataBack.subscribe((responseData) =>{
      this.idWorkout=responseData;
      console.log(responseData);  
      this.flag = true;    
    });
  } 

  //POST Method
  addNewWorkout(){
    let responseDataBack =  this.theWorkoutValue.addNewWorkout(this.cWorkout);
    
    responseDataBack.subscribe((responseData) =>{
      console.log("New Workout Added...");      
    });
  }


  //PUT Method
  updateWorkout(){
    let responseDataBack =  this.theWorkoutValue.updateWorkout(this.uWorkout);
    
    responseDataBack.subscribe((responseData) =>{
      console.log("Workout Updated...");
      
    });
  }

  //   //DELETE Method
  deleteWorkout(){
    let responseDataBack =  this.theWorkoutValue.deleteWorkout(this.dWorkout);
    
    responseDataBack.subscribe((responseData) =>{
      console.log("Workout Deleted...");
      
    });
  }
}
