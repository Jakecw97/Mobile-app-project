import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Storage } from '@ionic/storage';
import { Workout } from '../../models/workout.model';
/*
  Generated class for the WorkoutServiceProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class WorkoutServiceProvider {
  private workouts: Workout[] = [];
  private workout: Workout;
  constructor(public storage: Storage) {
  }
  saveWorkout(workout: Workout){
    workout.createDate = Date.now();
    this.workouts.push(workout);
    this.storage.set('workouts',this.workouts)
  }//saveWorkout end
  
  getAllWorkouts(){
   return this.storage.get('workouts').then(
     (workouts) => {
       this.workouts = workouts == null ? [] : workouts; //if workouts local storage is empty, display an empty array
       return[...this.workouts];//returns local storage as an array
     }
   )
  }//getAllWorkouts end
  
  getWorkout(createDate: number){
    return this.storage.get('workouts').then((workouts) => {
      this.workout = [...workouts].find(r => r.createDate === createDate);
      return this.workout;
    });
  }//getworkout
  eraseWorkout(createDate: number){
    this.workouts = this.workouts.filter((workout) =>{
      return this.workout.createDate !== createDate
    });
    this.storage.set('workouts', this.workouts);
  }//eraseWorkout
}
