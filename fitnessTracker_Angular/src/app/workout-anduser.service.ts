import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { UserWorkout } from './UserWorkout';

@Injectable({
  providedIn: 'root'
})
export class WorkoutANDuserService {

  constructor(private httpClient: HttpClient) { 

  }

  searchOnWorkout(sWorkout) {
    sWorkout = "show";
    return this.httpClient.get<UserWorkout>("http://localhost:9092/user/"+ sWorkout);
  }

  searchOnWorkoutById(idWorkout) {
    return this.httpClient.get<UserWorkout>("http://localhost:9092/user/"+ idWorkout);
  }

  //POST Method
  addNewWorkout(cWorkout) {
    return this.httpClient.post<UserWorkout>("http://localhost:9092/user/create/", cWorkout);
  }

  //PUT Method
  updateWorkout(uWorkout) {
    return this.httpClient.put<UserWorkout>("http://localhost:9092/user/updateWorkout/", uWorkout);
  }

  // //DELETE Method
  deleteWorkout(dWorkout) {
    return this.httpClient.delete<UserWorkout>("http://localhost:9092/user/delete/"+dWorkout.workoutName);
  }
}
