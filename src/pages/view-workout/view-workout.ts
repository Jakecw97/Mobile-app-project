import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { WorkoutServiceProvider } from '../../providers/workout-service/workout-service';
import { Workout } from '../../models/workout.model';


/**
 * Generated class for the ViewWorkoutPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-view-workout',
  templateUrl: 'view-workout.html',
})
export class ViewWorkoutPage {
workout: Workout;
  constructor(public navCtrl: NavController, public navParams: NavParams, private workoutService: WorkoutServiceProvider) {
    this.workout = this.navParams.get('workout'); //selecting a workout with nav params, saves it to this method
  }


  eraseWorkout(createDate: number){
    this.workoutService.eraseWorkout(createDate);
    this.navCtrl.pop();
  }//erase workout

}
