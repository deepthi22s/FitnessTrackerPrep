import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { WorkoutTime } from './WorkoutTime';

@Injectable({
  providedIn: 'root'
})
export class PutServiceService {

  constructor(private httpClient : HttpClient) { }

  updateStudentDetailsById(theWorkoutTime: any){
    // console.log(theWorkoutTime.workoutId);
    // console.log(theWorkoutTime);
    // console.log(theWorkoutTime.id);
    return this.httpClient.put<WorkoutTime>("http://localhost:8083/workoutTime/workoutTime/"+theWorkoutTime.id,theWorkoutTime, theWorkoutTime.id);
    
  }
}
