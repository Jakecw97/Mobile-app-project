import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { AddWorkoutPage } from '../add-workout/add-workout';
import { WorkoutServiceProvider } from '../../providers/workout-service/workout-service';
import { Workout } from '../../models/workout.model';
import { ViewWorkoutPage } from '../view-workout/view-workout';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
  
  private workouts: Promise<Workout[]>;//Made into a promise to satisfy the will enter method
  private workout: Workout;
  constructor(public navCtrl: NavController, private workoutService: WorkoutServiceProvider) {

  }
  ionViewWillEnter(){
    this.workouts = this.getAllWorkouts();
  }//viewWillEnter
  addWorkout()
  {
    this.navCtrl.push(AddWorkoutPage);
  }//addWorkout

  getWorkout(createDate: number){
    this.workoutService.getWorkout(createDate).then((n) =>{
      this.workout = n;
      this.navCtrl.push(ViewWorkoutPage, {workout: this.workout})//passes the workout selected onto the viewWorkout page
    })
  }//getworkout

  getAllWorkouts()
  {
    return this.workoutService.getAllWorkouts();
  }//getAllNotes

}
