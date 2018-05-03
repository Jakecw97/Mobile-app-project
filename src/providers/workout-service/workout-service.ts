import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Storage } from '@ionic/storage';
/*
  Generated class for the WorkoutServiceProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class WorkoutServiceProvider {
  private workouts: {title: string}[] = [];
  constructor() {
  }
  saveWorkout(workout: {title: string}){
    this.workouts.push(workout);
  }//saveWorkout end
  
  getAllWorkouts(){
    return [...this.workouts];
  }//getAllWorkouts end
}
