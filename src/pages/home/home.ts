import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { AddWorkoutPage } from '../add-workout/add-workout';
import { WorkoutServiceProvider } from '../../providers/workout-service/workout-service';
import { Workout } from '../../models/workout.model';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
  
  workouts: Promise<Workout[]>;//Made into a promise to satisfy the will enter method

  constructor(public navCtrl: NavController, private workoutService: WorkoutServiceProvider) {

  }
  ionViewWillEnter(){
    this.workouts = this.getAllWorkouts();
  }//viewWillEnter
  addWorkout()
  {
    this.navCtrl.push(AddWorkoutPage);
  }//addWorkout

  getAllWorkouts()
  {
    return this.workoutService.getAllWorkouts();
  }//getAllNotes

}
