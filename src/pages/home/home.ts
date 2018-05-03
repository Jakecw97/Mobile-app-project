import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { AddWorkoutPage } from '../add-workout/add-workout';
import { WorkoutServiceProvider } from '../../providers/workout-service/workout-service';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
  
  workouts: {title: string}[] =[];
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
