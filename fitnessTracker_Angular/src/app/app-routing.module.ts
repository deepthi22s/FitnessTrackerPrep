import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { WorkoutANDuserComponent } from './workout-anduser/workout-anduser.component';
import { WorkoutComponent } from './workout/workout.component';

const routes: Routes = [
   {path: 'show', component: WorkoutComponent },
   {path: 'workoutForUser', component: WorkoutANDuserComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }